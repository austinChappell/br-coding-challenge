import React, { Component } from 'react';

import MapView from '../shared/MapView';
import DetailView from '../shared/DetailView';

class RestaurantDetails extends Component {
  constructor(props) {
    super(props);

    const { name, location } = props.restaurant;
    const { lat, lng } = location;

    this.state = {
      currentLocation: null,
      markers: [{
        lat, lng, name, open: false,
      }],
    };
  }

  componentDidMount() {
    this.getUserLocation();
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
        this.setState({ currentLocation });
      } else {
        console.error('could not get user location', error);
      }
    });
  }

  // hide and show map marker info window
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
    const { currentLocation, markers } = this.state;
    const { restaurant } = this.props;

    const {
      category,
      contact,
      location,
      name,
    } = restaurant;
    const { lat, lng } = location;

    return (
      <div className="RestaurantDetails">
        <MapView
          center={{ lat, lng }}
          currentLocation={currentLocation}
          containerElement={<div style={{ height: '400px' }} />}
          googleMapURL={process.env.REACT_APP_MAP_URL}
          lat={lat}
          loadingElement={<div style={{ height: '100%' }} />}
          lng={lng}
          markers={markers}
          mapElement={<div style={{ height: '100%' }} />}
          toggleOpen={this.toggleOpen}
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

export default RestaurantDetails;
