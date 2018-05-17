import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const MapView = withScriptjs(withGoogleMap((props) => {
  const {
    lat,
    lng,
  } = props;

  const coords = { lat, lng };

  return (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={coords}
    >
      <Marker position={coords} />
    </GoogleMap>
  );
}));

export default MapView;
