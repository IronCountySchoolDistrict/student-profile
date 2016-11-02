import React, {Component} from 'react';

export default class Medical extends Component {
  render() {
    const alertWarningClasses = 'alert alert-danger medical-alert';
    return (
      <div className={alertWarningClasses} role="alert">
        {this.props.alert_medical &&
          <p>
            <strong className="medical-label">Medical Alert:</strong> {this.props.alert_medical}
          </p>
        }
        {this.props.allergies &&
          <p>
            <strong className="medical-label">Allergies:</strong> {this.props.allergies}
          </p>
        }
        {this.props.medical_considerations && this.props.alert_medical !== this.props.medical_considerations &&
          <p>
            <strong className="medical-label">Medical Considerations:</strong> {this.props.medical_considerations}
          </p>
        }
      </div>
    );
  }
}

Medical.propTypes = {
  alert_medical: React.PropTypes.string,
  allergies: React.PropTypes.string,
  medical_considerations: React.PropTypes.string
};
