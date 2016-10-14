import React, {Component} from 'react';
import {getPortal} from '../../util';

export default class Medical extends Component {

  render() {
    const alertWarningClasses = 'alert alert-danger';
    return (
      <div className={alertWarningClasses} role="alert">
        <p>
          <strong>Medical Alert</strong> {this.props.alert_medical}
        </p>
        <p>
          <strong>Allergies</strong> {this.props.allergies}
        </p>
        <p>
          <strong>Medical Considerations</strong> {this.props.medical_considerations}
        </p>
      </div>
    );
  }
}

Medical.propTypes = {
  alert_medical: React.PropTypes.string,
  allergies: React.PropTypes.string,
  medical_considerations: React.PropTypes.string
};
