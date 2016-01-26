import React, { Component } from 'react';
import _ from 'lodash';

export default class Row extends Component {

  blank() {
    return (
      <tr>
        <td className="mdl-data-table__cell--non-numeric">
          &nbsp;
        </td>
        <td className="mdl-data-table__cell--non-numeric">
          &nbsp;
        </td>
        <td className="mdl-data-table__cell--non-numeric">
          &nbsp;
        </td>
        <td className="mdl-data-table__cell--non-numeric">
          &nbsp;
        </td>
        <td className="mdl-data-table__cell--non-numeric">
          &nbsp;
        </td>
        <td className="mdl-data-table__cell--non-numeric">
          &nbsp;
        </td>
      </tr>
    )
  }

  readonly() {
    return (
      <tr>
        <td className="mdl-data-table__cell--non-numeric">
          <strong>{this.props.label}</strong>
        </td>
        <td className="mdl-data-table__cell--non-numeric">
          {this.props.help}
        </td>
        <td className="mdl-data-table__cell--non-numeric">
          {this.props.score}
        </td>
        <td className="mdl-data-table__cell--non-numeric">
          <input maxLength="3" size="3" style={{textAlign: 'right'}} className="mdl-textfield__input" value={this.props.one} disabled={true} />
        </td>
        <td className="mdl-data-table__cell--non-numeric">
          <input maxLength="3" size="3" style={{textAlign: 'right'}} className="mdl-textfield__input" value={this.props.two} disabled={true} />
        </td>
        <td className="mdl-data-table__cell--non-numeric">
          <input maxLength="3" size="3" style={{textAlign: 'right'}} className="mdl-textfield__input" value={this.props.three} disabled={true} />
        </td>
      </tr>
    )
  }

  readwrite() {
    return (
      <tr>
        <td className="mdl-data-table__cell--non-numeric">
          <strong>{this.props.label}</strong>
        </td>
        <td className="mdl-data-table__cell--non-numeric">
          {this.props.help}
        </td>
        <td className="mdl-data-table__cell--non-numeric">
          {this.props.score}
        </td>
        <td className="mdl-data-table__cell--non-numeric">
          <input maxLength="3" size="3" className="mdl-textfield__input" value={this.props.one} style={this.valClass(this.props.one)} onChange={event => this.props.change(validation(event.target.value),this.props.two,this.props.three)} />
        </td>
        <td className="mdl-data-table__cell--non-numeric">
          <input maxLength="3" size="3" className="mdl-textfield__input" value={this.props.two} style={this.valClass(this.props.two)} onChange={event => this.props.change(this.props.one,validation(event.target.value),this.props.three)} />
        </td>
        <td className="mdl-data-table__cell--non-numeric">
          <input maxLength="3" size="3" className="mdl-textfield__input" value={this.props.three} style={this.valClass(this.props.three)} onChange={event => this.props.change(this.props.one,this.props.two,validation(event.target.value))} />
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
      return {textAlign: 'right' };
    } else if (this.props.values) {
      if (_.includes(_.map(this.props.values, function(x) { return x.toString(); }), value)) {
        return {textAlign: 'right' };
      } else {
        return { textAlign: 'right', border: '2px solid red' };
      }
    } else {
      return {textAlign: 'right' };
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

