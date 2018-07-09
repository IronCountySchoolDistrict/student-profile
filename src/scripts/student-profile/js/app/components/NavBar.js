import React, {Component} from 'react';
import NavLink from './NavLink';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    const navbarToggle = 'navbar-toggle collapsed';
    const navbarCollapse = 'collapse navbar-collapse';
    const navUl = 'navbar-nav mr-auto';
    const navElemClass = 'navbar navbar-expand-lg navbar-dark bg-primary';
    return (
      <div>
        <nav className={navElemClass}>
          <div className="container-fluid">
              <Link to="/" className="navbar-brand">Student Profile</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#student-profile-navbar-collapse" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

            <div className={navbarCollapse} id="student-profile-navbar-collapse">
              <ul className={navUl}>
                <NavLink to="/schedule" activeClassName="active" label="Schedule" />
                <NavLink to="/test-results" activeClassName="active" label="Test Results" />
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
