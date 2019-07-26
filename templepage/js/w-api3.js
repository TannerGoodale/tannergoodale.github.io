let weatherQuery3 = new XMLHttpRequest();
let apiurl3 = "https://api.openweathermap.org/data/2.5/weather?lat=40.5504732&lon=-91.3865633&units=imperial&APPID=735c55b5712d6e13581d3eae04c8d957";
weatherQuery.open('Get', apiurl3, true);
weatherQuery.send();

weatherQuery.onload = function(){
    let apiData3 = JSON.parse(weatherQuery.responseText);
    console.log(apiData3);

    document.getElementById('jcur3').innerHTML = apiData3.weather[0].main;
    document.getElementById('jtempmax3').innerHTML = apiData3.main.temp_max + "&deg;F";
    document.getElementById('jhum3').innerHTML = apiData3.main.humidity + "%";
    document.getElementById('s3').innerHTML = apiData3.wind.speed + " mph";

}