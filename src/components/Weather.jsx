  import React from "react";
  import Search from "./Search";
  import "./Weather.css";

  export default function Weather(props) {
    return (
      <div className="Weather">
        <div className="weather-app">
          <Search defaultCity="New York" />
          <div className="weather-forecast"></div>
        </div>
      </div>
    );
  }
