import React, {Component} from 'react';
import Gpa from './Gpa';

export default class GpaList extends Component {
  render() {
    const panelDefault = 'panel panel-default gpa-list';
    const gpas = this.props.gpas.map(gpa => {
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

GpaList.propTypes = {
  gpas: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      id: React.PropTypes.number,
      term: React.PropTypes.string,
      gpa: React.PropTypes.number
    })
  )
};
