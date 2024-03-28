import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import clouds_icon from "./assets/clouds.png"
import rain_icon from "./assets/rain.png"
import drizzle_icon from "./assets/drizzle.png"
import mist_icon from "./assets/mist.png"
import clear_icon from "./assets/clear.png"
import snow_icon from "./assets/snow.png"



function App() {


  let location = "Nashik";
  let key = "";
  
  const [icon , setIcon] = useState(clouds_icon);  
  const [city , setCity] = useState(location);

 


  const searchPlace = async () => {
    const search_value = document.getElementsByClassName("inputbox");
    const weather_icon = document.getElementsByClassName("weather-img");
    const temp = document.getElementsByClassName("temp");
    const humidity = document.getElementsByClassName("humidity");
    const wind = document.getElementsByClassName("wind");
    const location = document.getElementsByClassName("city");
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${search_value[0].value}&appid=${key}`;
    // console.log(search_value[0].value);
    // console.log(url)
    // console.log(data)
    let responce = await fetch(url);
    let data = await responce.json();

    let Celsius = data.main.temp - 273.15;
    temp[0].innerHTML = Celsius.toFixed(1) + "°C";
    location[0].innerHTML = data.name;
    wind[0].innerHTML = data.wind.speed + "km/h";
    humidity[0].innerHTML = data.main.humidity + " %";

    let current_weather = data.weather[0].main;

    if (current_weather == "Clouds") {
      setIcon(clouds_icon);
    } else if (current_weather == "Clear") { 
      setIcon(clear_icon);
    } else if (current_weather == "Snow") {
      setIcon(snow_icon);
    } else if (current_weather == "Haze") {
      setIcon(clouds_icon);
    } else if (current_weather == "Smoke") {
      setIcon(mist_icon);
    } else if (current_weather == "Rain") {
      setIcon(rain_icon);
    } else if (current_weather == "Drizzle") {
      setIcon(drizzle_icon);
    } else if (current_weather == "Rain") {
      setIcon(rain_icon);
    }





   
  }

  const current_weather = ""




     

  return (
    <>
      <div className="card">
        <div className="search" style={{ marginTop: 10 }}>
          <input
            className="inputbox"
            type="text"
            placeholder="enter city name"

          />
          <button className="submit_button" onClick={()=>searchPlace()} id="submit_button">
            <i className="bx bx-search-alt"></i>
          </button>
        </div>

        <div className="weather">
          <div className="face" style={{ margin: '0px auto' }}>
            <div className="weather-img">
              <img src={icon} className="weather-icon" />
            </div>
            <div className="city-temp">
              <h1 className="temp">22°C</h1>
              <h2 className="city">New York</h2>
            </div>
          </div>
        </div>

        <div className="details" style={{ marginBottom: 20 }}>
          <div className="col">
            <img src="./src/assets/humidity.png" className="info_icon" />
            <div>
              <p className="humidity">50%</p>
              <p className="description">Humidity</p>
            </div>
          </div>
          <div className="col">
            <img src="./src/assets/wind.png" className="info_icon2" />
            <div>
              <p className="wind">15 km/h</p>
              <p className="description2">Wind Speed</p>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
