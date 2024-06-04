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