export default function(state = {one: null, two: null, three: null}, action) {

  switch (action.type) {
    case 'CHANGE_FOURS':
      return action.payload;
  }

  return state;

}
