import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

export default function Weather() {
  const [city, setCity] = useState('');
  const [tempCelsius, setTempCelsius] = useState('');

  /*
  const apiKey = '033a1fa5abmsh9e007644ae1aa89p1b77b3jsn1b64080c27ed';
  const apiUrl = 'https://weather-api99.p.rapidapi.com/weather';

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'weather-api99.p.rapidapi.com'
    }
  }; */

  // Conversion de temperatura
  const convertKelvinToCelsius = (kelvin) => {
    return kelvin - 273.15;
  };

  //fetch
  const WeatherData = async () => {
    try {
      const response = await fetch(`${apiUrl}?city=${encodeURIComponent(city)}`, options);
      const result = await response.json();

      console.log(result);

      setCity(result.name);

      // Kelvin a Celsius
      const tempCelsius = Math.round(convertKelvinToCelsius(result.main.temp));
      setTempCelsius(`${tempCelsius}°C`);
    } catch (error) {
      console.error('Error de datos:', error);
    }
  };

  const Search = () => {
    WeatherData();
  };

  const InputChange = (event) => {
    setCity(event.target.value);
  };



  return (
    <div id="contenedor">
      <Navbar />
      <div className="card1">
        <div className="search">
          <input type="text" placeholder="Ciudad" value={city} onChange={InputChange} />

          <button onClick={Search}><i className='bx bx-search bx-tada'></i></button>
        </div>
        <div className="weather">
          <br/>
          <img src="https://cdn-icons-png.flaticon.com/512/552/552448.png" height="150px" width="150px" className="weather-icon" alt="Weather Icon" />
          <br/>
          <br/>
        </div>
        <h1 className="temp">{tempCelsius}</h1>
        <h2 className="city">{city}</h2>
      </div>
    </div>
  );
}
