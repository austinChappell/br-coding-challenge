// third-party libraries
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  category: PropTypes.string.isRequired,
  contact: PropTypes.objectOf(PropTypes.any),
  location: PropTypes.objectOf(PropTypes.any).isRequired,
  name: PropTypes.string.isRequired,
};

const defaultProps = {
  contact: null,
};

const DetailView = (props) => {
  const {
    category,
    contact,
    location,
    name,
  } = props;

  const {
    formattedAddress,
  } = location;

  // if there is a phone number, set it
  const phone = contact ? contact.formattedPhone : null;

  // if there is a twitter handle, set it
  const twitter = contact ? contact.twitter : null;

  // if phone is present, display it
  const phoneDisplay = phone ?
    (
      <div className="phone">
        <h3>{phone}</h3>
      </div>
    ) : null;

  // if twitter handle is present, display it
  const twitterDisplay = twitter ?
    (
      <div className="twitter">
        <h3>{`@${twitter}`}</h3>
      </div>
    ) : null;

  return (
    <div className="DetailView">
      <div className="header">
        <h1>{name}</h1>
        <h2>{category}</h2>
      </div>
      <div className="sub-view">
        <div className="address">
          <h3>{formattedAddress[0]}</h3>
          <h3>{formattedAddress[1]}</h3>
        </div>
        {phoneDisplay}
        {twitterDisplay}
      </div>
    </div>
  );
};

DetailView.propTypes = propTypes;
DetailView.defaultProps = defaultProps;

export default DetailView;
