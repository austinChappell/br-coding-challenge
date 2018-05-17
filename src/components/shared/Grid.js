import React from 'react';

// this component's purpose is to display it's children in a grid via Grid.scss
const Grid = (props) => {
  const {
    children,
  } = props;

  return (
    <div className="Grid">
      {children}
    </div>
  );
};

export default Grid;
