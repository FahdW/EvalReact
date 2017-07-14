import React, { Component } from 'react';
import {Col} from 'react-bootstrap';
import Sun from '../img/sun.png';

export default class WeatherDay extends Component {
  render() {
    let {high, low, day} = this.props;
    return (
      <Col className="weather-container" xs={2} lg={1}>
        <p className="text-center weather-day">{day}</p>
        <img className="center-block weather-img" alt="sun" src={Sun} />
        <p className="text-center weather-high">High: {high}</p>
        <p className="text-center weather-low">Low: {low}</p>
      </Col>
    );
  }
}          