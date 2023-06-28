import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages'
import SigninPage from './pages/signin'
const iconPath = process.env.PUBLIC_URL + '/icons/';
export const WeatherIcons = {
  "01d": `${iconPath}/sunny.svg`,
  "01n": `${iconPath}/night.svg`,
  "02d": `${iconPath}/day.svg`,
  "02n": `${iconPath}/cloudy-night.svg`,
  "03d": `${iconPath}/cloudy.svg`,
  "03n": `${iconPath}/cloudy.svg`,
  "04d": `${iconPath}/perfect-day.svg`,
  "04n": `${iconPath}/cloudy-night.svg`,
  "09d": `${iconPath}/rain.svg`,
  "09n": `${iconPath}/rain-night.svg`,
  "10d": `${iconPath}/rain.svg`,
  "10n": `${iconPath}/rain-night.svg`,
  "11d": `${iconPath}/storm.svg`,
  "11n": `${iconPath}/storm.svg`,
};

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
      </Switch>
    </Router>
  );
}

export default App;