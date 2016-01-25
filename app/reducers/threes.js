export default function(state = {one: null, two: null, three: null}, action) {

  switch (action.type) {
    case 'CHANGE_THREES':
      return action.payload;
  }

  return state;

}
