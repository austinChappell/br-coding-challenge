import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import NavBar from './NavBar';
import Panel from './Panel';

const propTypes = {
  appTitle: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  panelOpen: PropTypes.bool.isRequired,
};

const BaseLayout = (props) => {
  const {
    appTitle,
    panelOpen,
  } = props;

  return (
    <div className="BaseLayout">
      <NavBar
        title={appTitle}
      />
      <Panel
        directionFrom="left"
        show={panelOpen}
      />
      {props.children}
    </div>
  );
};

BaseLayout.propTypes = propTypes;

const mapStateToProps = state => ({
  appTitle: state.generalReducer.appTitle,
  panelOpen: state.generalReducer.panelOpen,
});

export default withRouter(connect(mapStateToProps)(BaseLayout));
