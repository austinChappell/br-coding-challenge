// third-party libraries
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const propTypes = {
  directionFrom: PropTypes.string.isRequired,
  panelView: PropTypes.node,
  show: PropTypes.bool.isRequired,
};

const defaultProps = {
  // panelView is null if panel is closed
  panelView: null,
};

const Panel = (props) => {
  const {
    directionFrom, // where the panel stays when off screen, either "left" or "right"
    panelView, // inner content of panel
    show, // determines if panel is on screen or off screen
  } = props;

  const style = {};
  style[directionFrom] = show ? 0 : '-100vw';

  // this component is set up to be reusable, so only pass in what will display
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
Panel.defaultProps = defaultProps;

export default connect(mapStateToProps)(Panel);
