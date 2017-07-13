import React, {Component} from 'react';
import $ from 'jquery';

export default class Calendar extends Component {
  componentDidMount() {
    $('#calendar').datepicker({
      changeMonth: true,
      changeYear: true
    });
  } 

  render () {
    return (
      <div id="calendar"></div>
    );
  }
}