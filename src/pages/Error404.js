import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

const Error404 = props => (
  <div className="Error404">
    <h1>Page not found.</h1>
    <h2 onClick={() => props.history.goBack()}>
      Go Back
    </h2>
  </div>
);

Error404.propTypes = propTypes;

export default Error404;
