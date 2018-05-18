// third-party libraries
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

// components
import Loader from '../shared/Loader';
import NavBar from './NavBar';
import Panel from './Panel';

const propTypes = {
  appTitle: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  dataFetched: PropTypes.bool.isRequired,
  panelOpen: PropTypes.bool.isRequired,
};

const BaseLayout = (props) => {
  const {
    appTitle, // title for navbar
    children, // main content of site
    dataFetched, // if response from api
    panelOpen, // is panel open or closed
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
      {/* show the loader if waiting on data */}
      <Loader
        message="Loading"
        show={!dataFetched}
      />
      {children}
    </div>
  );
};

BaseLayout.propTypes = propTypes;

const mapStateToProps = state => ({
  appTitle: state.generalReducer.appTitle,
  dataFetched: state.restaurantReducer.dataFetched,
  panelOpen: state.generalReducer.panelOpen,
});

export default withRouter(connect(mapStateToProps)(BaseLayout));
