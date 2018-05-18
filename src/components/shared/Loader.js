// third-party libraries
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  message: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
};

// component that covers entire view
// only will show if props.show is true
const Loader = props => (
  <div className={props.show ? 'Loader' : 'hide'}>
    <h1>{props.message}...</h1>
  </div>
);

Loader.propTypes = propTypes;

export default Loader;
