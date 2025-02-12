console.log("weatherAPI.js");

const lat = 60.1915392 ;
const lon = 24.936448;

//  Weather API function
let api_key = localStorage.getItem('weather_key');
async function getWeather(lat, lon) {
    const resp = await fetch("https://api.openweathermap.org/data/2.5/weather?units=metric&lat=" + lat + "&lon=" + lon + "&APPID=" + api_key);
    const respJson = await resp.json();

    //console.log(respJson)
    
    document.querySelector("#displayCity").innerHTML = respJson.name;
    document.querySelector("#displayDegrees").innerHTML = respJson.main.temp + "°";
}
getWeather(lat, lon)
