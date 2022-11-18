import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function UpdateIcon(props) {
  let icn = null;
  if (props.code === "01d") {
    icn = "CLEAR_DAY";
  } else if (props.code === "01n") {
    icn = "CLEAR_NIGHT";
  } else if (props.code === "02d") {
    icn = "PARTLY_CLOUDY_DAY";
  } else if (props.code === "02n") {
    icn = "PARTLY_CLOUDY_NIGHT";
  } else if (
    props.code === "03d" ||
    props.code === "03n" ||
    props.code === "04d" ||
    props.code === "04n"
  ) {
    icn = "CLOUDY";
  } else if (props.code === "09d" || props.code === "09n") {
    icn = "SLEET";
  } else if (props.code === "10d" || props.code === "10n") {
    icn = "RAIN";
  } else if (props.code === "11d" || props.code === "11n") {
    icn = "WIND";
  } else if (props.code === "13d" || props.code === "13n") {
    icn = "SNOW";
  } else {
    icn = "FOG";
  }

  return (
    <div className="UpdateIcon">
      <ReactAnimatedWeather
        icon={icn}
        color="grey"
        size={80}
        animate={true}
      />
    </div>
  );
}
