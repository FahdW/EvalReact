import React, { Component } from 'react';
import $ from 'jquery';

export default class Calendar extends Component {
  componentDidMount() {
    $('#calendar').datepicker({
      dayNamesMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      showOtherMonths: true,
      showMonthAfterYear: false
    });
  }

  render() {
    return (
      <div id="calendar"></div>
    );
  }
}