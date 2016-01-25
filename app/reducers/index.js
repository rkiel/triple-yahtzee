import { combineReducers } from 'redux';

import Aces   from './aces';
import Twos   from './twos';
import Threes from './threes';
import Fours  from './fours';
import Fives  from './fives';
import Sixes  from './sixes';

const rootReducer = combineReducers({
  aces:   Aces,
  twos:   Twos,
  threes: Threes,
  fours:  Fours,
  fives:  Fives,
  sixes:  Sixes
});

export default rootReducer;
