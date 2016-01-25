import React, { Component } from 'react';
import { connect } from 'react-redux';

class Total extends Component {

  render() {
    return (
      <tr>
        <td>
          Total
        </td>
        <td>
          <input value={this.props.one} disabled={true} />
        </td>
        <td>
          <input value={this.props.two} disabled={true} />
        </td>
        <td>
          <input value={this.props.three} disabled={true} />
        </td>
      </tr>
    )
  }

}

function mapStateToProps(state) {
  return {
    one:   sum(state.aces.one,   state.twos.one,   state.threes.one,   state.fours.one,   state.fives.one,   state.sixes.one),
    two:   sum(state.aces.two,   state.twos.two,   state.threes.two,   state.fours.two,   state.fives.two,   state.sixes.two),
    three: sum(state.aces.three, state.twos.three, state.threes.three, state.fours.three, state.fives.three, state.sixes.three)
  };
}

function sum(one, two, three, four, five, six) {
  return toInt(one) + toInt(two) + toInt(three) + toInt(four) + toInt(five) + toInt(six);
}

function toInt(value) {
  if (value) {
    return value;
  } else {
    return 0;
  }
}
export default connect(mapStateToProps)(Total);
