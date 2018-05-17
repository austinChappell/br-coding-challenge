import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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

    return (
      <div className="NavBar">
        <div>{leftIcon}</div>
        <h1>{title}</h1>
        <div>{rightIcon}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  panelOpen: state.generalReducer.panelOpen,
});

const mapDispatchToProps = dispatch => ({
  setRestaurants: restaurants => dispatch(actions.setRestaurants(restaurants)),
});

NavBar.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
