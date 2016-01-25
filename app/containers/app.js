import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';

import Row        from '../components/row';

import { changeAces, changeTwos, changeThrees, changeFours, changeFives, changeSixes } from '../actions/index';

class UpperBody extends Component {

  render() {
    return (
      <div>
        <h1>Triple Yahtzee Score Card</h1>
        <table>
          <tbody>
            <Row label="Aces"   one={this.props.aces.one}   two={this.props.aces.two}   three={this.props.aces.three}   change={this.props.changeAces} />
            <Row label="Twos"   one={this.props.twos.one}   two={this.props.twos.two}   three={this.props.twos.three}   change={this.props.changeTwos} />
            <Row label="Threes" one={this.props.threes.one} two={this.props.threes.two} three={this.props.threes.three} change={this.props.changeThrees} />
            <Row label="Fours"  one={this.props.fours.one}  two={this.props.fours.two}  three={this.props.fours.three}  change={this.props.changeFours} />
            <Row label="Fives"  one={this.props.fives.one}  two={this.props.fives.two}  three={this.props.fives.three}  change={this.props.changeFives} />
            <Row label="Sixes"  one={this.props.sixes.one}  two={this.props.sixes.two}  three={this.props.sixes.three}  change={this.props.changeSixes} />
            <Row label="Total"  one={this.props.total.one}  two={this.props.total.two}  three={this.props.total.three} />
            <Row label="Bonus"  one={this.props.bonus.one}  two={this.props.bonus.two}  three={this.props.bonus.three} />
            <Row label="Total"  one={this.props.grand.one}  two={this.props.grand.two}  three={this.props.grand.three} />
          </tbody>
        </table>
      </div>
    )
  }

}

function mapStateToProps(state) {
  const one =   sum(state.aces.one,   state.twos.one,   state.threes.one,   state.fours.one,   state.fives.one,   state.sixes.one);
  const two =   sum(state.aces.two,   state.twos.two,   state.threes.two,   state.fours.two,   state.fives.two,   state.sixes.two);
  const three = sum(state.aces.three, state.twos.three, state.threes.three, state.fours.three, state.fives.three, state.sixes.three);
  const four =  sum(state.aces.four,  state.twos.four,  state.threes.four,  state.fours.four,  state.fives.four,  state.sixes.four);
  const five =  sum(state.aces.five,  state.twos.five,  state.threes.five,  state.fours.five,  state.fives.five,  state.sixes.five);
  const six =   sum(state.aces.six,   state.twos.six,   state.threes.six,   state.fours.six,   state.fives.six,   state.sixes.six);

  return {
    aces:   state.aces,
    twos:   state.twos,
    threes: state.threes,
    fours:  state.fours,
    fives:  state.fives,
    sixes:  state.sixes,
    total: {
      one:   one,
      two:   two,
      three: three,
      four:  four,
      five:  five,
      six:   six
    },
    bonus: {
      one:   bonus(one),
      two:   bonus(two),
      three: bonus(three),
      four:  bonus(four),
      five:  bonus(five),
      six:   bonus(six)
    },
    grand: {
      one: one + bonus(one),
      two: two + bonus(two),
      three: three + bonus(three),
      four: four + bonus(four),
      five: five + bonus(five),
      six: six + bonus(six)
    }

  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    changeAces:   changeAces,
    changeTwos:   changeTwos,
    changeThrees: changeThrees,
    changeFours:  changeFours,
    changeFives:  changeFives,
    changeSixes:  changeSixes
  }, dispatch);
}

function sum(one, two, three, four, five, six) {
  return toInt(one) + toInt(two) + toInt(three) + toInt(four) + toInt(five) + toInt(six);
}

function bonus(value) {
  return value < 63 ? 0 : 35;
}

function toInt(value) {
  if (value) {
    return parseInt(value);
  } else {
    return 0;
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(UpperBody);
