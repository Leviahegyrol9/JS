var apiKey = localStorage.getItem("apiKey");
const apiKeyInput = document.getElementById("apiKeyInput");
const cityInput = document.getElementById("cityInput");
const weatherInfo = document.querySelector(".weather-info");
const loginPanel = document.getElementById("login");
const weatherPanel = document.getElementById("weather");
const logOutBtn = document.getElementById("logOutBtn");

if(apiKey != null) {
    loginPanel.style.display = "none";
    weatherPanel.style.display = "block";
    logOutBtn.style.display = "block";
}

if (sessionStorage.getItem("city") != null) {
    cityInput.value = sessionStorage.getItem("city");
    fetchWeather(cityInput.value);
}

function checkApiKey() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Budapest&appid=${apiKeyInput.value}&lang=hu`)
        .then(response => response.json())
        .then(data => {
                if (data.cod == 200) {
                    apiKey = apiKeyInput.value;
                    localStorage.setItem("apiKey", apiKey);
                    loginPanel.style.display = "none";
                    weatherPanel.style.display = "block";
                    logOutBtn.style.display = "block";
                }
                else {
                    alert(data.message);
                    apiKeyInput.value = "";
                }      
            })
}

function searchBtn() {
    if (cityInput.value) {
        fetchWeather(cityInput.value);
    }
}

function fetchWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=hu`)
        .then(response => response.json())
        .then(data => {
            weatherInfo.innerHTML =`
                                <h2>${data.name}</h2>
                                <p>${`${Math.round(data.main.temp)}°C`}</p>
                                <p>${data.weather[0].description}</p>
            `;

            sessionStorage.setItem("city", data.name);
        })
        .catch(() => {
            alert('Nem sikerült hozzáférni az adatokhoz!');
        });
}

function logOut(){
    sessionStorage.clear();
    localStorage.clear();
    location.reload();
}