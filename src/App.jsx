import "./style.scss";
import react, { useState, useRef, useEffect } from "react";
import axios from "axios";
import WeatherCard from "./component/weather";

const App = () => {
  const inputRef = useRef();
  const [weather, set_weather] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect (() => {
      getWeatherFromLocation()
  },[])

  const getWeatherFromLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (location) => {
          const latitude = location.coords.latitude;
          const longitude = location.coords.longitude;

          try {
            setLoading(true);
            const apiKey = "a3f338eb00c448a728f0699e0d07c6a1";
             const response = await axios.get(
              `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`,
           );
                 set_weather([response.data, ...weather]);
                 setLoading(false);

          } catch (error) {
            console.error(error);
            setLoading(false);
            
          }

        });
      }
  }


  const get_weather = async (e) => {
    e.preventDefault();

    try {
      const apiKey = "a3f338eb00c448a728f0699e0d07c6a1";
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${inputRef.current.value}&appid=${apiKey}&units=metric`,
      );

      set_weather([response.data, ...weather]);
    } catch (error) {
      alert("City not found. Please enter a valid city name.");
    }
    e.target.reset();
  };

  return (
    <>
      <h1>Fast Wheater App</h1>
      

      <form onSubmit={get_weather}>
        <input type="text" placeholder="Enter Your City Name" ref={inputRef} required />
        <button>Get Wheather</button>
      </form>
      
      {loading && (
        <div className="loader-container">
        <div className="loader"></div>
    </div>
  )}

      {!loading && (
        <div className="weather-container">
        {weather.map((singleData, index) => {
          return <WeatherCard key={index} data={singleData} />;
      })}
    </div>
  )}
    </>
  );
};
export default App;
