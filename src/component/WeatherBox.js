import React from 'react';
import Card from 'react-bootstrap/Card';

const WeatherBox = ({ weather }) => {
  if (!weather || !weather.main || !weather.weather || !weather.weather[0]) {
    return <p style={{ color: '#004080' }}>날씨 정보를 불러오는 중입니다...</p>;
  }

  const temperatureC = weather.main.temp;
  const temperatureF = ((temperatureC * 9) / 5 + 32).toFixed(1);
  const city = weather.name;
  const weatherDesc = weather.weather[0].description;

  return (
    <Card className="weather-box">
      <Card.Body>
        <Card.Title>{city}</Card.Title>
        <Card.Text>
          <strong>{temperatureC}°C / {temperatureF}°F</strong>
        </Card.Text>
        <Card.Text>{weatherDesc}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default WeatherBox;
