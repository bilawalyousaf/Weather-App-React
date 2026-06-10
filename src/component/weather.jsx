import react from "react";
import "./style.scss";

const WeatherCard = ({ data }) => {
  const current = data.list[0];

  return (
    <div className="weather-card">
      <h2>
        {data.city.name}, {data.city.country}
      </h2>

      <img
        src={`https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}
        alt="weather icon"
      />

      <h3>{current.main.temp}°C</h3>

      <p>
        <b>Weather:</b> {current.weather[0].main}
      </p>

      <p>
        <b>Description:</b> {current.weather[0].description}
      </p>

      <p>
        <b>Feels Like:</b> {current.main.feels_like}°C
      </p>

      <p>
        <b>Min Temp:</b> {current.main.temp_min}°C
      </p>

      <p>
        <b>Max Temp:</b> {current.main.temp_max}°C
      </p>

      <p>
        <b>Humidity:</b> {current.main.humidity}%
      </p>

      <p>
        <b>Pressure:</b> {current.main.pressure} hPa
      </p>

      <p>
        <b>Wind Speed:</b> {current.wind.speed} m/s
      </p>

      <p>
        <b>Visibility:</b> {(current.visibility / 1000).toFixed(1)} km
      </p>

      <p>
        <b>Clouds:</b> {current.clouds.all}%
      </p>

      <p>
        <b>Date & Time:</b> {current.dt_txt}
      </p>
    </div>
  );
};

export default WeatherCard;
