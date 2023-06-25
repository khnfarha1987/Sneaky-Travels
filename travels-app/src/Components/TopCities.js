import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { Left, Right } from './Arrows';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Styles/top-cities.css';
import axios from 'axios';
class TopCities extends Component {
  render() {
    return (
      <div>
        <div className="top-cities-wrapper">
          <h1>Adventure is waiting for you</h1>
          <hr
            style={{
              backgroundColor: '#ffbb58',
              width: '75px',
              height: '2px',
              border: 'none',
              marginTop: '0px',
              marginLeft: '0px',
              marginBottom: '20px'
            }}
          />
          <div className="top-cities-carousel-wrap">
            <CitySlider />
          </div>
          <hr
            style={{
              height: '1px',
              color: '#e7e7e7',
              borderTop: 'none',
              borderLeft: 'none'
            }}
          />
        </div>
        <hr className="section-divide-hr" />
      </div>
    );
  }
}

class CitySlider extends React.Component {
  render() {
    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      nextArrow: <Right />,
      prevArrow: <Left />
    };
    console.log(topCitiesData);
    return (
      <Slider {...settings}>
        {topCitiesData &&
          topCitiesData.map(({ id, city, url, description, route }) => (
            <Link
              to={{ pathname: `/cities/${route}` }}
              key={id}
              className="link"
            >
              <CityCard city={city} url={url} description={description} />
            </Link>
          ))}
      </Slider>
    );
  }
}

class CityCard extends Component {
  render() {
    const url = `url(${this.props.url})`;
    return (
      <div className="city-card-wrapper">
        <div className="city-card">
          <div
            className="city-card-img"
            style={{
              backgroundImage: url
            }}
          />
          <div className="city-details">
            <div id="triangle" />
            <p>{this.props.city}</p>
            <div id="city-hidden">
              <p>{this.props.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const topCitiesData = fetchCitiesFromResopnse();

function fetchCitiesFromResopnse() {
  var topCityArray = [];
  getTopCitiesByPopulation()
    .then(topCities => {
      topCities.forEach(element => {
        getCityImages(element.city).then(cityImages => {
          console.log("iomage ", element.city, cityImages)
          element.url = cityImages[0];
        });
        topCityArray.push(element)
      });
    })
    .catch(error => {
      console.error(error);
    });
  console.log(topCityArray);
  return topCityArray;
}

async function getTopCitiesByPopulation() {
  const username = 'khnfarha1987'; // Replace with your GeoNames username

  try {
    const response = await axios.get('http://api.geonames.org/searchJSON', {
      params: {
        featureClass: 'P',
        orderBy: 'population',
        maxRows: 10, // Example: Get top 10 cities
        username: username
      }
    });

    const topCities = response.data.geonames.map(city => {
      var url = '';
      console.log("cityImage URL", url);
      return {
        id: city.adminCode1,
        city: city.name,
        url: url,
        description: city.fcodeName,
        route: city.name,
      };
    });
    return topCities;
  } catch (error) {
    console.error('Error fetching top cities:', error);
    throw error;
  }
}

async function getCityImages(city) {
  const unsplashApiKey = 'Jk7LUeRHwN6Jy9Zd5gczDzgVl6DphbAp1VMBcbr7SMk'; // Replace with your Unsplash API key

  try {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: city,
        client_id: unsplashApiKey
      }
    });

    const images = response.data.results.map(result => result.urls.regular);
    return images;
  } catch (error) {
    console.error('Error fetching city images:', error);
    throw error;
  }
}



export default TopCities;
