import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';

import Row        from '../components/row';

import {
  changeAces,
  changeTwos,
  changeThrees,
  changeFours,
  changeFives,
  changeSixes,
  changeThreeOfAKind,
  changeFourOfAKind } from '../actions/index';

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
            <Row label="Upper Bonus"  one={this.props.upperBonus.one}  two={this.props.upperBonus.two}  three={this.props.upperBonus.three} />
            <Row label="Upper Grand"  one={this.props.upperGrand.one}  two={this.props.upperGrand.two}  three={this.props.upperGrand.three} />

            <Row blank={true} />

            <Row label="3 of a Kind"   one={this.props.threeOfAKind.one}   two={this.props.threeOfAKind.two}   three={this.props.threeOfAKind.three}   change={this.props.changeThreeOfAKind} />
            <Row label="4 of a Kind"   one={this.props.fourOfAKind.one}    two={this.props.fourOfAKind.two}    three={this.props.fourOfAKind.three}    change={this.props.changeFourOfAKind} />
            <Row label="Lower Grand"   one={this.props.lowerTotal.one}     two={this.props.lowerTotal.two}     three={this.props.lowerTotal.three} />

            <Row blank={true} />

            <Row label="Combined Total" one={this.props.combinedTotal.one}     two={this.props.combinedTotal.two}     three={this.props.combinedTotal.three} />
            <Row label="Triple Yahtzee" one={this.props.yahtzeeTotal.one}     two={this.props.yahtzeeTotal.two}     three={this.props.yahtzeeTotal.three} />
          </tbody>
        </table>

        <h2>Grand Total: {this.props.grandTotal}</h2>
      </div>
    )
  }

}

function mapStateToProps(state) {
  const upperTotal = {
    one:   sum(state.aces.one,   state.twos.one,   state.threes.one,   state.fours.one,   state.fives.one,   state.sixes.one),
    two:   sum(state.aces.two,   state.twos.two,   state.threes.two,   state.fours.two,   state.fives.two,   state.sixes.two),
    three: sum(state.aces.three, state.twos.three, state.threes.three, state.fours.three, state.fives.three, state.sixes.three)
  }
  const upperBonus = {
    one:   bonus(upperTotal.one),
    two:   bonus(upperTotal.two),
    three: bonus(upperTotal.three)
  }
  const upperGrand = {
    one:   upperTotal.one   + upperBonus.one,
    two:   upperTotal.two   + upperBonus.two,
    three: upperTotal.three + upperBonus.three
  }

  const lowerTotal = {
    one:   sum(state.threeOfAKind.one,   state.fourOfAKind.one),
    two:   sum(state.threeOfAKind.two,   state.fourOfAKind.two),
    three: sum(state.threeOfAKind.three, state.fourOfAKind.three)
  }

  const combinedTotal = {
    one:   upperGrand.one   + lowerTotal.one,
    two:   upperGrand.two   + lowerTotal.two,
    three: upperGrand.three + lowerTotal.three
  }

  const yahtzeeTotal = {
    one:   combinedTotal.one   * 1,
    two:   combinedTotal.two   * 2,
    three: combinedTotal.three * 3
  }

  return {
    aces:   state.aces,
    twos:   state.twos,
    threes: state.threes,
    fours:  state.fours,
    fives:  state.fives,
    sixes:  state.sixes,
    threeOfAKind: state.threeOfAKind,
    fourOfAKind:  state.fourOfAKind,
    upperTotal: upperTotal,
    upperBonus: upperBonus,
    upperGrand: upperGrand,
    lowerTotal: lowerTotal,
    combinedTotal: combinedTotal,
    yahtzeeTotal:  yahtzeeTotal,
    grandTotal: yahtzeeTotal.one + yahtzeeTotal.two + yahtzeeTotal.three
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    changeAces:   changeAces,
    changeTwos:   changeTwos,
    changeThrees: changeThrees,
    changeFours:  changeFours,
    changeFives:  changeFives,
    changeSixes:  changeSixes,
    changeThreeOfAKind: changeThreeOfAKind,
    changeFourOfAKind:  changeFourOfAKind
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
