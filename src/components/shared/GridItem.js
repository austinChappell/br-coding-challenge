import React from 'react';

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
      // only passing back the index to make component more dynamic
      onClick={() => handleClick(index)}
      onKeyDown={() => handleClick(index)}
      role="button"
      style={style}
      tabIndex={0}
    >
      {/* overlay used for fade effect */}
      <div className="overlay">
        <div className="details">
          <h1>{title}</h1>
          <h2>{subTitle}</h2>
        </div>
      </div>
    </div>
  );
};

export default GridItem;
