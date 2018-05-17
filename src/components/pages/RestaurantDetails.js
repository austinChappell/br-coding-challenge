import React, { Component } from 'react';
import { connect } from 'react-redux';

import MapView from '../shared/MapView';
import DetailView from '../shared/DetailView';

class RestaurantDetails extends Component {
  constructor(props) {
    super(props);

    const { name, location } = props.restaurant;
    const { lat, lng } = location;

    this.state = {
      markers: [{
        lat, lng, name, open: false,
      }],
    };
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
    const { markers } = this.state;
    const { currentLocation, restaurant } = this.props;

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
          loadingElement={<div style={{ height: '100%' }} />}
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

const mapStateToProps = state => ({
  currentLocation: state.generalReducer.currentLocation,
});

export default connect(mapStateToProps)(RestaurantDetails);
