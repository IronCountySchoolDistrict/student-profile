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
          <td key={"gpa-" + uniqueTerm}>
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

    if (gpas.length) {
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
    } else {
      return (<tr></tr>);
    }
  }
}

Gpa.defaultProps = {gpa: []};
