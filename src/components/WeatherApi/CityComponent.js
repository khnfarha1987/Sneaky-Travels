import styled from "styled-components";
import React from "react";
const iconPath = process.env.PUBLIC_URL + "/icons/";

const SearchBox = styled.form`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	margin: 20px;
	border-radius: 50 px;
	width: 60%;

	& input {
		width: 70%;
		border-radius: 50px 0 0 50px;
		padding: 10px;
		font-size: 14px;
		border: none;
		outline: none;
		font-family: Montserrat;
		font-weight: bold;
	}
	& button {
		width: 30%;
		border-radius: 0 50px 50px 0;
		background-color: rgb(1, 191, 113);
		font-size: 14px;
		padding: 0 10px;
		color: white;
		border: none;
		outline: none;
		cursor: pointer;
		font-family: Montserrat;
		font-weight: bold;
	}
`;
const ChooseCityLabel = styled.span`
	color: white;
	margin: 10px auto;
	font-size: 18px;
	font-weight: bold;
`;
const WelcomeWeatherLogo = styled.img`
	width: 140px;
	height: 140px;
	margin: 40px auto;
`;
const CityComponent = (props) => {
	const { updateCity, fetchWeather } = props;
	return (
		<>
			<WelcomeWeatherLogo src={`${iconPath}/perfect-day.svg`} />
			<ChooseCityLabel>
				Enter a city to fetch weather and photos.
			</ChooseCityLabel>
			<SearchBox onSubmit={fetchWeather}>
				<input
					onChange={(e) => updateCity(e.target.value)}
					placeholder="City"
				/>
				<button type={"submit"}>Search</button>
			</SearchBox>
		</>
	);
};
export default CityComponent;
