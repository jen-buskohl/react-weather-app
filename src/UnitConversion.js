import React, { useState } from "react";

export default function UnitConversion(props) {
  const [unit, setUnit] = useState("fahrenheit");
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "fahrenheit") {
    return (
      <div className="UnitConversion">
        <span className="temperature">{Math.round(props.fahrenheit)}</span>
        <span className="unit">
          °F |{" "}
          <a href="/" onClick={convertToCelsius}>
            °C
          </a>
        </span>
      </div>
    );
  } else {
    let celsiusTemp = (props.fahrenheit - 32 * 5) / 9;
    return (
      <div className="UnitConversion">
        <span className="temperature">{Math.round(celsiusTemp)}</span>
        <span className="unit">
          <a href="/" onClick={convertToFahrenheit}>
            °F
          </a>{" "}
          | °C
        </span>
      </div>
    );
  }
}
