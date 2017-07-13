import React, { Component } from 'react';
import {Row, Col, Nav, NavItem} from 'react-bootstrap';
import Sun from '../img/sun.png';

export default class WeatherBar extends Component {
  render() {
    return (
      <div>
      <Nav bsStyle="tabs">
        <NavItem href="#">Tab 1</NavItem>
        <NavItem href="#">Tab 2</NavItem>
        <NavItem href="#">Tab 3</NavItem>
        <NavItem href="#">Tab 4</NavItem>
      </Nav>
      <Row>
        <Col xs={12}>
          <Col xs={2} lg={1}>
            <p class="text-center">Today</p> 
            <img src={Sun} />
            <p>High: 30</p>
            <p>Low: 10</p>
          </Col> 
        </Col>
      </Row>
      </div>
    );
  }
}          