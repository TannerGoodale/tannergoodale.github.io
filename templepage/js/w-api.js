let weatherQuery = new XMLHttpRequest();
let apiurl = "https://api.openweathermap.org/data/2.5/weather?lat=40.7705943&lon=-111.8942872&units=imperial&APPID=735c55b5712d6e13581d3eae04c8d957";
weatherQuery.open('Get', apiurl, true);
weatherQuery.send();

weatherQuery.onload = function(){
    let apiData = JSON.parse(weatherQuery.responseText);
    console.log(apiData);

    document.getElementById('jcur1').innerHTML = apiData.weather[0].main;
    document.getElementById('jtempmax1').innerHTML = apiData.main.temp_max + "&deg;F";
    document.getElementById('jhum1').innerHTML = apiData.main.humidity + "%";
    document.getElementById('s1').innerHTML = apiData.wind.speed + " mph";

}