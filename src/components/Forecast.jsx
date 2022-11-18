import React, { useState } from "react";
import "./Forecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);

    function HandleResponse(response) {
        console.log(response);
        setForecast(response.data);
        setLoaded(true);
    }
    function formatHours(date) {
        let hours = date.getHours();
        if (hours < 10) {
            hours = `${hours}`;
        }
        let minutes = date.getMinutes();
        if (minutes < 10) {
            minutes = `0${minutes}`;
        }
        return `${hours}:${minutes}`;
    }

    if (loaded && forecast.city.name === props.city) {
        return (
            <div className="WeatherForecast">
                {forecast.list.slice(0, 5).map(function (weather) {
                    return (
                        <div className="col">
                            <div className="hours">
                                {formatHours(new Date(weather.dt * 1000))}
                            </div>
                            <div className="Icon">
                                <img
                                    src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                                    alt=""
                                />
                            </div>
                            <div className="temperatures">
                                {Math.round(weather.main.temp)}°C
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    } else {
        let apiKey = "6acf0b70b71a1baac84b4356c9064804";

        let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(HandleResponse);
        return null;
    }
}
