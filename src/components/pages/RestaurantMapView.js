// third-party libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// action creators for reducers
import actions from '../../data/redux/actions/';

// components
import MapView from '../shared/MapView';
import RestaurantDetails from './RestaurantDetails';

const propTypes = {
  currentLocation: PropTypes.objectOf(PropTypes.number),
  togglePanel: PropTypes.func.isRequired,
};

const defaultProps = {
  currentLocation: null,
};

class RestaurantMapView extends Component {
  state = {
    markers: [],
  };

  componentDidMount() {
    if (this.props.restaurants.length > 0) {
      // set markers on mount
      this.setMarkers();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.restaurants !== this.props.restaurants) {
      // update the markers if restaurant data changed
      this.setMarkers();
    }
  }

  handleInfoClick = (index) => {
    // grab the restaurant clicked and load into RestaurantDetails component
    const { restaurants } = this.props;
    const restaurant = restaurants[index];
    const panelView = (
      <RestaurantDetails
        restaurant={restaurant}
      />
    );

    // open the panel
    this.props.togglePanel(panelView);
  }

  // map markers and put in state, to add open property and easily toggle on and off
  setMarkers = () => {
    const { restaurants } = this.props;
    const markers = restaurants.map((r) => {
      const { location, name } = r;
      return { ...location, name };
    });
    this.setState({ markers });
  }

  // used to show InfoWindow in map marker
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
});

RestaurantMapView.propTypes = propTypes;
RestaurantMapView.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantMapView);
