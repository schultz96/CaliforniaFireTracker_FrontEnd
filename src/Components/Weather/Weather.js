import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Weather = (props) => {
  const [ weather, setWeather ] = useState({});

  const [ query, setQuery ] = useState('chicago');

  // runs on page load once, doesn't re-run on render because the array is empty
  useEffect(() => {
    getWeather();
  }, []);

  const getWeather = () => {
    axios({
      url: 'https://api.openweathermap.org/data/2.5/weather',
      params: {
        q: query,
        appid: 'd74acdc5b23e10e528515e72aaf7ad70',
        units: 'imperial'
      }
    }).then(res => {
      setWeather(res.data);
      if(props.onNewWeather) props.onNewWeather(res.data)
    }, err => {
      console.log(err);
    });
  }

  const queryChanged = (e) => {
    setQuery(e.target.value)
  }

  return (
    <div>
      <p>The weather is: {weather.main ? weather.main.temp : 0}</p>
      <input 
        placeholder="weather"
        value={query}
        onChange={queryChanged}
      />
      <button
        onClick={getWeather}
      >Get Weather</button>
    </div>
  )
}