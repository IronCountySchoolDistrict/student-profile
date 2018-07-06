import React from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavLink = ({ label, to, activeOnlyWhenExact, activeClassName }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({match}) => (
    <li className={match ? activeClassName : ''}>
      <Link to={to}>
        {label}
      </Link>
    </li>
  )}/>
);

export default NavLink;

NavLink.propTypes = {
  label: PropTypes.string,
  to: PropTypes.string,
  activeOnlyWhenExact: PropTypes.bool,
  activeClassName: PropTypes.string
};