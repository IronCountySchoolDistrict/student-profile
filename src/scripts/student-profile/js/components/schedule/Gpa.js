import React, {Component} from 'react';

export default class Gpa extends Component {
  render() {
    const pivotedGpas = this.props.gpa.reduce((prevVal, currVal) => {
      prevVal[currVal.term] = currVal.gpa;
      return prevVal;
    }, {});
    const gpas = this.props.uniqueTerms.map(uniqueTerm => {
      if (Object.keys(pivotedGpas).indexOf(uniqueTerm) !== -1) {
        return (
          <td>
            {pivotedGpas[uniqueTerm]}
          </td>
        );
      } else {
        return (
          <td>
            {""}
          </td>
        );
      }
    });

    return (
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>
          GPA:
        </td>
        {gpas}
        <td></td>
      </tr>
    );
  }
}

Gpa.defaultProps = { gpa: [] }
