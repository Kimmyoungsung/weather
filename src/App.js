import './App.css';
import { useEffect, useState } from 'react';
import WeatherBox from './component/WeatherBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherButton from './component/WeatherButton';

// 1. 앱이 실행되자마자 현재기반의 날씨가 보인다.
// 2. 날씨정보는 도시, 섭씨, 화씨 날씨 상태
// 3. 5개의 버튼이 있다. (1개는 현재위치, 4개는 다룬 도시)
// 4. 도시버튼을 클릭할 때 마다 도시별 날씨가 나온다.
// 5. 현재위치 버튼을 누르면 다시 현재위치 기반의 날씨가 나온다.
// 6. 데이터를 들고오는 동안 로딩 스피너가 돈다

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);  // 로딩 상태 추가

  // 현재 위치 기반 날씨 가져오기
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  // 날씨 정보 가져오는 함수
  const getWeatherByCurrentLocation = async (lat, lon) => {
    let apiKey = '1d46d58529e4b77a4450ba18e562483d';  // API 키
    let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    try {
      let response = await fetch(url);
      let data = await response.json();
      setWeather(data);  // 날씨 데이터 상태에 저장
      setLoading(false);  // 데이터 로딩 완료
    } catch (error) {
      console.log("Error fetching weather data: ", error);
      setLoading(false);  // 로딩 중 오류 발생 시 로딩 종료
    }
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <div>
      <div className="container">
        {loading ? (
          <div>Loading...</div>  // 로딩 중일 때 표시
        ) : (
          <WeatherBox weather={weather} />  // 날씨 정보가 로딩되면 전달
        )}
        <WeatherButton />
      </div>
    </div>
  );
}

export default App;