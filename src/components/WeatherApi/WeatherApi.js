import React, { Component } from 'react';
import axios from 'axios';

class WeatherApi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherData: null,
            error: null,
        };
    }

    componentDidMount() {
        // Call the function to fetch weather data
        this.fetchWeatherData();
    }

    fetchWeatherData() {
        const apiKey = 'dfae9efd36d341bc9b2153308232706'; // Replace with your actual API key
        const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=crawley`;

        axios
            .get(apiUrl)
            .then((response) => {
                this.setState({ weatherData: response.data });
            })
            .catch((error) => {
                this.setState({ error: 'Error retrieving weather data.' });
            });
    }

    render() {
        const { weatherData, error } = this.state;

        if (error) {
            return <div>{error}</div>;
        }

        if (!weatherData) {
            return <div>Loading...</div>;
        }

        // Display weather data
        return (
            <div>
                <h2>Weather in {weatherData.location.name}</h2>
                <p>Temperature: {weatherData.current.temp_c}°C</p>
                <p>Condition: {weatherData.current.condition.text}</p>
            </div>
        );
    }
}

export default WeatherApi;
