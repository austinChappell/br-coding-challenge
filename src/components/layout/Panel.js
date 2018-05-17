import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const propTypes = {
  directionFrom: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
};

const Panel = (props) => {
  const {
    directionFrom,
    panelView,
    show,
  } = props;

  const style = {};
  style[directionFrom] = show ? 0 : '-100vw';

  return (
    <div
      className="Panel"
      style={style}
    >
      {panelView}
    </div>
  );
};

const mapStateToProps = state => ({
  panelView: state.generalReducer.panelView,
});

Panel.propTypes = propTypes;

export default connect(mapStateToProps)(Panel);
