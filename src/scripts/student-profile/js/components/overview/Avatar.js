import React, {Component} from 'react';
import {getPortal} from '../../util';

export default class Avatar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      avatarImgUrl: `/${getPortal()}/stp/${this.props.student_id}ph.jpeg`
    };
  }

  toFullName(firstName, middleName, lastName) {
    var fullName = '';
    fullName += firstName;
    if (middleName) {
      fullName += ' ' + middleName;
    }
    fullName += ' ' + lastName;
    return fullName;
  }

  onError() {
    this.setState({
      avatarImgUrl: '/images/student-profile/blank-profile-picture.png'
    });
  }

  render() {
    const textAlignStyle = {
      textAlign: 'center'
    };
    return (
      <div style={textAlignStyle}>
        <h4>
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
  student_id: React.PropTypes.number,
  first_name: React.PropTypes.string,
  middle_name: React.PropTypes.string,
  last_name: React.PropTypes.string
};
