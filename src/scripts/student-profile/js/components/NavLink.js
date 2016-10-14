import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';

const NavLink = class NavLink extends Component {
  render() {
    const { to, children, ...props } = this.props;

    const isActive = this.props.router.isActive(to);

    return (
      <li className={isActive ? 'active' : ''}>
        <Link to={to} {...props}>{children}</Link>
      </li>
    );
  }
};

export default withRouter(NavLink);
