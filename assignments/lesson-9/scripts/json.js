
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        var townInfo = request.response;
        
    
        console.log(townInfo);


    var towns = townInfo.towns;

    var townNames = ["Fish Haven", "Soda Springs", "Preston"];

    for(var i = 0; i < towns.length; i++){
        for(var x = 0; x < townNames.length; x++){
            if(towns[i].name == townNames[x]){
                
                var article = document.createElement("article");
                var h2 = document.createElement("h2");
                var h3 = document.createElement("h3");
                var p1 = document.createElement("p");
                var p2 = document.createElement("p");
                var p3 = document.createElement("p");

                h2.textContent = towns[i].name;
                h3.textContent = towns[i].motto;
                p1.textContent = "Year Founded " + towns[i].yearFounded;
                p2.textContent = "Current Population " + towns[i].currentPopulation;
                p3.textContent = "Annual Rain Fall " + towns[i].averageRainfall;

                article.appendChild(h2);
                article.appendChild(h3);
                article.appendChild(p1);
                article.appendChild(p2);
                article.appendChild(p3);
                
                document.getElementById("jdrop").appendChild(article);

            }
        }
    }
}

