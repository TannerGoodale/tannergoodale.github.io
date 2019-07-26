let weatherQuery2 = new XMLHttpRequest();
let apiurl2 = "https://api.openweathermap.org/data/2.5/weather?lat=39.2202508&lon=-94.5034058&units=imperial&APPID=735c55b5712d6e13581d3eae04c8d957";
weatherQuery.open('Get', apiurl2, true);
weatherQuery.send();

weatherQuery.onload = function(){
    let apiData2 = JSON.parse(weatherQuery.responseText);
    console.log(apiData2);

    document.getElementById('jcur2').innerHTML = apiData2.weather[0].main;
    document.getElementById('jtempmax2').innerHTML = apiData2.main.temp_max + "&deg;F";
    document.getElementById('jhum2').innerHTML = apiData2.main.humidity + "%";
    document.getElementById('s2').innerHTML = apiData2.wind.speed + " mph";

}