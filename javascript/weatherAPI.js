console.log("weatherAPI.js");

const lat = 60.1915392 ;
const lon = 24.936448;

//  Weather API function
let api_key = localStorage.getItem('weather-api-key');
async function getWeather(lat, lon) {
    try {
        const resp = await fetch("https://api.openweathermap.org/data/2.5/weather?units=metric&lat=" + lat + "&lon=" + lon + "&APPID=" + api_key);
        
        if (!resp.ok) {
            throw new Error("Network response was not ok");
        }

        const respJson = await resp.json();
        document.querySelector("#displayCity").innerHTML = respJson.name;
        document.querySelector("#displayDegrees").innerHTML = respJson.main.temp.toFixed(1) + "°";
        
    } catch (error) {
        console.log("Weather api not working properly...");
    }
}
getWeather(lat, lon)
