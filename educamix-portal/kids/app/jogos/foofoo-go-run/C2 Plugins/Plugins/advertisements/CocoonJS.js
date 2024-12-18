(function()
{
	// There should not be a CocoonJS object when this code is executed.
	// if (typeof window.CocoonJS !== 'undefined') throw("This is strange, a CocoonJS object already exists when trying to create it.");

    /**
    * The basic object for all the CocoonJS related specific APIs === extensions.
    * @namespace
    */
    CocoonJS = {};

	CocoonJS.nativeExtensionObjectAvailable = typeof window.ext !== 'undefined';

	/**
	* This type represents a 2D size structure with horizontal and vertical values.
	* @namespace
	*/
	CocoonJS.Size =
	{
		/**
		* The horizontal size value.
		*/
		width : 0,

		/**
		* The vertical size value.
		*/
		height : 0
	};

	/**
	* This function allows a call to the native extension object function reusing the same arguments object.
	* Why is interesting to use this function instead of calling the native object's function directly?
	* As the CocoonJS object functions expicitly receive parameters, if they are not present and the native call is direcly mapped,
	* undefined arguments are passed to the native side. Some native functions do not check the parameters validation
	* correctly (just check the number of parameters passed).
	* Another solution instead of using this function call is to correctly check if the parameters are valid (not undefined) to make the
	* call, but it takes more work than using this approach.
	* @static
	* @param {string} nativeExtensionObjectName The name of the native extension object name. The object that is a member of the 'ext' object.
	* @param {string} nativeFunctionName The name of the function to be called inside the native extension object.
	* @param {object} arguments The arguments object of the CocoonJS extension object function. It contains all the arguments passed to the CocoonJS extension object function and these are the ones that will be passed to the native call too.
	* @param {boolean} [async] A flag to indicate if the makeCall (false or undefined) or the makeCallAsync function should be used to perform the native call.
	* @returns Whatever the native function call returns.
	*/
	CocoonJS.makeNativeExtensionObjectFunctionCall = function(nativeExtensionObjectName, nativeFunctionName, arguments, async)
	{
		if (CocoonJS.nativeExtensionObjectAvailable)
		{
			var argumentsArray = Array.prototype.slice.call(arguments);
			argumentsArray.unshift(nativeFunctionName);
			var nativeExtensionObject = ext[nativeExtensionObjectName];
			var makeCallFunction = async ? nativeExtensionObject.makeCallAsync : nativeExtensionObject.makeCall;
			var ret = makeCallFunction.apply(nativeExtensionObject, argumentsArray);

			return typeof(ret) === "string" ? JSON.parse(ret) : ret;
		}
	};

	/**
	* Returns an object retrieved from a path specified by a dot specified text path starting from a given base object.
	* @param {Object} baseObject The object to start from to find the object using the given text path.
	* @param {string} objectPath The path in the form of a text using the dot notation. i.e. "document.body"
	* For example:
	* var body = getObjectFromPath(window, "document.body");
	*/
	CocoonJS.getObjectFromPath = function(baseObject, objectPath)
	{
    	var parts = objectPath.split('.');
    	var obj = baseObject;
        for (var i = 0, len = parts.length; i < len; ++i) 
        {
            obj[parts[i]] = obj[parts[i]] || undefined;
    		obj = obj[parts[i]];
    	}
    	return obj;
 	};

	/**
	* A class that represents objects to handle events. Event handlers have always the same structure:
	* A addEventListener and a removeEventListener functions.
	* Both functions receive a callback function that will be added or removed. All the added callback
	* functions will be called when the event takes place.
	* @constructor
	* @param {string} nativeExtensionObjectName
	* @param {string} cocoonJSExtensionObjectName
	* @param {string} nativeEventName
	*/
	CocoonJS.EventHandler = function(nativeExtensionObjectName, cocoonJSExtensionObjectName, nativeEventName)
	{
		this.listeners = [];

		/**
		* Adds a callback function so it can be called when the event takes place.
		* @param {function} listener The callback function to be added to the event handler object. See the referenced Listener function documentation for more detail in each event handler object's documentation.
		*/
		this.addEventListener = function(listener)
		{
			var cocoonJSExtensionObject = CocoonJS.getObjectFromPath(CocoonJS, cocoonJSExtensionObjectName);
            if (cocoonJSExtensionObject.nativeExtensionObjectAvailable)
            {
                ext[nativeExtensionObjectName].addEventListener(nativeEventName, listener);
            }
            else
            {
                var indexOfListener = this.listeners.indexOf(listener);
                if (indexOfListener < 0)
                {
                	this.listeners.push(listener);
                }
            }
		};

		/**
		* Removes a callback function that was added to the event handler so it won't be called when the event takes place.
		* @param {function} listener The callback function to be removed from the event handler object. See the referenced Listener function documentation for more detail in each event handler object's documentation.
		*/
		this.removeEventListener = function(listener)
		{
			var cocoonJSExtensionObject = CocoonJS.getObjectFromPath(CocoonJS, cocoonJSExtensionObjectName);
            if (cocoonJSExtensionObject.nativeExtensionObjectAvailable)
            {
                ext[nativeExtensionObjectName].removeEventListener(nativeEventName, listener);
            }
            else
            {
                var indexOfListener = this.listeners.indexOf(listener);
                if (indexOfListener >= 0)
                {
                	this.listeners.splice(indexOfListener, 1);
                }
            }
		};

		this.notifyEventListeners = function()
		{
			var argumentsArray = Array.prototype.slice.call(arguments);
			var listeners = this.listeners;
			var _this = this;
			// Notify listeners after a while ;) === do not block this thread.
            setTimeout(function()
            {
				for (var i = 0; i < listeners.length; i++)
				{
					listeners[i].apply(_this, argumentsArray);
				}
			}, 100);
		};
		return this;
	};

	// CocoonJS.FindAllNativeBindingsInCocoonJSExtensionObject = function(cocoonJSExtensionObject, nativeFunctionBindingCallback, nativeEventBindingCallback)
	// {
	// 	for (var cocoonJSExtensionObjectAttributeName in cocoonJSExtensionObject)
	// 	{
	// 		var cocoonJSExtensionObjectAttribute = cocoonJSExtensionObject[cocoonJSExtensionObjectAttributeName];

	// 		// Function
	// 		if (typeof cocoonJSExtensionObjectAttribute === 'function' && typeof cocoonJSExtensionObjectAttribute.nativeFunctionName !== 'undefined')
	// 		{
	// 			var nativeFunctionName = cocoonJSExtensionObjectAttribute.nativeFunctionName;
	// 			nativeFunctionBindingCallback(cocoonJSExtensionObjectAttributeName, nativeFunctionName);
	// 		}
	// 		// Event object
	// 		else if (typeof cocoonJSExtensionObjectAttribute === 'object' && cocoonJSExtensionObjectAttribute !== null && typeof cocoonJSExtensionObjectAttribute.nativeEventName !== 'undefined')
	// 		{
	// 			var nativeEventName = cocoonJSExtensionObjectAttribute.nativeEventName;
	// 			nativeEventBindingCallback(cocoonJSExtensionObjectAttributeName, nativeEventName);
	// 		}
	// 	}
	// }

	/**
	This function looks for a CocoonJS extension object that is bound to the given native ext object name.
	@returns The CocoonJS extension object that corresponds to the give native extension object name or null if it cannot be found.
	*/
	// CocoonJS.GetCocoonJSExtensionObjectForNativeExtensionObjectName = function(nativeExtensionObjectName)
	// {
	// 	var cocoonJSExtensionObject = null;
	// 	// Look in the CocoonJS object and for every object that is a CocoonJS.Extension check if it's nativeExtensionObjectName matches to the one passed as argument. If so, create an object that will represent it's documentation for the native ext object.
	// 	for (var cocoonJSAttributeName in CocoonJS)
	// 	{
	// 		var cocoonJSAttribute = CocoonJS[cocoonJSAttributeName];
	// 		if (typeof cocoonJSAttribute === 'object' && cocoonJSAttribute instanceof CocoonJS.Extension && cocoonJSAttribute.nativeExtensionObjectName === nativeExtensionObjectName)
	// 		{
	// 			// We have found the CocoonJS object that represents the native ext extension object name. 
	// 			cocoonJSExtensionObject = cocoonJSAttribute;
	// 			break;
	// 		}
	// 	}
	// 	return cocoonJSExtensionObject;
	// };

	/**
	This function adds functions to a CocoonJS extension object in order to bind them to the native makeCall function calls of the ext object.

	@param extensionObject The reference to the CocoonJS extension object where to add the new functions bound to the ext object makeCall functions calls.

	@param nativeFunctionsConfiguration An array of objects with the following structure:

		{ nativeFunctionName : "" [, functionName : "", isAsync : true/false] }

		- nativeFunctionName: Specifies the name of the function inside the ext object makeCall function call that will be bound.
		- functionName: An optional attribute that allows to specify the name of the function to be added to the CocoonJS extension object. If is not present, the name of the function will be the same
		as the nativeFunctionName.
		- isAsync: An optional attribute that allows to specify if the call should be performed using makeCall (false or missing) or makeCallAsync (true).
		- alternativeFunction: An optional attribute that allows to specify an alternative function that will be called internally when this function is called. This attribute
		allows for adding new functionalities like for example adding methods 

	@returns The CocoonJS extension object.
	*/
	// CocoonJS.AddNativeFunctionBindingsToExtensionObject = function(extensionObject, nativeFunctionsConfiguration)
	// {
	// 	if (typeof extensionObject === 'undefined' || extensionObject === null) throw("The passed extension object be a valid object.");
	// 	if (typeof nativeFunctionsConfiguration === 'undefined' || nativeFunctionsConfiguration === null) throw("The passed native functions configuration array must be a valid object.");

	// 	for (var i = 0; i < nativeFunctionsConfiguration.length; i++)
	// 	{
	// 		if (typeof nativeFunctionsConfiguration[i].nativeFunctionName === 'undefined') throw("The 'nativeFunctionName' attribute in the native function configuration object at index '" + i + "' in the native function configuration array cannot be undefined.");
	// 		var nativeFunctionName = nativeFunctionsConfiguration[i].nativeFunctionName;
	// 		var functionName = typeof nativeFunctionsConfiguration[i].functionName !== 'undefined' ? nativeFunctionsConfiguration[i].functionName : nativeFunctionName;
	// 		var makeCallFunction = null;
	// 		makeCallFunction = typeof nativeFunctionsConfiguration[i].isAsync !== 'undefined' && nativeFunctionsConfiguration[i].isAsync ? extensionObject.nativeExtensionObject.makeCallAsync : extensionObject.nativeExtensionObject.makeCall;
	// 		// Add the new function to the CocoonJS extension object
	// 		extensionObject[functionName] = function()
	// 		{
	// 			// Convert the arguments object to an array
	// 			var arguments = Array.prototype.slice.call(arguments);
	// 			// Add the native function name as the first parameter
	// 			arguments.unshift(nativeFunctionName);
	// 			// Make the native ext object call
	// 			var result = makeCallFunction.apply(extensionObject.nativeExtensionObject, arguments);
	// 			return result;
	// 		}
	// 		// Add a property to the newly added function to store the name of the original function.
	// 		extensionObject[functionName].nativeFunctionName = nativeFunctionName;
	// 	}
	// 	return extensionObject;
	// };

	/**
	This function adds objects to a CocoonJS extension object to allow event listener handling (add and remove) bound to the native ext object event listener handling.

	@param extensionObject The reference to the CocoonJS extension object where to add the new objects bound to the ext object event listener handling.

	@param nativeEventsConfiguration An array of objects with the following structure:

		{ nativeEventName : "" [, eventObjectName : ""] }

		- nativeEventName: Specifies the event in the native ext object to be bound.
		- eventObjectName: An optional attribute that allows to specify the name of the object to be added to the CocoonJS extension object. If is not present, the name of the function will be the same
		as the nativeEventName.
		- alternativeAddEventListenerFunction:
		- alternativeRemoveEventListenerFunction:

	@returns The CocoonJS extension object.
	*/
	// CocoonJS.AddNativeEventBindingsToExtensionObject = function(extensionObject, nativeEventsConfiguration)
	// {
	// 	if (typeof extensionObject === 'undefined' || extensionObject === null) throw("The passed extension object be a valid object.");
	// 	if (typeof nativeEventsConfiguration === 'undefined' || nativeEventsConfiguration === null) throw("The passed native events configuration array must be a valid object.");

	// 	for (var i = 0; i < nativeEventsConfiguration.length; i++)
	// 	{
	// 		if (typeof nativeEventsConfiguration[i].nativeEventName === 'undefined') throw("The 'nativeEventName' attribute in the native event configuration object at index '" + i + "' in the native event configuration array cannot be undefined.");
	// 		var nativeEventName = nativeEventsConfiguration[i].nativeEventName;
	// 		var eventObjectName = typeof nativeEventsConfiguration[i].eventObjectName !== 'undefined' ? nativeEventsConfiguration[i].eventObjectName : nativeEventName;
	// 		// Anonymous function call so each variable in the loop is used in the event listener handling function bindings.
	// 		(function(nativeEventName, eventObjectName)
	// 		{
	//     		extensionObject[eventObjectName] =
	//     		{
	//     			// Store the native event name
	//     			nativeEventName : nativeEventName,
	//     			// Create the event listener management functions bound to the native counterparts
	//     			addEventListener : function(callback)
	// 	    		{
	// 	    			extensionObject.nativeExtensionObject.addEventListener(nativeEventName, callback);
	//     			},
	//     			removeEventListener : function(callback)
	//     			{
	// 	    			extensionObject.nativeExtensionObject.removeEventListener(nativeEventName, callback);
	//     			}
	//     			// ,
	//     			// removeAllEventListeners : function()
	//     			// {

	//     			// }
	//     		};
	// 		})(nativeEventName, eventObjectName);
	// 	}
	// 	return extensionObject;
	// };

	/**
	The function object constructor function all the CocoonJS extensions can use to instantiate the CocoonJS extension object and add all the functionality needed bound to the native ext object.

	@param nativeExtensionObject The reference to the ext object extension object.

	@param nativeFunctionsConfiguration See CocoonJS.AddNativeFunctionBindingsToExtensionObject function's documentation for more details.

	@param nativeEventsConfiguration See CocoonJS.AddNativeEventBindingsToExtensionObject function's documentation for more details.

	@returns The new CocoonJS extension object.
	*/
	// CocoonJS.Extension = function(nativeExtensionObjectName, nativeFunctionsConfiguration, nativeEventsConfiguration)
	// {
	// 	if (typeof nativeExtensionObjectName === 'undefined' || nativeExtensionObjectName === null) throw("The native extension object name cannot be null");

	// 	if (window.ext[nativeExtensionObjectName] === 'undefined') throw("The given native extension object name '" + nativeExtensionObjectName + "' is incorrect or the native extension object is undefined.");

	// 	var nativeExtensionObject = window.ext[nativeExtensionObjectName];

	// 	// Store a reference to the native extension object and to it's name
	// 	this.nativeExtensionObject = nativeExtensionObject;
	// 	this.nativeExtensionObjectName = nativeExtensionObjectName;

	// 	// If native function configuration is passed, use it to add some functions to the new extension object.
	// 	if (typeof nativeFunctionsConfiguration !== 'undefined')
	// 	{
	// 		CocoonJS.AddNativeFunctionBindingsToExtensionObject(this, nativeFunctionsConfiguration);
	// 	}

	// 	// If native event configuration is passed, use it to add some event objects to the new extension object.
	// 	if (typeof nativeEventsConfiguration !== 'undefined')
	// 	{
	// 		CocoonJS.AddNativeEventBindingsToExtensionObject(this, nativeEventsConfiguration);
	// 	}

	// 	return this;
	// };   

})();

	