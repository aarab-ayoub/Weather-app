import React from "react";
import FormattedDate from "./FormattedDate";
import UpdateIcon from "./UpdateIcon";
import { TbWorldLatitude, TbWorldLongitude } from "react-icons/tb";
import barometer from "../icons/production/fill/svg/barometer.svg";
import windsock from "../icons/production/fill/svg/windsock.svg";
import raindrop_measure from "../icons/production/fill/svg/raindrop_measure.svg";
import location from "../icons/production/fill/svg/location.gif"
import Forecast from "./Forecast";

export default function SearchInfo(props) {
  return (
    <div className="main">
      <div className="SearchInfo">
        <div className="City">
          <br />
          <h1><img src={location} alt="" className="location"/>{props.data.city}.<small>{props.data.country}</small></h1>
          <ul>
            <li>
              GMT:{props.data.timezone}h
            </li>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="description-weather text-capitalize">
              {props.data.description}
            </li>
            <li>
            </li>
          </ul>
        </div>
        <div className="icon">
          <UpdateIcon code={props.data.icon} />
        </div>
        <div className="col-7">
          <span className="temp-number">
            {Math.round((props.data.temperature - 32) * 5 / 9)}
          </span>
          <span className="cel">°C</span>


        </div>

      </div>
      <div className="weather-forecast">
        <Forecast city={props.data.city} />
      </div>
      <div className="col-5">
        <div><span className="div"><TbWorldLatitude size={30} /></span><h4>{props.data.latitude} lat</h4></div>
        <div ><span className="div"><TbWorldLongitude size={30} /></span><h4>{props.data.longitude} lon</h4></div>
        <div><img src={raindrop_measure} alt="" className="fill" /><h4>{props.data.humidity}% </h4></div>
        <div><img src={windsock} alt="" className="fill" /><h4>{Math.round(props.data.wind)}km/h</h4></div>
        <div><img src={barometer} alt="" className="fill" /><h4>{props.data.pressure}mbar</h4></div>
      </div>

    </div>


  );
}
