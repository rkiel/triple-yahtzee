import React, { Component } from 'react';
import _ from 'lodash';

export default class Row extends Component {

  blank() {
    return (
      <tr>
        <td>
          &nbsp;
        </td>
        <td>
          &nbsp;
        </td>
        <td>
          &nbsp;
        </td>
        <td>
          &nbsp;
        </td>
        <td>
          &nbsp;
        </td>
        <td>
          &nbsp;
        </td>
      </tr>
    )
  }

  readonly() {
    return (
      <tr>
        <td>
          <strong>{this.props.label}</strong>
        </td>
        <td>
          {this.props.help}
        </td>
        <td>
          {this.props.score}
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
          <strong>{this.props.label}</strong>
        </td>
        <td>
          {this.props.help}
        </td>
        <td>
          {this.props.score}
        </td>
        <td>
          <input value={this.props.one} style={this.valClass(this.props.one)} onChange={event => this.props.change(validation(event.target.value),this.props.two,this.props.three)} />
        </td>
        <td>
          <input value={this.props.two} style={this.valClass(this.props.two)} onChange={event => this.props.change(this.props.one,validation(event.target.value),this.props.three)} />
        </td>
        <td>
          <input value={this.props.three} style={this.valClass(this.props.three)} onChange={event => this.props.change(this.props.one,this.props.two,validation(event.target.value))} />
        </td>
      </tr>
    )
  }

  render() {
    if (this.props.blank) {
      return this.blank();
    } else if (this.props.change) {
      return this.readwrite();
    } else {
      return this.readonly();
    }
  }

  valClass(value) {
    if (validation(value) === "" ) {
      return { };
    } else if (this.props.values) {
      if (_.includes(_.map(this.props.values, function(x) { return x.toString(); }), value)) {
        return { };
      } else {
        return { border: '2px solid red' };
      }
    } else {
      return { };
    }
  }

}

function validation(value) {
    if (value && value.match(/^\d+$/)) {
      return value;
    } else {
      return "";
    }
  }

