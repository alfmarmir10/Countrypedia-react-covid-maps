import React, { useState, useEffect } from 'react';
import Temp from '../../Assets/Img/temp.svg';
import '../../Styles/styles_base.css';
import Pressure from '../../Assets/Img/pressure.svg';
import Cloudiness from '../../Assets/Img/cloudiness.svg';
import Humidity from '../../Assets/Img/humidity.svg';
import Sunrise from '../../Assets/Img/sunrise.svg';
import Sunset from '../../Assets/Img/sunset.svg';
import WindSpeed from '../../Assets/Img/wind_speed.svg';
import WindDirection from '../../Assets/Img/wind_direction.svg';

const Weather = (props) => {
  const {latlng} = props;
  const [weatherData, setWeatherData] = useState();
  const [sunriseHr, setSunriseHr] = useState();
  const [sunsetHr, setSunsetHr] = useState();
  const [forecastArray, setForecastArray] = useState();

  useEffect(() => {
    async function fetchWeatherData(){
      const URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latlng[0]}&lon=${latlng[1]}&units=metric&exclude=minutely&appid=8f38ea2be162a6f751cf1dba1670f899`;
      const response = await fetch(URL);
      const responseJson = await response.json();
      setWeatherData(responseJson);
      const sunrise = new Date(responseJson.current.sunrise * 1000);
      setSunriseHr(`${sunrise.getHours()}:${sunrise.getMinutes()}`);
      const sunset = new Date(responseJson.current.sunset * 1000);
      setSunsetHr(`${sunset.getHours()}:${sunset.getMinutes()}`);
      console.log(responseJson.daily[0].dt);
      let forecastArrayToSet = [];
      for(let i = 0; i < responseJson.daily.length; i++){
        let temporallyObj = {}
        let date = new Date(responseJson.daily[i].dt * 1000);
        temporallyObj = {
            Date : date.getDate(),
            MinMax : `${responseJson.daily[i]['temp']['min'].toFixed(1)}º / ${responseJson.daily[i]['temp']['max'].toFixed(1)}º`,
            IconSrc : `http://openweathermap.org/img/w/${responseJson.daily[i]['weather'][0]['icon']}.png`,
            Description : responseJson.daily[i]['weather'][0]['description']
        }
        forecastArrayToSet.push(temporallyObj);
      }
      console.log(forecastArrayToSet);
      setForecastArray(forecastArrayToSet);
    }
    fetchWeatherData();
    return () => {
      fetchWeatherData();
    }
  }, [latlng]);

  console.log(weatherData);

  return (
    <div className="width-100percent flex-column-center">
      <div className="map-container flex-column-center margin-top-md margin-bottom-lg">
        <p className="width-100percent bg-crimson color-white text-align-center font-size-md font-weight-bold covid-info-title">Current Weather</p>
        {
          weatherData != null ? 
          (
            <div className="flex-row-center flex-wrap margin-top-sm margin-bottom-sm">
              <div className="weather-item-container flex-column-center">
                <p className="font-size-md font-weight-bold">{weatherData.current.temp}</p>
                <img src={Temp} alt="Temp img" className="weather-item-img" />
              </div>
              <div className="weather-item-container flex-column-center">
                <p className="font-size-md font-weight-bold">{`${weatherData.current.pressure} hPA`}</p>
                <img src={Pressure} alt="Pressure img" className="weather-item-img" />
              </div>
              <div className="weather-item-container flex-column-center">
                <p className="font-size-md font-weight-bold">{`${weatherData.current.clouds}%`}</p>
                <img src={Cloudiness} alt="Cloudiness img" className="weather-item-img" />
              </div>
              <div className="weather-item-container flex-column-center">
                <p className="font-size-md font-weight-bold">{`${weatherData.current.humidity}%`}</p>
                <img src={Humidity} alt="Humidity img" className="weather-item-img" />
              </div>
              <div className="weather-item-container flex-column-center">
                <p className="font-size-md font-weight-bold">{`${sunriseHr}`}</p>
                <img src={Sunrise} alt="Sunrise img" className="weather-item-img" />
              </div>
              <div className="weather-item-container flex-column-center">
                <p className="font-size-md font-weight-bold">{`${sunsetHr}`}</p>
                <img src={Sunset} alt="Sunset img" className="weather-item-img" />
              </div>
              <div className="weather-item-container flex-column-center">
                <p className="font-size-md font-weight-bold">{`${weatherData.current.wind_speed} m/s`}</p>
                <img src={WindSpeed} alt="WindSpeed img" className="weather-item-img" />
              </div>
              <div className="weather-item-container flex-column-center">
                <p className="font-size-md font-weight-bold">{`${weatherData.current.wind_deg} º`}</p>
                <img src={WindDirection} alt="WindDirection img" className="weather-item-img" />
              </div>
            </div>
          ) : 
          (
            <div><p>NO DATA</p></div>
          )
        }
      </div>
      <div className="map-container flex-column-center margin-top-md margin-bottom-lg overflow-x-auto">
        <p className="width-100percent bg-crimson color-white text-align-center font-size-md font-weight-bold covid-info-title">Weather Forecast</p>
        <div className="weather-daily-main-container overflow-x-auto flex-row-start">
          {
            forecastArray != null ? 
            (
              <div className="flex-row-space-around margin-top-sm margin-bottom-sm">
                {
                  forecastArray.map((item)=>{
                    return (
                      <div className="weather-daily-container flex-column-center">
                        <p className="font-weight-bold">min / máx</p>
                        <p className="font-size-sm font-weight-thin white-space-nowrap">{item.MinMax}</p>
                        <img src={item.IconSrc} alt="Weather img" className="weather-daily-img margin-top-sm margin-bottom-sm" />
                        <p className="font-size-md font-weight-bold">{item.Date}</p>
                      </div>
                    )
                  })
                }
              </div>
            ) : 
            (
              <div><p>NO DATA</p></div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Weather
