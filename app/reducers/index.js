import { combineReducers } from 'redux';

import Aces   from './aces';
import Twos   from './twos';
import Threes from './threes';
import Fours  from './fours';
import Fives  from './fives';
import Sixes  from './sixes';

import ThreeOfAKind  from './three_of_a_kind';
import FourOfAKind   from './four_of_a_kind';
import FullHouse     from './full_house';
import SmallStraight from './small_straight';
import LargeStraight from './large_straight';
import Yahtzee       from './yahtzee';
import Chance        from './chance';

const rootReducer = combineReducers({
  aces:          Aces,
  twos:          Twos,
  threes:        Threes,
  fours:         Fours,
  fives:         Fives,
  sixes:         Sixes,
  threeOfAKind:  ThreeOfAKind,
  fourOfAKind:   FourOfAKind,
  fullHouse:     FullHouse,
  smallStraight: SmallStraight,
  largeStraight: LargeStraight,
  yahtzee:       Yahtzee,
  chance:        Chance
});

export default rootReducer;
