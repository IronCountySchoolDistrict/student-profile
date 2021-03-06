import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavBar from './NavBar';
import Main from './Main';

export default class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Main studentsDcid={this.props.studentsDcid} yearId={this.props.yearId} host={this.props.host} portal={this.props.portal} />
            </div>
        );
    }
}

App.propTypes = {
  studentsDcid: PropTypes.string,
  yearId: PropTypes.number,
  shouldPrint: PropTypes.bool
};
