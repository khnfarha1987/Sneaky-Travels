import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages'
import SigninPage from './pages/signin'

export const WeatherIcons = {
  "01d": "/react-webapp/icons/sunny.svg",
  "01n": "/react-webapp/icons/night.svg",
  "02d": "/react-webapp/icons/day.svg",
  "02n": "/react-webapp/icons/cloudy-night.svg",
  "03d": "/react-webapp/icons/cloudy.svg",
  "03n": "/react-webapp/icons/cloudy.svg",
  "04d": "/react-webapp/icons/perfect-day.svg",
  "04n": "/react-webapp/icons/cloudy-night.svg",
  "09d": "/react-webapp/icons/rain.svg",
  "09n": "/react-webapp/icons/rain-night.svg",
  "10d": "/react-webapp/icons/rain.svg",
  "10n": "/react-webapp/icons/rain-night.svg",
  "11d": "/react-webapp/icons/storm.svg",
  "11n": "/react-webapp/icons/storm.svg",
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