import './App.css';
import { CurrentWeather } from './components/CurrentWeather/CurrentWeather';
import { Search } from './components/Search/Search';
import { WEATHER_API_URL, WEATHER_API_KEY } from './Api';
import { useState } from 'react';
import { ForeCast } from './components/ForeCast/ForeCast';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleSearchData = (data) => {
    const [latitude, longitude] = data.value.split(' ');
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
    );
    Promise.all([currentWeatherFetch, forecastFetch]).then(async (response) => {
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();

      setCurrentWeather({ city: data.label, ...weatherResponse });
      setForecast({ city: data.label, ...forecastResponse });
    });
  };

  return (
    <div className="container">
      <Search sendSearchData={handleSearchData} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <ForeCast data={forecast} />}
    </div>
  );
}

export default App;
