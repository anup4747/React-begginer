fetchData();
document.getElementById("submit_button").addEventListener("click", fetchData);
document
  .querySelector(".inputbox")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      fetchData();
     
    }
  });

function fetchData() {
  var City = document.querySelector(".inputbox").value;
  if (!City) {
    City = "Nashik";
    City.value = City;
  }
  if (City !== "") {
    const key = "";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${key}`;

    const weather_icon = document.querySelector(".weather-icon");
    const temp = document.querySelector(".temp");
    const city_name = document.querySelector(".city");
    const humidity = document.querySelector(".humidity");
    const wind_speed = document.querySelector(".wind");
    const description = document.querySelector(".description");
    const description2 = document.querySelector(".description2");
    const info_icon = document.querySelector(".info_icon");
    const info_icon2 = document.querySelector(".info_icon2");

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          alert("Please enter valid city");
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const current_weather = data.weather[0].main;
        console.log(current_weather);
        if (current_weather == "Clouds") {
          weather_icon.src = "image/mist.png";
        } else if (current_weather == "Clear") {
          weather_icon.src = "image/clear.png";
        } else if (current_weather == "Snow") {
          weather_icon.src = "image/snow.png";
        } else if (current_weather == "Haze") {
          weather_icon.src = "image/clouds.png";
        } else if (current_weather == "Smoke") {
          weather_icon.src = "image/clouds.png";
        } else if (current_weather == "Rain") {
          weather_icon.src = "image/rain.png";
        } else if (current_weather == "Drizzle") {
          weather_icon.src = "image/drizzle.png";
        } else if (current_weather == "Rain") {
          weather_icon.src = "image/rain.png";
        }

        // Update HTML elements with the received data
        city_name.textContent = data.name;

        // Convert temperature to Celsius
        const Celsius = data.main.temp - 273.15;
        temp.textContent = Celsius.toFixed(1) + "°C";

        wind_speed.textContent = data.wind.speed + " km/h";
        humidity.textContent = data.main.humidity + "%";


      
          const elementsToAnimate = [
            weather_icon,
            temp,
            city_name,
            humidity,
            wind_speed,
            description,
            description2,
            info_icon,
            info_icon2,
          ];

          requestAnimationFrame(() => {
          
            elementsToAnimate.forEach((element) => element.classList.add("animate"));
    
            // After a delay, remove the animation class to reset the animation
            setTimeout(() => {
                
                elementsToAnimate.forEach((element) => element.classList.remove("animate"));
            }, 500);
        });
        
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  } else {
    console.log("Please enter a city name.");
  }
}
