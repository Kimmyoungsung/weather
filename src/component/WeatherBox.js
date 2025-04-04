import React from 'react';

const WeatherBox = ({ weather }) => {
  if (!weather) {
    return null;  // 날씨 정보가 없을 때는 아무것도 렌더링하지 않음
  }

  return (
    <div className="weather-box">
      <div>{weather.name}</div>
      <h2>{weather.main.temp}°C</h2>
      <h3>{weather.weather[0].description}</h3>
    </div>
  );
};

export default WeatherBox;
