import React, { Component } from 'react';

export default class Row extends Component {

  readonly() {
    return (
      <tr>
        <td>
          {this.props.label}
        </td>
        <td>
          <input value={this.props.one} disabled={true} />
        </td>
        <td>
          <input value={this.props.two} disabled={true} />
        </td>
        <td>
          <input value={this.props.three} disabled={true} />
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
          <input value={this.props.one} onChange={event => this.props.change(event.target.value,this.props.two,this.props.three)} />
        </td>
        <td>
          <input value={this.props.two} onChange={event => this.props.change(this.props.one,event.target.value,this.props.three)} />
        </td>
        <td>
          <input value={this.props.three} onChange={event => this.props.change(this.props.one,this.props.two,event.target.value)} />
        </td>
      </tr>
    )
  }

  render() {
    if (this.props.change) {
      return this.readwrite();
    } else {
      return this.readonly();
    }
  }
}
