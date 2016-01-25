import React, { Component } from 'react';

import Aces  from '../containers/aces';
import Twos  from '../containers/twos';
import Total from '../containers/total';
import Bonus from '../containers/bonus';
import UpperTotal from '../containers/upper_total';

export default class UpperSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <table>
        <tbody>
          <Aces />
          <Twos />
          <Total />
          <Bonus />
          <UpperTotal />
        </tbody>
      </table>
    );
  }
}
