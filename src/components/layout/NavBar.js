// third-party libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// apis and actions
import actions from '../../data/redux/actions/';
import restaurantAPI from '../../data/api/restaurants';

// image assets
import backArrow from '../../assets/images/ic_webBack@2x.png';
import mapIcon from '../../assets/images/icon_map@2x.png';

// api to fetch restaurant data
const { getRestaurants } = restaurantAPI;

const propTypes = {
  panelOpen: PropTypes.bool.isRequired,
  setCurrentLocation: PropTypes.func.isRequired,
  setRestaurants: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  togglePanel: PropTypes.func.isRequired,
};

class NavBar extends Component {
  componentDidMount() {
    this.getRestaurants();
    this.getUserLocation();
  }

  // make call to api
  getRestaurants = () => {
    getRestaurants(this.setRestaurants);
  }

  // get current location of user
  getUserLocation = () => {
    navigator.geolocation.getCurrentPosition((position, error) => {
      if (position) {
        const { coords } = position;
        const currentLocation = {
          lat: coords.latitude,
          lng: coords.longitude,
        };
        this.props.setCurrentLocation(currentLocation);
      } else {
        console.error('could not get user location', error);
      }
    });
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

    // if the panel is open, close it when navigating to new route
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
        <h1>
          <Link
            href="/"
            onClick={clickEvent}
            onKeyDown={clickEvent}
            role="button"
            tabIndex={0}
            to="/"
          >
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

  // set user location
  setCurrentLocation: currentLocation => dispatch(actions.setCurrentLocation(currentLocation)),
  setRestaurants: restaurants => dispatch(actions.setRestaurants(restaurants)),
});

NavBar.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
