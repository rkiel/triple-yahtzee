export default function(state = {one: null, two: null, three: null}, action) {

  switch (action.type) {
    case 'CHANGE_FOUR_OF_A_KIND':
      return action.payload;
  }

  return state;

}
