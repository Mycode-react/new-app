const button = document.getElementById("buttontab");
const input = document.getElementById("inputtab");

const cityName = document.getElementById('city-name');
const countryName = document.getElementById('country-name');
const cityTemp = document.getElementById('city-temp');
const cityDesc = document.getElementById('wdescription');
const cityHumidity = document.getElementById('humidity');
const cityPressure = document.getElementById('pressure');
const cityWind = document.getElementById('wind');
const citySunrise = document.getElementById('sunrise');
const cityIcons = document.getElementById('iconstab');


const weatherIcons = {
    "01d": "sunny.svg",
    "01n": "night.svg",
    "02d": "day.svg",
    "03d": "cloudy.svg",
    "03n": "cloudy.svg",
    "04d": "Perfectday.svg",
    "04n": "cloudy-night.svg",
    "09n": "rain-night.svg",
    "10d": "rain.svg",
    "10n": "rain-night.svg",
    "11d": "storm.svg",
    "11n": "storm.svg",
    "13d": "snow.svg",
    "13n": "snow.svg",
    "50d": "Mist.svg",
    "50n": "Mist.svg",
};
function timeConvert(num) {

    var hours = Math.floor(num / 60);
    var minutes = Math.floor(num % 60);
    console.log(hours + ":" + minutes)
}

async function getWeatherData(cityName) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=71f6779186cc32448b4c412eea65b982&units=metric`);
    return await response.json();
}
button.addEventListener('click', async () => {
    const value = input.value;
    const result = await getWeatherData(value);
    console.log(result)
    cityName.innerText = `${result.name}`;
    countryName.innerText = `${result.sys.country}`;
    cityTemp.innerText = `${result.main.temp}`;
    cityDesc.innerText = `${result.weather[0].description}`
    cityHumidity.innerText = `${result.main.humidity}`
    cityPressure.innerText = `${result.main.pressure}`
    cityWind.innerText = `${result.wind.speed}`
    citySunrise.innerText = `${result.main.temp_max}`
    cityIcons.src = `${weatherIcons[result.weather[0].icon]}`
})