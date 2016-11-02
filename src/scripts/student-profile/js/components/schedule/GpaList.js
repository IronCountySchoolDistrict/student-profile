import React, {Component} from 'react';
import Gpa from './Gpa';

export default class GpaList extends Component {
  render() {
    const panelDefault = 'panel panel-default';
    const gpas = this.props.gpa.map(gpa => {
      return (
        <Gpa key={gpa.id} term={gpa.term} gpa={gpa.gpa} />
      );
    });

    return (
      <div className={panelDefault}>
        <div className="panel-body">
          <div className="row">
            {gpas}
          </div>
        </div>
      </div>
    );
  }
}
