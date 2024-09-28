import './CurrentWeather.css';
export function CurrentWeather({ data }) {
  return (
    <div className="weatherContainer">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p style={{ fontSize: '12px' }}>{data.weather[0].description}</p>
        </div>
        <img src={`icons/${data.weather[0].icon}.png`} alt="Sunny" />
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(data.main.temp)}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span>Details</span>
          </div>
          <div className="parameter-row">
            <span>Feels Like</span>
            <span className="value">{Math.round(data.main.feels_like)}°C</span>
          </div>
          <div className="parameter-row">
            <span>Wind</span>
            <span className="value">{Math.round(data.wind.speed)} m/s</span>
          </div>
          <div className="parameter-row">
            <span>Humidity</span>
            <span className="value">{data.main.humidity} %</span>
          </div>
          <div className="parameter-row">
            <span>Pressure</span>
            <span className="value">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
}
