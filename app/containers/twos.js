import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeTwos } from '../actions/index';

class Twos extends Component {

  render() {
    return (
      <tr>
        <td>
          Twos
        </td>
        <td>
          <input value={toInt(this.props.one)} onChange={event => this.props.changeTwos(parseInt(event.target.value+""), this.props.two, this.props.three)} />
        </td>
        <td>
          <input value={toInt(this.props.two)} onChange={event => this.props.changeTwos(this.props.one, parseInt(event.target.value+""), this.props.three)} />
        </td>
        <td>
          <input value={toInt(this.props.three)} onChange={event => this.props.changeTwos(this.props.one, this.props.two, parseInt(event.target.value+""))} />
        </td>
      </tr>
    )
  }

}

function mapStateToProps(state) {
  return {
    one:   state.twos.one,
    two:   state.twos.two,
    three: state.twos.three
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    changeTwos: changeTwos
  }, dispatch);
}

function toInt(value) {
  if (value || value === 0) {
    return value.toString();
  } else {
    return "";
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Twos);
