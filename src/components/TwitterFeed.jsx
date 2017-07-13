import React, { Component } from 'react';
import { Timeline } from 'react-twitter-widgets';

export default class TwitterFeed extends Component {
  render() {
    return (
      <Timeline
        dataSource={{
          sourceType: 'profile',
          screenName: 'twitterdev',
        }}
        options={{
          username: 'TwitterDev',
          tweetLimit: 3
        }}
      />
    );
  }
}