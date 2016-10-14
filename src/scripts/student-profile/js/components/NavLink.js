import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

export default class NavLink extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { router } = this.context;
    const { index, to, children, ...props } = this.props;

    const isActive = router.isActive(to);

    return (
      <li className={isActive ? 'active' : ''}>
        <Link to={to} {...props}>{children}</Link>
      </li>
    );
  }
}

NavLink.contextTypes = {
  router: React.PropTypes.object
};
