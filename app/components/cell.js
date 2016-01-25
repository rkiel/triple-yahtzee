import React, { Component } from 'react';

export default class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = { value: props.value };
  }

  render() {
    return <input value={this.state.value} onChange={event => this.setState({value: event.target.value})} />
  }
}
