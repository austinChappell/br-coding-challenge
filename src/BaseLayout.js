import React from 'react';
import PropTypes from 'prop-types';

import NavBar from './components/NavBar';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

const BaseLayout = props => (
  <div className="BaseLayout">
    <NavBar />
    {props.children}
  </div>
);

BaseLayout.propTypes = propTypes;

export default BaseLayout;
