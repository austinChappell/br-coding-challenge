// third-party libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// components
import DetailView from '../shared/DetailView';
import MapView from '../shared/MapView';

const propTypes = {
  currentLocation: PropTypes.objectOf(PropTypes.number),
  restaurant: PropTypes.objectOf(PropTypes.any).isRequired,
};

const defaultProps = {
  currentLocation: null,
};

class RestaurantDetails extends Component {
  constructor(props) {
    super(props);

    const { lat, lng } = props.restaurant.location;

    this.state = {
      // MapView component requires an array of markers
      // markers are set in state instead of rendering from redux
      // this allows for the potential to quickly flip the "open"
      // property on or off, as shown in the RestaurantMapView component
      markers: [{ lat, lng }],
    };
  }

  render() {
    const { markers } = this.state;
    const { currentLocation, restaurant } = this.props;

    // information to display below map
    const {
      category,
      contact,
      location,
      name,
    } = restaurant;

    // used to center map on load
    const { lat, lng } = location;

    return (
      <div className="RestaurantDetails">
        <MapView
          center={{ lat, lng }}
          currentLocation={currentLocation}
          containerElement={<div style={{ height: '400px' }} />}
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCLRMcLlYQAllEw9IbHtFQxbcybzUJvSVc"
          loadingElement={<div style={{ height: '100%' }} />}
          markers={markers}
          mapElement={<div style={{ height: '100%' }} />}
        />
        <DetailView
          category={category}
          contact={contact}
          location={location}
          name={name}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentLocation: state.generalReducer.currentLocation,
});

RestaurantDetails.propTypes = propTypes;
RestaurantDetails.defaultProps = defaultProps;

export default connect(mapStateToProps)(RestaurantDetails);
