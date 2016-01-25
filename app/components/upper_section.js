import React, { Component } from 'react';
import Row from './row';

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
          <Row label="Aces" />
          <Row label="Twos" />
          <Row label="Threes" />
          <Row label="Fours" />
          <Row label="Fives" />
          <Row label="Sixes" />
          <Row label="Total"         readonly={true} />
          <Row label="Bonus"         readonly={true} />
          <Row label="Upper Section" readonly={true} />
        </tbody>
      </table>
    );
  }
}
