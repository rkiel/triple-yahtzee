export function changeAces(one,two,three) {
  return {
    type: 'CHANGE_ACES',
    payload: {
      one:   one,
      two:   two,
      three: three
    }
  }
}

export function changeTwos(one,two,three) {
  return {
    type: 'CHANGE_TWOS',
    payload: {
      one:   one,
      two:   two,
      three: three
    }
  }
}
