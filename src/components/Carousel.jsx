import React, {Component} from 'react';
var Slider = require('react-slick');

export default class Carousel extends Component {
  render () {
    return (
      <Slider>
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
        <div><h3>5</h3></div>
        <div><h3>6</h3></div>
      </Slider>
    );
  }
}