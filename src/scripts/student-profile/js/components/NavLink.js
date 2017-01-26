import React, { PropTypes, Component } from 'react';
import { Link, withRouter } from 'react-router';

const NavLink = class NavLink extends Component {
  render() {
    const { to, children } = this.props;

    const isActive = this.props.router.isActive(to);

    return (
      <li className={isActive ? 'active' : ''}>
        <Link to={to} {...this.props.route}>
          {children}
        </Link>
      </li>
    );
  }
};

export default withRouter(NavLink);

NavLink.propTypes = {
  to: PropTypes.string,
  router: PropTypes.object,
  route: PropTypes.object
};
