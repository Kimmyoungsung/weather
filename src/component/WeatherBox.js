import React from 'react';
import Card from 'react-bootstrap/Card';

const WeatherBox = ({ weather }) => {
  if (!weather) {
    return null;  // 날씨 정보가 없을 때는 아무것도 렌더링하지 않음
  }

  return (
    <Card className="weather-box text-center" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{weather.name}</Card.Title>
        <Card.Text style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <span>{weather.main.temp}°C</span>
          <span style={{ margin: '0 5px' }}>/</span>
          <span>{(weather.main.temp * 9 / 5 + 32).toFixed(1)}°F</span>
        </Card.Text>
        <Card.Text>{weather.weather[0].description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default WeatherBox;
