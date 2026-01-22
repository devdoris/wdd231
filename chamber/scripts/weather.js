const tempEl = document.querySelector("#current-temp");
const descEl = document.querySelector("#weather-desc");
const forecastEl = document.querySelector("#forecast");

const url = "https://api.openweathermap.org/data/2.5/forecast?lat=6.5244&lon=3.3792&units=imperial&appid=96a3ec0ce65585e96773d204e2f3ce5e";

async function getWeather() {
  const response = await fetch(url);
  const data = await response.json();

tempEl.textContent = `${Math.round(data.list[0].main.temp)}°F`;
descEl.textContent = data.list[0].weather[0].description;
descEl.style.textTransform = "capitalize";



  forecastEl.innerHTML = "";

  for (let i = 1; i <= 3; i++) {
    const day = data.list[i * 8];
    const li = document.createElement("li");
    li.textContent = `${new Date(day.dt_txt).toLocaleDateString()}: ${day.main.temp}°F`;
    forecastEl.appendChild(li);
  }
}

getWeather();
