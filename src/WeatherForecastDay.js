import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temp = Math.round(props.data.temperature.maximum);
    return `${temp}°`;
  }

  function minTemp() {
    let temp = Math.round(props.data.temperature.minimum);
    return `${temp}°`;
  }

  function forecastDay() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="forecast-day">{forecastDay()}</div>
      <div className="forecast-icon">
        <img src={props.data.condition.icon_url} alt="weather-icon"></img>
      </div>
      <div className="forecast-temp">
        <span className="forecast-temp-max">{maxTemp()}</span>
        <span className="forecast-temp-min"> {minTemp()}</span>
      </div>
    </div>
  );
}
