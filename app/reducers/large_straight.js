export default function(state = {one: null, two: null, three: null}, action) {

  switch (action.type) {
    case 'CHANGE_LARGE_STRAIGHT':
      return action.payload;
  }

  return state;

}
