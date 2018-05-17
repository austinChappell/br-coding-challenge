import React, { Component } from 'react';
import { connect } from 'react-redux';
import MapView from '../shared/MapView';

import actions from '../../data/redux/actions/';

import RestaurantDetails from './RestaurantDetails';

class RestaurantMapView extends Component {
  state = {
    markers: [],
  };

  componentDidMount() {
    if (this.props.restaurants.length > 0) {
      this.setMarkers();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.restaurants !== this.props.restaurants) {
      this.setMarkers();
    }
  }

  handleInfoClick = (index) => {
    const { restaurants } = this.props;
    const restaurant = restaurants[index];
    const panelView = (
      <RestaurantDetails
        restaurant={restaurant}
      />
    );
    this.props.togglePanel(panelView);
    this.props.setRestaurant(restaurant);
  }

  setMarkers = () => {
    const { restaurants } = this.props;
    const markers = restaurants.map((r) => {
      const { location, name } = r;
      return { ...location, name };
    });
    this.setState({ markers });
  }

  toggleOpen = (i) => {
    const markers = this.state.markers.map((m, index) => {
      const selected = i === index;
      // if clicking a marker, toggle it and close all others
      const open = selected ? !m.open : false;
      return { ...m, open };
    });
    this.setState({ markers });
  }

  render() {
    const { markers } = this.state;
    const { currentLocation } = this.props;

    return (
      <div className="RestaurantMapView">
        <MapView
          currentLocation={currentLocation}
          containerElement={<div style={{ height: 'calc(100vh - 60px)' }} />}
          googleMapURL={process.env.REACT_APP_MAP_URL}
          handleInfoClick={this.handleInfoClick}
          loadingElement={<div style={{ height: '100%' }} />}
          markers={markers}
          mapElement={<div style={{ height: '100%' }} />}
          toggleOpen={this.toggleOpen}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentLocation: state.generalReducer.currentLocation,
  restaurants: state.restaurantReducer.restaurants,
});

const mapDispatchToProps = dispatch => ({
  togglePanel: (panelView) => {
    dispatch(actions.togglePanel(panelView));
  },

  setRestaurant: (restaurant) => {
    dispatch(actions.setRestaurant(restaurant));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantMapView);
