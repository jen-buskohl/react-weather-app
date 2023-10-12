import React from "react";

export default function TempUnit(props) {
  return (
    <div className="TempUnit">
      <span className="temperature">{Math.round(props.fahrenheit)}</span>
      <span className="unit">°F</span>
    </div>
  );
}
