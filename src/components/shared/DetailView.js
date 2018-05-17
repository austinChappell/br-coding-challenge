import React from 'react';

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

  const phone = contact ? contact.formattedPhone : null;
  const twitter = contact ? contact.twitter : null;

  const phoneDisplay = phone ?
    (
      <div className="phone">
        <h3>{phone}</h3>
      </div>
    ) : null;

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

export default DetailView;
