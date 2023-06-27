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
import PhotosApi from "../PhotosApi";

const Weather = () => {
	const [city, updateCity] = useState();
	const [weather, updateWeather] = useState();
	const [photos, setPhotos] = useState([]);

	useEffect(() => {
		if (city) {
			fetchPhotos(city);
		}
	}, [city]);

	const fetchWeather = async (e) => {
		e.preventDefault();
		const response = await axios.get(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`
		);
		updateWeather(response.data);
	};

	const fetchPhotos = async (city) => {
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
	};

	return (
		<ServicesContainer id="services">
			<ServicesH1>Gadgets</ServicesH1>
			{city && weather ? (
				<WeatherComponent weather={weather} city={city} />
			) : (
				<CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
			)}
			{photos.length > 0 && (
				<ServicesWrapper>
					{photos.slice(0, 9).map((photo, index) => (
						<img
							key={index}
							src={photo.urls.small}
							alt={`Photo ${index + 1}`}
						/>
					))}
				</ServicesWrapper>
			)}
			{!photos.length > 0 && (
				<ServicesWrapper>
					<ServicesH2>Loading photos...</ServicesH2>
				</ServicesWrapper>
			)}
		</ServicesContainer>
	);
};

export default Weather;
