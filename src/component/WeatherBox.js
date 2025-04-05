import React from 'react';
import Card from 'react-bootstrap/Card';

const WeatherBox = ({ weather }) => {
  const temperatureC = weather?.main?.temp;
  const temperatureF = temperatureC ? ((temperatureC * 9) / 5 + 32).toFixed(1) : null;
  const city = weather?.name;
  const weatherDesc = weather?.weather[0]?.description;

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
