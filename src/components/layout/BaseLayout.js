import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import NavBar from './NavBar';
import Panel from './Panel';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  panelOpen: PropTypes.bool.isRequired,
};

const BaseLayout = (props) => {
  const {
    panelOpen,
  } = props;

  return (
    <div className="BaseLayout">
      <NavBar />
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
  panelOpen: state.generalReducer.panelOpen,
});

export default connect(mapStateToProps)(BaseLayout);
