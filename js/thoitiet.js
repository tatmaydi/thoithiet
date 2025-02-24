
const APP_ID = '833b894a267785062f51af8ff96731c6';
const DEFAULE_VALUE = '--';

const searchInput = document.querySelector('#search-input');
const cityName = document.querySelector('.city-name');
const weatherState = document.querySelector('.weather-state');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');


const sunrise = document.querySelector('.sunrise');
const sunset = document.querySelector('.sunset');
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.wind-speed');


searchInput.addEventListener('change',(e) =>{
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${APP_ID}&units=metric&lang=vi`)
    .then(async res => {
        const data = await res.json();
        console.log('[Search Input]', data);
        cityName.innerHTML = data.name ||  DEFAULE_VALUE;
        weatherState.innerHTML = data.weather[0].description ||  DEFAULE_VALUE;
        weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
        temperature.innerHTML = Math.round(data.main.temp) || DEFAULE_VALUE;

        sunrise.innerHTML = moment.unix(data.sys.sunrise).format('H:mm') || DEFAULE_VALUE;
        sunset.innerHTML = moment.unix(data.sys.sunset).format('H:mm') || DEFAULT_VALUE;
        humidity.innerHTML = data.main.humidity || DEFAULT_VALUE;
        windSpeed.innerHTML = (data.wind.speed * 3.6).toFixed(2) || DEFAULT_VALUE;
    });
}); 