import React, { useState } from "react";



import {
    ServicesContainer,
    ServicesH1,

} from './WeatherElements';
import CityComponent from '../WeatherApi/CityComponent';
import WeatherComponent from '../WeatherApi/WeatherInfoComponent';
import axios from 'axios';

const Weather = () => {
    const [city, updateCity] = useState();
    const [weather, updateWeather] = useState();
    const fetchWeather = async (e) => {
        e.preventDefault();
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`,
        );
        updateWeather(response.data);
    };

    return (
        <ServicesContainer id="services">
            <ServicesH1>Gadgets</ServicesH1>
            {city && weather ? (
                <WeatherComponent weather={weather} city={city} />
            ) : (
                <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
            )}
           
        </ServicesContainer>
    )
}

export default Weather
