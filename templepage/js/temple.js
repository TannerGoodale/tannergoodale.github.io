var requestURL = 'https://github.com/TannerGoodale/tannergoodale.github.io/blob/master/jsons/temples.json';
var request = new XMLHttpRequest();
    request.open('GET', requestURL, true);
    request.withCredentials = true;
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        var townInfo = request.response;
        
    
        console.log(townInfo);
}