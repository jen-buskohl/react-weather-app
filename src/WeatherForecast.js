import React from "react";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(response) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Thu</div>
          <div className="forecast-icon">
            <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"></img>
          </div>
          <div className="forecast-temp">
            <span className="forecast-temp-max">19°</span>
            <span className="forecast-temp-min">10°</span>
          </div>
        </div>
        <div className="col">
          <div className="forecast-day">Fri</div>
          <div className="forecast-icon">
            <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"></img>
          </div>
          <div className="forecast-temp">
            <span className="forecast-temp-max">19°</span>
            <span className="forecast-temp-min">10°</span>
          </div>
        </div>
        <div className="col">
          <div className="forecast-day">Sat</div>
          <div className="forecast-icon">
            <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"></img>
          </div>
          <div className="forecast-temp">
            <span className="forecast-temp-max">19°</span>
            <span className="forecast-temp-min">10°</span>
          </div>
        </div>
        <div className="col">
          <div className="forecast-day">Sun</div>
          <div className="forecast-icon">
            <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"></img>
          </div>
          <div className="forecast-temp">
            <span className="forecast-temp-max">19°</span>
            <span className="forecast-temp-min">10°</span>
          </div>
        </div>
        <div className="col">
          <div className="forecast-day">Mon</div>
          <div className="forecast-icon">
            <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"></img>
          </div>
          <div className="forecast-temp">
            <span className="forecast-temp-max">19°</span>
            <span className="forecast-temp-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
