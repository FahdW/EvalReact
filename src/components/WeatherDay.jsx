import React, { Component } from 'react';
import { Row, Col, Nav, NavItem } from 'react-bootstrap';
import Sun from '../img/sun.png';

export default class WeatherDay extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let {high, low, day} = this.props;
    return (
      <Col className="weather-container" xs={2} lg={1}>
        <p className="text-center weather-day">{day}</p>
        <img className="center-block weather-img" src={Sun} />
        <p className="text-center weather-high">High: {high}</p>
        <p className="text-center weather-low">Low: {low}</p>
      </Col>
    );
  }
}          