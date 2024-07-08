//api url and key
const apiKey = "b9e9be5044bb603589d1b5a865a2c6db";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

//Button and input box
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

//async javascript and used fetch API to fetch data from openweather website
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  //code for error handle
  if (response.status == 404) {
    document.querySelector(".error-handle").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    let data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".degree").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".speed").innerHTML = data.wind.speed + "km/h";

    //code for images according to weather in location
    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "images/snow.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    }

    //code to display invalid location if exist or to continue the code
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error-handle").style.display = "none";
  }
}

//search button to run the main function
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
