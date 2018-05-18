// third-party libraries
import React from 'react';
import PropTypes from 'prop-types';

// lots of magic here
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';

const propTypes = {
  center: PropTypes.objectOf(PropTypes.number),
  currentLocation: PropTypes.objectOf(PropTypes.number),
  handleInfoClick: PropTypes.func,
  markers: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  toggleOpen: PropTypes.func,
};

const defaultProps = {
  center: null,
  currentLocation: null,
  handleInfoClick: () => {},
  toggleOpen: () => {},
};

const MapView = withScriptjs(withGoogleMap((props) => {
  const {
    center,
    currentLocation,
    handleInfoClick,
    markers,
    toggleOpen,
  } = props;

  // it is possible for center and currentLocation to be null on initial load
  // if so, defaultCenter will be the map center
  const startCenter = center || currentLocation;
  const defaultCenter = { lat: 32.950787, lng: -96.821118 };

  return (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={startCenter || defaultCenter}
    >
      {markers.map((m, i) => {
        // popup with restaurant title for mapview
        const infoWindow = m.open ? (
          <InfoWindow
            onCloseClick={toggleOpen}
          >
            <div
              className="info-window"
              onClick={() => handleInfoClick(i)}
              onKeyDown={() => handleInfoClick(i)}
              role="button"
              tabIndex={0}
            >
              {m.name}
            </div>
          </InfoWindow>
        ) : null;

        return (
          <Marker
            key={i} // eslint-disable-line
            onClick={() => toggleOpen(i)}
            position={m}
          >
            {infoWindow}
          </Marker>
        );
      })}
    </GoogleMap>
  );
}));

MapView.propTypes = propTypes;
MapView.defaultProps = defaultProps;

export default MapView;
