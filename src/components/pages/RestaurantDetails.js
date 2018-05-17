import React from 'react';

const RestaurantDetails = (props) => {
  const {
    restaurant,
  } = props;

  return (
    <div className="RestarauntDetails">
      {restaurant.name}
    </div>
  );
};

export default RestaurantDetails;
