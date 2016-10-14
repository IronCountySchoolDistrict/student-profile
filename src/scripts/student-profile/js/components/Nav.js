import React, { Component } from 'react';
import NavLink from './NavLink';
import { Link } from 'react-router';

export default class Nav extends Component {
  render() {
    const navbarToggle = 'navbar-toggle collapsed';
    const navbarCollapse = 'collapse navbar-collapse';
    const navUl = 'nav navbar-nav';
    const navElemClass = 'navbar navbar-default';
    return (
      <div>
        <nav className={navElemClass}>
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className={navbarToggle} data-toggle="collapse" data-target="#student-profile-navbar-collapse" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link to="/" className="navbar-brand" onlyActiveOnIndex>Student Profile</Link>
            </div>

            <div className={navbarCollapse} id="student-profile-navbar-collapse">
              <ul className={navUl}>
                <NavLink to="/schedule">Schedule</NavLink>
                <NavLink to="/test-results">Test Results</NavLink>
              </ul>
            </div>
          </div>
        </nav>
        {this.props.children}
      </div>
    );
  }
}
