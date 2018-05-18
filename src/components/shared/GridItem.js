// third-party libraries
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  subTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const GridItem = (props) => {
  const {
    backgroundImage,
    handleClick,
    index,
    subTitle,
    title,
  } = props;

  const style = {
    backgroundImage: `url('${backgroundImage}')`,
  };

  return (
    <div
      className="GridItem"
      // only passing back the index to make component more flexible
      onClick={() => handleClick(index)}
      onKeyDown={() => handleClick(index)}
      role="button"
      style={style}
      tabIndex={0}
    >
      {/* overlay gradient CSS used for fade effect */}
      {/* this seems a more performant choice than loading in gradient image */}
      <div className="overlay">
        <div className="details">
          <h1>{title}</h1>
          <h2>{subTitle}</h2>
        </div>
      </div>
    </div>
  );
};

GridItem.propTypes = propTypes;

export default GridItem;
