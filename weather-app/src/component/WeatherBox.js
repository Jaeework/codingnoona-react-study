import React from 'react'

const WeatherBox = ({weather}) => {
    return (
    <div className="weather-box">
        <div>{weather?.name}</div>
        <h2>{weather?.main.temp.toFixed(1)}℃ / {(weather?.main.temp*1.8+32).toFixed(1)}℉</h2>
        <div>
            <img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} />
            {weather?.weather[0].description}
        </div>
    </div>
  )
}

export default WeatherBox
