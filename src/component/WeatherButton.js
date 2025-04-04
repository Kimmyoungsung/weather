import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const WeatherButton = () => {
  return (
    <div>
      <Button variant="warning">Current Location</Button>
      <Button variant="warning">Korea</Button>
      <Button variant="warning">Paris</Button>
    </div>
  );
};

export default WeatherButton;
