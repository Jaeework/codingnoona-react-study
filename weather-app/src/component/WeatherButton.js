import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = () => {
  return (
    <div>
        <Button className="weather-button" variant="warning">Current Location</Button>
        <Button className="weather-button" variant="warning">Seoul</Button>
        <Button className="weather-button" variant="warning">London</Button>
        <Button className="weather-button" variant="warning">Berlin</Button>
    </div>
  )
}

export default WeatherButton
