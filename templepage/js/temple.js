var requestURL = 'https://github.com/TannerGoodale/tannergoodale.github.io/blob/master/templepage/development/temples.json';
var request = new XMLHttpRequest();
    request.open('GET', requestURL, true);
    request.withCredentials = true;
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        var townInfo = request.response;
        
    
        console.log(townInfo);
}
    
var obj = JSON.parse({
  "temples": {
    "temple": [
      {
        "id": "1",
        "Name": "Salt Lake Temple",
        "photo": "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/800x1280/slctemple8.jpg",
        "Closures": ["Saturday, 5 October 2019", "Thursday, 17 October 2019 (Limited Hours)", "Wednesday, 27 November 2019 (Limited Hours)", "Thursday, 28 November 2019 - Friday, 29 November 2019", "Tuesday, 24 December 2019 - Wednesday, 25 December 2019", "Tuesday, 31 December 2019"]
      },
      {
        "id": "2",
        "Name": "Kansas City Temple",
        "photo": "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/kansas-city-missouri/800x500/kansas-city-temple-lds-911027-wallpaper.jpg",
        "Closures": ["Monday, 22 July 2019 - Monday, 5 August 2019", "Saturday, 5 October 2019", "Wednesday, 27 November 2019 (Limited Hours)", "Thursday, 28 November 2019", "Tuesday, 24 December 2019 - Wednesday, 25 December 2019"]
      },
      {
        "id": "3",
        "Name": "Nauvoo Illinois Temple",
        "photo": "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/nauvoo-illinois/800x500/nauvoo-temple-lds-890728-wallpaper.jpg",
        "Closures": ["Saturday, 5 October 2019","Monday, 11 November 2019 - Monday, 25 November 2019","Wednesday, 27 November 2019 - Thursday, 28 November 2019","Wednesday, 25 December 2019"]
      },
      {
        "id": "4",
        "Name": "Laie Hawaii Temple",
        "photo": "https://assets.ldscdn.org/58/36/5836fd79f0f92e33bfe124e2f86ff43a382af1be/laie_hawaii_temple_lds.jpg",
        "Closures": ["Friday, 4 October 2019 (Limited Hours)","Saturday, 5 October 2019","Wednesday, 27 November 2019 (Limited Hours)","Thursday, 28 November 2019","Tuesday, 24 December 2019 - Wednesday, 25 December 2019","Friday, 27 December 2019 (Limited Hours)","Saturday, 28 December 2019 (Limited Hours)","Monday, 30 December 2019 - Monday, 13 January 2020"]
      }
    ]
  }
})