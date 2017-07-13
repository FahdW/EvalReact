import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './styles/App.css';
import { Grid, Row, Col, Nav, NavItem } from 'react-bootstrap';
import $ from 'jquery';

import Header from './components/Header';
import Hero from './components/Hero';
import Calendar from './components/Calendar';
import WeatherBar from './components/WeatherBar';
import Carousel from './components/Carousel';

import SwanLong from './img/swan-long.png';

class App extends Component {
  componentDidMount() {
    // $('.datepicker').datepicker({
    //   changeMonth: true,
    //   changeYear: true,
    //   showButtonPanel: true,
    //   yearRange: "-116:+34",
    //   dateFormat: 'dd/mm/yy'
    // });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
        <Grid>
          <Row>
            <Col xs={12} md={6}>
              <h3 className="paragraph-title">Header</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo massa eget arcu pulvinar placerat. Ut sit
                  amet mauris mauris. Donec sem turpis, pretium at eros venenatis, imperdiet interdum tortor. Donec urna neque, vestibulum
                  non eleifend sit amet, fermentum in ante. Donec vulputate nisl in sem hendrerit maximus. Donec vitae varius massa.
                  Donec ultricies elementum ligula, ac semper metus accumsan sed.</p>
            </Col>
            <Col xs={12} md={6}>
              <div className="datepicker"></div>
            </Col>
          </Row>
          <Row>
            <WeatherBar />
          </Row>
          <Row>
            <Col xs={1}>
              <img src={SwanLong} />
            </Col>
            <Col xs={9} sm={5}>
              <p id="indent-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo massa eget arcu pulvinar placerat. Ut sit
          amet mauris mauris. Donec sem turpis, pretium at eros venenatis, imperdiet interdum tortor. </p>
            </Col>
            <Col xs={12} sm={5}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo massa eget arcu pulvinar placerat. Ut sit
          amet mauris mauris. Donec sem turpis, pretium at eros venenatis, imperdiet interdum tortor. </p>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <h3>Header</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo massa eget arcu pulvinar placerat. Ut sit
          amet mauris mauris. Donec sem turpis, pretium at eros venenatis, imperdiet interdum tortor. Donec urna neque, vestibulum
          non eleifend sit amet, fermentum in ante. Donec vulputate nisl in sem hendrerit maximus. Donec vitae varius massa.
          Donec ultricies elementum ligula, ac semper metus accumsan sed. Class aptent taciti sociosqu ad litora torquent
          per conubia nostra, per inceptos himenaeos. Sed porta turpis id semper dictum. Ut placerat, velit ut tempus placerat,
          est massa vulputate lacus, accumsan malesuada ex nisi sit amet ex. Curabitur tempor ut orci at pellentesque. Curabitur
          in vulputate lorem, sit amet porta tortor.</p>
            </Col>
          </Row>
          <Row>
            <Carousel />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
