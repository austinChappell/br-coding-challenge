import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// apis and actions
import actions from '../../data/redux/actions/';
import restaurantAPI from '../../data/api/restaurants';

import backArrow from '../../assets/images/ic_webBack@2x.png';
import mapIcon from '../../assets/images/icon_map@2x.png';

const { getRestaurants } = restaurantAPI;

const propTypes = {
  setRestaurants: PropTypes.func.isRequired,
};

class NavBar extends Component {
  componentDidMount() {
    this.getRestaurants();
  }

  // make call to api
  getRestaurants = () => {
    getRestaurants(this.setRestaurants);
  }

  // handle response from api
  setRestaurants = (results) => {
    const { setRestaurants } = this.props;
    const { restaurants } = results;

    // dispatch results to store
    setRestaurants(restaurants);
  }

  render() {
    const {
      backButton,
      panelOpen,
      title,
      togglePanel,
    } = this.props;

    const leftIcon = panelOpen ? (
      <img
        alt="Back Arrow"
        src={backArrow}
      />
    ) : null;

    const rightIcon = (
      <img
        alt="Map"
        src={mapIcon}
      />
    );

    const noop = () => {};
    const clickEvent = panelOpen ? togglePanel : noop;

    return (
      <div className="NavBar">
        <div
          onClick={clickEvent}
          onKeyDown={clickEvent}
          role="button"
          tabIndex={0}
        >
          {leftIcon}
        </div>
        <h1
          onClick={clickEvent}
          onKeyDown={clickEvent}
          role="button"
          tabIndex={0}
        >
          <Link to="/" href="/">
            {title}
          </Link>
        </h1>
        <div
          onClick={clickEvent}
          onKeyDown={clickEvent}
          role="button"
          tabIndex={0}
        >
          <Link to="/map" href="/map">{rightIcon}</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  panelOpen: state.generalReducer.panelOpen,
});

const mapDispatchToProps = dispatch => ({
  togglePanel: () => dispatch(actions.togglePanel(null)),
  setRestaurants: restaurants => dispatch(actions.setRestaurants(restaurants)),
});

NavBar.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
