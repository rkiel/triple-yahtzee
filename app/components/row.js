import React, { Component } from 'react';

export default class Row extends Component {
  constructor(props) {
    super(props);
    this.state = {
      one:      props.one,
      two:      props.two,
      three:    props.three
    };
  }

  readonly() {
    return (
      <tr>
        <td>
          {this.props.label}
        </td>
        <td>
          <input value={this.state.value} disabled={true} />
        </td>
        <td>
          <input value={this.state.value} disabled={true} />
        </td>
        <td>
          <input value={this.state.value} disabled={true} />
        </td>
      </tr>
    )
  }

  readwrite() {
    return (
      <tr>
        <td>
          {this.props.label}
        </td>
        <td>
          <input value={this.state.value} onChange={event => this.setState({one: event.target.value})} />
        </td>
        <td>
          <input value={this.state.value} onChange={event => this.setState({two: event.target.value})} />
        </td>
        <td>
          <input value={this.state.value} onChange={event => this.setState({three: event.target.value})} />
        </td>
      </tr>
    )
  }

  render() {
    if (this.props.readonly) {
      return this.readonly();
    } else {
      return this.readwrite();
    }
  }
}
