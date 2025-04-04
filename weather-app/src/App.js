import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';

// 1. 앱 실행되면 현재 위치 기반 날씨 정보 표시
// 2. 날씨 정보에는 도시, 섭씨, 화씨 날씨상태
// 3. 5개의 버튼이 있다. (1개는 현재위치, 4개는 다른 도시)
// 4. 도시 버튼 클릭할 때 마다 도시별 날씨 표시
// 5. 현재 위치 버튼 누르면 다시 현재 위치 기반 날씨 정보 표시
// 6. 데이터를 들고 오는 동안 로딩 스피너가 돈다.

function App() {

  const [weather, setWeather] = useState(null);
  
  const getCurrentLocation = () => {
    console.log('getCurrentLocation');
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;

      getWeatherByCurrentLocation(lat, lon);
    });
  }

  const getWeatherByCurrentLocation = async(lat, lon) => {
    let url = new URL("https://api.openweathermap.org/data/2.5/weather");
    url.searchParams.set("lat", lat);
    url.searchParams.set("lon", lon);
    url.searchParams.set("units", "metric");
    url.searchParams.set("lang", "kr");
    url.searchParams.set("appid", "fa2a69dd8cb75956e0acc5ee6d580df2");
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
  }

  useEffect(() => {
    getCurrentLocation();
  }, []);
  
  return (
    <div>
      <div className="container">
        <WeatherBox weather={weather} />
        <div>
          <WeatherButton />
        </div>
      </div>
    </div>
  );
}

export default App;
