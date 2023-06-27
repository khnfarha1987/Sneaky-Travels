import React, { useState, useEffect } from "react";
import axios from "axios";
import {
	ServicesContainer,
	ServicesH1,
	ServicesWrapper,
	ServicesH2,
} from "./WeatherElements";
import CityComponent from "../WeatherApi/CityComponent";
import WeatherComponent from "../WeatherApi/WeatherInfoComponent";

const Weather = () => {
	const [city, updateCity] = useState();
	const [weather, updateWeather] = useState();
	const [photos, setPhotos] = useState([]);

	const fetchWeather = async (e) => {
		e.preventDefault();
		const response = await axios.get(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`
		);
		updateWeather(response.data);
		fetchPhotos();
	};

	const fetchPhotos = async () => {
		if (city) {
			const unsplashAccessKey = "EeoX0Pcez5PdkZXwdwVITojX4P0-DkIUkRVa69Jr3Hk";
			const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
				city
			)}&client_id=${unsplashAccessKey}`;

			try {
				const response = await axios.get(url);
				setPhotos(response.data.results);
			} catch (error) {
				console.log("Error fetching photos:", error);
			}
		}
	};

	return (
		<ServicesContainer id="services">
			<ServicesH1>Gadgets</ServicesH1>
			<CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
			{city && weather ? (
				<WeatherComponent weather={weather} city={city} />
			) : null}
			{photos.length > 0 ? (
				<ServicesWrapper>
					{photos.slice(0, 9).map((photo, index) => (
						<img
							key={index}
							src={photo.urls.small}
							alt={`Photo ${index + 1}`}
						/>
					))}
				</ServicesWrapper>
			) : (
				<ServicesWrapper>
					{!city ? <ServicesH2></ServicesH2> : <ServicesH2></ServicesH2>}
				</ServicesWrapper>
			)}
		</ServicesContainer>
	);
};

export default Weather;
