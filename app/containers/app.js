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
  changeFourOfAKind,
  changeFullHouse,
  changeSmallStraight,
  changeLargeStraight,
  changeYahtzee,
  changeChance } from '../actions/index';

class UpperBody extends Component {

  render() {
    return (
      <div>
        <table className="mdl-data-table">
          <thead>
            <tr>
              <th>Triple Yahtzee Score Card</th>
              <th></th>
              <th></th>
              <th>One</th>
              <th>Two</th>
              <th>Three</th>
            </tr>
          </thead>
          <tbody>
            <Row label="Aces"
                 help="(1)"
                 score="Total of all Aces"
                 one={this.props.aces.one}
                 two={this.props.aces.two}
                 three={this.props.aces.three}
                 change={this.props.changeAces}
                 values={[0,1,2,3,4,5]} />
            <Row label="Twos"
                 help="(2)"
                 score="Total of all Twos"
                 one={this.props.twos.one}
                 two={this.props.twos.two}
                 three={this.props.twos.three}
                 change={this.props.changeTwos}
                 values={[0,2,4,6,8,10]} />
            <Row label="Threes"
                 help="(3)"
                 score="Total of all Threes"
                 one={this.props.threes.one}
                 two={this.props.threes.two}
                 three={this.props.threes.three}
                 change={this.props.changeThrees}
                 values={[0,3,6,9,12,15]} />
            <Row label="Fours"
                 help="(4)"
                 score="Total of all Fours"
                 one={this.props.fours.one}
                 two={this.props.fours.two}
                 three={this.props.fours.three}
                 change={this.props.changeFours}
                 values={[0,4,8,12,16,20]} />
            <Row label="Fives"
                 help="(5)"
                 score="Total of all Fives"
                 one={this.props.fives.one}
                 two={this.props.fives.two}
                 three={this.props.fives.three}
                 change={this.props.changeFives}
                 values={[0,5,10,15,20,25]} />
            <Row label="Sixes"
                 help="(6)"
                 score="Total of all Sixes"
                 one={this.props.sixes.one}
                 two={this.props.sixes.two}
                 three={this.props.sixes.three}
                 change={this.props.changeSixes}
                 values={[0,6,12,18,24,30]} />

            <Row label="Total"
                 one={this.props.upperTotal.one}
                 two={this.props.upperTotal.two}
                 three={this.props.upperTotal.three} />
            <Row label="Bonus"
                 help="(if Total 63 or over)"
                 one={this.props.upperBonus.one}
                 two={this.props.upperBonus.two}
                 three={this.props.upperBonus.three} />
            <Row label="Upper Total"
                 one={this.props.upperGrand.one}
                 two={this.props.upperGrand.two}
                 three={this.props.upperGrand.three} />

            <Row label="3 of a Kind"
                 score="Total of all dice"
                 one={this.props.threeOfAKind.one}
                 two={this.props.threeOfAKind.two}
                 three={this.props.threeOfAKind.three}
                 change={this.props.changeThreeOfAKind} />
            <Row label="4 of a Kind"
                 score="Total of all dice"
                 one={this.props.fourOfAKind.one}
                 two={this.props.fourOfAKind.two}
                 three={this.props.fourOfAKind.three}
                 change={this.props.changeFourOfAKind} />
            <Row label="Full House"
                 score="Score 25"
                 one={this.props.fullHouse.one}
                 two={this.props.fullHouse.two}
                 three={this.props.fullHouse.three}
                 change={this.props.changeFullHouse}
                 values={[0,25]} />
            <Row label="Sm. Straight"
                 help="(sequence of 4)"
                 score="Score 30"
                 one={this.props.smallStraight.one}
                 two={this.props.smallStraight.two}
                 three={this.props.smallStraight.three}
                 change={this.props.changeSmallStraight}
                 values={[0,30]} />
            <Row label="Lg. Straight"
                 help="(sequence of 5)"
                 score="Score 40"
                 one={this.props.largeStraight.one}
                 two={this.props.largeStraight.two}
                 three={this.props.largeStraight.three}
                 change={this.props.changeLargeStraight}
                 values={[0,40]} />
            <Row label="Yahtzee"
                 help="(5 of a kind)"
                 score="Score 50"
                 one={this.props.yahtzee.one}
                 two={this.props.yahtzee.two}
                 three={this.props.yahtzee.three}
                 change={this.props.changeYahtzee}
                 values={[0,50]} />
            <Row label="Chance"
                 score="Total of all dice"
                 one={this.props.chance.one}
                 two={this.props.chance.two}
                 three={this.props.chance.three}
                 change={this.props.changeChance} />

            <Row label="Lower Total"
                 one={this.props.lowerTotal.one}
                 two={this.props.lowerTotal.two}
                 three={this.props.lowerTotal.three} />

            <Row label="Combined Total"
                 one={this.props.combinedTotal.one}
                 two={this.props.combinedTotal.two}
                 three={this.props.combinedTotal.three} />
            <Row label="Triple Yahtzee"
                 one={this.props.yahtzeeTotal.one}
                 two={this.props.yahtzeeTotal.two}
                 three={this.props.yahtzeeTotal.three} />
            <Row label="Grand Total"
                 one="---"
                 two="---"
                 three={this.props.grandTotal} />
          </tbody>
        </table>

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
    one:   sum(state.threeOfAKind.one,   state.fourOfAKind.one,   state.fullHouse.one,   state.smallStraight.one,   state.largeStraight.one,   state.yahtzee.one,   state.chance.one),
    two:   sum(state.threeOfAKind.two,   state.fourOfAKind.two,   state.fullHouse.two,   state.smallStraight.two,   state.largeStraight.two,   state.yahtzee.two,   state.chance.two),
    three: sum(state.threeOfAKind.three, state.fourOfAKind.three, state.fullHouse.three, state.smallStraight.three, state.largeStraight.three, state.yahtzee.three, state.chance.three)
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
    upperTotal: upperTotal,
    upperBonus: upperBonus,
    upperGrand: upperGrand,

    threeOfAKind:  state.threeOfAKind,
    fourOfAKind:   state.fourOfAKind,
    fullHouse:     state.fullHouse,
    smallStraight: state.smallStraight,
    largeStraight: state.largeStraight,
    yahtzee:       state.yahtzee,
    chance:        state.chance,
    lowerTotal: lowerTotal,

    combinedTotal: combinedTotal,
    yahtzeeTotal:  yahtzeeTotal,
    grandTotal: yahtzeeTotal.one + yahtzeeTotal.two + yahtzeeTotal.three
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    changeAces:          changeAces,
    changeTwos:          changeTwos,
    changeThrees:        changeThrees,
    changeFours:         changeFours,
    changeFives:         changeFives,
    changeSixes:         changeSixes,
    changeThreeOfAKind:  changeThreeOfAKind,
    changeFourOfAKind:   changeFourOfAKind,
    changeFullHouse:     changeFullHouse,
    changeSmallStraight: changeSmallStraight,
    changeLargeStraight: changeLargeStraight,
    changeYahtzee:       changeYahtzee,
    changeChance:        changeChance
  }, dispatch);
}

function sum(one, two, three, four, five, six, seven) {
  return toInt(one) + toInt(two) + toInt(three) + toInt(four) + toInt(five) + toInt(six) + toInt(seven);
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
