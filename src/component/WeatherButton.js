import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const WeatherButton = () => {
  return (
    <ButtonGroup className="mt-2" aria-label="지역 버튼">
      <Button variant="secondary">Current Location</Button>
      <Button variant="secondary">Korea</Button>
      <Button variant="secondary">Paris</Button>
    </ButtonGroup>
  );
};

export default WeatherButton;
