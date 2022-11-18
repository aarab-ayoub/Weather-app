import React, { useState } from "react";
import axios from "axios";
import SearchInfo from "./SearchInfo";


export default function Search(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState(props.defaultCity);
  const [darkMode, setDarkMode] = useState(false);

  function showWeather(response) {
    setWeatherData({
      city: response.data.name,
      country: response.data.sys.country,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      timezone: response.data.timezone / 3600,
      pressure: response.data.main.pressure,
      latitude: response.data.coord.lat,
      longitude: response.data.coord.lon,
      weather_status: response.data.weather[0].main,
    });

    setReady(true);
  }

  function Search() {
    let apiKey = "6f578b96aa9505bcce148ac22cb85794";
    let units = "imperial";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    Search();
  }

  if (ready) {
    return (
      <div className={darkMode ? "dark-mode" : "light-mode"}>
        <div className="cc">
          <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
          <div className="switch-checkbox">
            <label className="switch">
              <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
              <span className="slider round"> </span>
            </label>
          </div>
          <span className="span" style={{ color: darkMode ? "#c96dfd" : "grey" }} >☽</span>
        </div>
        <div>


          <div className="Search">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    className="form-control"
                    onChange={updateCity}
                  />
                </div>
                <div className="col-3 btn">
                  <input
                    type="submit"
                    value="Search"
                    className="btn btn-primary w-100"
                  />
                </div>
              </div>
            </form>
            <SearchInfo data={weatherData} />
          </div>
        </div>
      </div>

    );
  } else {
    Search();
    return "Loading...";
  }
}


