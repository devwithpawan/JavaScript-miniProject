const apiKey = "6337d6840ba5de346da480b2c4fe1521";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=matric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const respose = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await respose.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°F";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }
    else  if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
    }
    else  if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
    }
    else  if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    else  if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
    }
    document.querySelector(".weather").style.display = "block";

}
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

