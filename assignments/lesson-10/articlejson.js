var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        var townInfo = request.response;
        
    
        console.log(townInfo);


    var towns = townInfo.towns;

    var eventsarr = [];

    for(var i = 0; i < towns.length; i++){
        for(var x = 0; x < towns.events.length; x++){
            
            eventsarr.push(towns.events);
            

            
        }
    }
}