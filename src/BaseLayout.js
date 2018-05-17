import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

const BaseLayout = props => (
  <div className="BaseLayout">
    {props.children}
  </div>
);

BaseLayout.propTypes = propTypes;

export default BaseLayout;
