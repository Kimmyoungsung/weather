import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const WeatherButton = ({ cities, setCity, activeCity, setActiveCity }) => {
  return (
    <ButtonGroup className="button-group">
      <Button
        variant={activeCity === 'current' ? 'primary' : 'outline-primary'}
        onClick={() => {
          setCity('current');
          setActiveCity('current');
        }}
      >
        Current Location
      </Button>

      {cities.map((city, index) => (
        <Button
          key={index}
          variant={activeCity === city ? 'primary' : 'outline-info'}
          onClick={() => {
            setCity(city);
            setActiveCity(city);
          }}
        >
          {city}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default WeatherButton;
