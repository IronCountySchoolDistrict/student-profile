import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Avatar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      avatarImgUrl: `${this.props.host}/${this.props.portal}/stp/${this.props.student_id}ph.jpeg`
    };
  }

  toFullName(firstName, middleName, lastName) {
    let fullName = '';
    fullName += firstName;
    if (middleName) {
      fullName += ' ' + middleName;
    }
    fullName += ' ' + lastName;
    return fullName;
  }

  onError() {
    this.setState({
      avatarImgUrl: `${this.props.host}/images/student-profile/blank-profile-picture.png`
    });
  }

  render() {
    const textAlignStyle = {
      textAlign: 'center'
    };
    return (
      <div style={textAlignStyle}>
        <h4 id="student-name">
          {this.toFullName(this.props.first_name, this.props.middle_name, this.props.last_name)}
        </h4>
        <div className="thumbnail">
          <img src={this.state.avatarImgUrl} alt="Student's Photo" onError={() => this.onError()} />
        </div>
      </div>
    );
  }
}

Avatar.propTypes = {
  student_id: PropTypes.number,
  first_name: PropTypes.string,
  middle_name: PropTypes.string,
  last_name: PropTypes.string
};
