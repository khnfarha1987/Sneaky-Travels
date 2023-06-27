import React, { useState } from "react";
import Icon1 from '../../images/cloudy.png';
import Icon2 from '../../images/map.png';
import Icon3 from '../../images/location-pin.png';


import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
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
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesH2>Weather Check

                    </ServicesH2>
                    <ServicesIcon src={Icon1} />
                </ServicesCard>
                <ServicesCard>
                    <ServicesH2>Locations</ServicesH2>
                    <ServicesIcon src={Icon2} />

                </ServicesCard>

                <ServicesCard>
                    <ServicesH2>Attractions</ServicesH2>

                    <ServicesIcon src={Icon3} />

                </ServicesCard>


            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Weather
