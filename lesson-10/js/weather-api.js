
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=4682464&units=imperial&appid=860c65469fe554218b5868385fb93531";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let temp = document.querySelector('#current-temp');
    temp.textContent = jsObject.main.temp.toFixed(1);
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.querySelector('#icon-src').textContent = iconsrc;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;
  });
