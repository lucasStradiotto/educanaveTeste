// ECMAScript 5 strict mode
"use strict";

assert2( cr, "cr namespace not created" );
assert2( cr.plugins_, "cr.plugins_ not created" );

/////////////////////////////////////
// Plugin class
cr.plugins_.ClayAds = function( runtime )
{
	this.runtime = runtime;
};

( function ()
{
	var pluginProto = cr.plugins_.ClayAds.prototype;
		
	/////////////////////////////////////
	// Object type class
	pluginProto.Type = function( plugin )
	{
		this.plugin = plugin;
		this.runtime = plugin.runtime;
	};
	
	var clayRuntime = null;
	
	var Clay; // All Clay.io methods will be called from this

	var typeProto = pluginProto.Type.prototype;
	
	// called on startup for each object type
	typeProto.onCreate = function()
	{
		// Require them to use the Clay.io plugin...
	};

	/////////////////////////////////////
	// Instance class

	pluginProto.Instance = function( type )
	{
		this.type = type;
		this.runtime = type.runtime;
		
		// any other properties you need, e.g...
		// this.myValue = 0;
	};
	
	var instanceProto = pluginProto.Instance.prototype;

	// called whenever an instance is created
	instanceProto.onCreate = function()
	{
		if( this.runtime.isNodeWebkit )
		{
			cr.logexport( "[Construct 2] Clay.io Advertisements plugin not supported on this platform - the object will not be created" );
			return;
		}

		clayRuntime = this.runtime;
		
		if( typeof window['Clay'] === 'undefined' )
		{
			window['Clay'] = {};
		}
		Clay = window['Clay'];

		var DOMid = 'c2canvasdiv';
		var show = this.properties[2] == 0 ? true : false;
		
		var left = this.layer.layerToCanvas( this.x, this.y, true );
		var top = this.layer.layerToCanvas( this.x, this.y, false );
		var right = this.layer.layerToCanvas( this.x + this.width, this.y + this.height, true );
		var bottom = this.layer.layerToCanvas( this.x + this.width, this.y + this.height, false );
				
		//var offsetLeft = this.runtime.canvas.offsetLeft;
		var offsetLeft = 0;
		//var offsetTop = this.runtime.canvas.offsetTop;
		var offsetTop = 0;
		// Change in C2 seems to be causing these ads to be positioned differently. Margin-left instead of auto?
		
		var width = right - left;
		var height = bottom - top;
		
		( function( self ) {
			var duration = self.properties[3] || 15000;
			// Wait til it's ready
			var localInterval = setInterval( function() {
				if( Clay['documentReadyCheck'] )
				{
					clearInterval( localInterval );
					var size = Clay['Advertisement']['validFormats'][ self.properties[0] ];
					var options = {
						'size': size,
						'position': {
							'left': left + offsetLeft,
							'top': top + offsetTop,
							'scaleWidth': width,
							'scaleHeight': height,
							'parent': DOMid,
							'inline': false,
							'width': width + 'px',
							'height': height + 'px'
						},
						'show': show,
						'refreshInterval': self.properties[1],
						'duration': duration
					};
					
					if( size == 'cross-promotion-bar' )
					{
						self.advertisement = new Clay['Bar']( options );						
					}
					else
					{
						self.advertisement = new Clay['Advertisement']( options );
					}
			
					self.runtime.tickMe( self );
				}
			}, 50 );
		} )( this );

	};
	
	instanceProto.onDestroy = function ()
	{
		if( this.advertisement )
			this.advertisement['hide'](); // TODO: Should probably actually remove this element...
		this.advertisement = null;
	};
	
	instanceProto.tick = function ()
	{
		this.updatePosition();
	};

	instanceProto.updatePosition = function()
	{
		var left = this.layer.layerToCanvas( this.x, this.y, true );
		var top = this.layer.layerToCanvas( this.x, this.y, false );
		
		//var offsetLeft = this.runtime.canvas.offsetLeft;
		var offsetLeft = 0;
		//var offsetTop = this.runtime.canvas.offsetTop;
		var offsetTop = 0;
		// Change in C2 seems to be causing these ads to be positioned differently. Margin-left instead of auto?
		
		if( this.prevX == left + offsetLeft && this.prevY == top + offsetTop )
			return;

		this.prevX = left + offsetLeft;
		this.prevY = top + offsetTop;

		var right = this.layer.layerToCanvas( this.x + this.width, this.y + this.height, true );
		var bottom = this.layer.layerToCanvas( this.x + this.width, this.y + this.height, false );
		
		var width = right - left;
		var height = bottom - top;
				
		this.advertisement['setPosition']( {
			left: left + offsetLeft,
			top: top + offsetTop,
			scaleWidth: width,
			scaleHeight: height
		} );
	};
	
	// only called if a layout object - draw to a canvas 2D context
	instanceProto.draw = function( ctx )
	{
	};
	
	// only called if a layout object in WebGL mode - draw to the WebGL context
	// 'glw' is not a WebGL context, it's a wrapper - you can find its methods in GLWrap.js in the install
	// directory or just copy what other plugins do.
	instanceProto.drawGL = function ( glw )
	{
	};

	//////////////////////////////////////
	// Conditions

	pluginProto.cnds = {};
	var cnds = pluginProto.cnds;

	cnds.cdns_clay_set_game_key = function () {
		return true;
	}
	
	//////////////////////////////////////
	// Actions

	pluginProto.acts = {};
	var acts = pluginProto.acts;
	
	
	acts.show = function() {
		this.advertisement['show']();
	};
	acts.hide = function() {
		this.advertisement['hide']();
	};
	acts.refresh = function() {
		this.advertisement['refresh']();
	};
	
	//////////////////////////////////////
	// Expressions

	pluginProto.exps = {};
	var exps = pluginProto.exps;

	exps.Visible = function( ret ) {
		ret.set_int( ( this.advertisement && this.advertisement['visible'] ) ? 1 : 0 );
	}

}() );