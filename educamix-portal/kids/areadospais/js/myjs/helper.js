/**
 * GET EM JS
 */
function urlDecode(string, overwrite){
    if(!string || !string.length){
        return {};
    }
    var obj = {},
        pairs = string.split('&'),
        pair, name, value,
        lsRegExp = /\+/g;
    for(var i = 0, len = pairs.length; i < len; i++){
        pair = pairs[i].split('=');
        name = unescape(pair[0]);
        value = unescape(pair[1]).replace(lsRegExp, " ");
        //value = decodeURIComponent(pair[1]).replace(lsRegExp, " ");
        if(overwrite !== true){
            if(typeof obj[name] == "undefined"){
                obj[name] = value;
            }else if(typeof obj[name] == "string"){
                obj[name] = [obj[name]];
                obj[name].push(value);
            }else{
                obj[name].push(value);
            }
        }else{
            obj[name] = value;
        }
    }
    return obj;
}
function jsGet(url, param){
    var wl = url,
        params = urlDecode(wl.substring(wl.indexOf("?")+1));
    return(params[param]);
}


/*
 *Suporte a placeholder em formularios
 */
$(function () {
    jQuery.support.placeholder = false;
    test = document.createElement('input');
    if('placeholder' in test) jQuery.support.placeholder = true;
    if (!$.support.placeholder) {
        $('.field').find ('label').show ();
    }
});
/*
 * Regex usados
 *
 * CREDITOS:
 * Youtube: { @author: Stephan Schmitz <eyecatchup@gmail.com>, @url: http://stackoverflow.com/a/10315969/624466 }
 */
var Regex = {
    url : /(^|\s)((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/,
    email : /^([0-9a-zA-Z]+([_.-]?[0-9a-zA-Z]+)*@[0-9a-zA-Z]+[0-9,a-z,A-Z,.,-]*(.){1}[a-zA-Z]{2,4})+$/,
    youtube : /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/
};



var loading = function(on){
    var l = $('#loader');
    console.log(on);
    if(on){
        l.fogLoader({
            closeOnEscape: false,
            width: 200,
            height: 50,
            animated: true,
            message: 'Aguarde'
        });
    } else {
        l.dialog('close');
    }
};