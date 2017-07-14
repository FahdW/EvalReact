import React, { Component } from 'react';
import {Row, Col, Nav, NavItem} from 'react-bootstrap';
import WeatherDay from './WeatherDay';
import moment from 'moment';
import $ from 'jquery';

export default class WeatherBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: []
    };
  }

  getWeather = () => {
    let currentDay = moment().format('dddd');
    let weather, day=0;
    let that = this;
    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/forecast/daily?q=Toronto&mode=json&units=metric&cnt=12&appid=581c8e26bf8c5f212eb94e864c4f59d9",
      success: function (result) {
      weather = result.list;
      weather.forEach((weather) => {
        let weatherday = {};
        weatherday.low = Math.round(weather.temp.min);
        weatherday.high = Math.round(weather.temp.max);
        weatherday.day = day === 0 ? 'Today' : currentDay;      
        that.setState({weather: [...that.state.weather, weatherday]});
        currentDay = moment(currentDay, 'ddd').add(1, 'days').format('ddd');
        day++;
      });
    }
  });
  }

  componentDidMount () {
    this.getWeather();
  }

  render() {
    let renderWeather = () => {
      return this.state.weather.map((weather, index) => {
        return (
          <WeatherDay key={index} {...weather} />
        );
      });
    }

    return (
      <div className="container weather-navbar">
      <Nav bsStyle="tabs">
        <NavItem active href="#">Tab 1</NavItem>
        <NavItem href="#">Tab 2</NavItem>
        <NavItem href="#">Tab 3</NavItem>
        <NavItem href="#">Tab 4</NavItem>
      </Nav>
      <Row>
        <Col xs={12}>
          {renderWeather()}
        </Col>
      </Row>
      </div>
    );
  }
}          