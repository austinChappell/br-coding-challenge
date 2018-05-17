import React from 'react';

import MapView from '../shared/MapView';
import DetailView from '../shared/DetailView';

const RestaurantDetails = (props) => {
  const {
    restaurant,
  } = props;

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
        containerElement={<div style={{ height: '400px' }} />}
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        lat={lat}
        loadingElement={<div style={{ height: '100%' }} />}
        lng={lng}
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
};

export default RestaurantDetails;
