import React, {Component} from 'react';
import PropTypes from 'prop-types';
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
  gpas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      term: PropTypes.string,
      gpa: PropTypes.number
    })
  )
};
