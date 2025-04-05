import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({selectedCity, cities, setCity}) => {
  return (
    <div>
        <Button className="weather-button" 
                variant={selectedCity?'warning':'light'}
                onClick={() => setCity(null)}>
                    Current Location
        </Button>
        
        {cities.map((item) => {
            return <Button className="weather-button" 
                        variant={selectedCity===item ? 'light' : 'warning'}
                        onClick={() => setCity(item)}>
                        {item}
                    </Button>
        })}
    </div>
  )
}

export default WeatherButton
