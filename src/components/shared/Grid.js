// third-party libraries
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

// this component's purpose is to display it's children in a grid via Grid.scss
// it is left bare to be reusable. keep this flexible
const Grid = (props) => {
  const { children } = props;

  return (
    <div className="Grid">
      {children}
    </div>
  );
};

Grid.propTypes = propTypes;

export default Grid;
