import React from 'react';
import PropTypes from 'prop-types';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import FontAwesome from 'react-fontawesome';

const propTypes = {
  handleInfoClick: PropTypes.func,
};

const defaultProps = {
  handleInfoClick: () => {},
};

const MapView = withScriptjs(withGoogleMap((props) => {
  const {
    center,
    currentLocation,
    handleInfoClick,
    lat,
    lng,
    markers,
    toggleOpen,
  } = props;

  const startCenter = center || currentLocation;
  const defaultCenter = { lat: 32.950787, lng: -96.821118 };

  return (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={startCenter || defaultCenter}
    >
      {markers.map((m, i) => (
        <Marker
          key={i} // eslint-disable-line
          onClick={() => toggleOpen(i)}
          position={m}
        >
          {m.open && <InfoWindow
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
        }
        </Marker>
      ))}
    </GoogleMap>
  );
}));

MapView.propTypes = propTypes;
MapView.defaultProps = defaultProps;

export default MapView;
