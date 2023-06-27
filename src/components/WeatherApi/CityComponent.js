import styled from "styled-components";
import React from "react";
import dayimg from "../../images/perfect-day.svg"

const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 20px;
  border: #fff solid 1px;
  border-radius: 50px;
  color:#fff;
  width:60%;

  & input {
    padding: 10px;
    font-size: 14px;
    border: none;
    border-radius: 50px 0 0 50px;
    outline: none;
    font-family: Montserrat;
    font-weight: bold;
    width:80%;
  }
  & button {
    background-color: black;
    font-size: 14px;
    padding: 0 10px;
    border: none;
    outline: none;
    cursor: pointer;
    font-weight: bold;
    border-radius: 0 50px 50px 0;
    width:20%;
    background: #01bf71;
  }
  button:hover {
    scale:1.1;
    transition: 0.2s ease-in-out;
    color:#fff;
  }
`;

const ChooseCityLabel = styled.span`
  color: #fff;
  margin: 10px auto;
  font-size: 18px;
  font-weight: bold;
`;

const warea = styled.div`
  background: #fff;
  margin: 10px auto;
  width:60%;
  height:auto;
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
      <WelcomeWeatherLogo src={dayimg} />
      <ChooseCityLabel>
      Find Weather of your city
      </ChooseCityLabel>
      <SearchBox onSubmit={fetchWeather}>
        <input
          onChange={(e) => updateCity(e.target.value)}
          placeholder="Enter City Name"
        />
        <button type={"submit"}>Search</button>
      </SearchBox>
    </>
  );
};
export default CityComponent;
