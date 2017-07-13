import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <p className="text-center footer__text">
          The Wisley, Mill Lane, Ripley, Woking, Surrey, GU23 GQU | T:01483 211022
        </p>
        <p className="text-center">
          <a className="footer__url" href="#">Forward to a friend</a>
          <a className="footer__url" href="#">Manage Preferences</a>
          <a className="footer__url" href="#">Unsubcribe</a>
        </p>
      </footer>
    );
  }
}