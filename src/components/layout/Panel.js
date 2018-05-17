import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  directionFrom: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
};

const Panel = (props) => {
  const {
    directionFrom,
    show,
  } = props;

  const style = {};
  style[directionFrom] = show ? 0 : '-100vw';

  return (
    <div
      className="Panel"
      style={style}
    >
      Panel Component
    </div>
  );
};

Panel.propTypes = propTypes;

export default Panel;
