let weatherQuery4 = new XMLHttpRequest();
let apiurl4 = "https://api.openweathermap.org/data/2.5/weather?lat=21.6472312&lon=-157.9328775&units=imperial&APPID=735c55b5712d6e13581d3eae04c8d957";
weatherQuery.open('Get', apiurl4, true);
weatherQuery.send();

weatherQuery.onload = function(){
    let apiData4 = JSON.parse(weatherQuery.responseText);
    console.log(apiData4);

    document.getElementById('jcur4').innerHTML = apiData4.weather[0].main;
    document.getElementById('jtempmax4').innerHTML = apiData4.main.temp_max + "&deg;F";
    document.getElementById('jhum4').innerHTML = apiData4.main.humidity + "%";
    document.getElementById('s4').innerHTML = apiData4.wind.speed + " mph";

}