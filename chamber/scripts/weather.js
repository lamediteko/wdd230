
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=4682464&units=imperial&appid=860c65469fe554218b5868385fb93531";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    let temp = document.querySelector('#temp-value');
    let tempVal = jsObject.main.temp.toFixed(0);
    temp.textContent = tempVal;
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    let desc = jsObject.weather[0].description;
    desc = desc.toUpperCase()
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('#current-weather').textContent = desc;
    const windspeed = document.getElementById("wind-speed-value");
    let windspeedVal = jsObject.wind.speed;
    windspeed.textContent = windspeedVal;
    let currentChill = windchill(tempVal, windspeedVal);
    if (currentChill === -1.0) {
        document.getElementById("windchill").textContent = "Windchill: N/A";
    }
    else {
        document.getElementById("windchill").textContent = `Windchill: ${currentChill}° F`;
    }
  });


let windchill = function (temp, windSpeed) {
    if (temp > 50) return -1.0;
    else if (windSpeed < 3) return -1.0;

    let chill = (35.74 + (0.6215 * temp) - (35.75 * windSpeed ** 0.16) + (0.4275 * temp * windSpeed ** 0.16));
    return chill.toFixed(0);
}

