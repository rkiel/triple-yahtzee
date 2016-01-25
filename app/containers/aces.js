import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeAces } from '../actions/index';

class Aces extends Component {

  render() {
    return (
      <tr>
        <td>
          Aces
        </td>
        <td>
          <input value={toInt(this.props.one)} onChange={event => this.props.changeAces(parseInt(event.target.value+""), this.props.two, this.props.three)} />
        </td>
        <td>
          <input value={toInt(this.props.two)} onChange={event => this.props.changeAces(this.props.one, parseInt(event.target.value+""), this.props.three)} />
        </td>
        <td>
          <input value={toInt(this.props.three)} onChange={event => this.props.changeAces(this.props.one, this.props.two, parseInt(event.target.value+""))} />
        </td>
      </tr>
    )
  }

}

function mapStateToProps(state) {
  return {
    one:   state.aces.one,
    two:   state.aces.two,
    three: state.aces.three
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    changeAces: changeAces
  }, dispatch);
}

function toInt(value) {
  if (value || value === 0) {
    return value.toString();
  } else {
    return "";
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Aces);
