// third-party libraries
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

// this page should only show if user visits bad route
const Error404 = props => (
  <div className="Error404">
    <div>
      <h1>Oh no! Page not found.</h1>
    </div>
    <br />
    <div
      onClick={() => props.history.goBack()}
      onKeyDown={() => props.history.goBack()}
      role="button"
      tabIndex={0}
    >
      <h2>
        Go Back
      </h2>
    </div>
  </div>
);

Error404.propTypes = propTypes;

export default Error404;
