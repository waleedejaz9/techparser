import React from 'react';
import PropTypes from 'prop-types';

const BgImage = ({ image, text }) => {
  return (
    <div
      className="w-full bg-cover  flex justify-center"
      style={{
        backgroundImage: `url(${image})`
      }}
    >
      {text}
    </div>
  );
};

export default BgImage;

BgImage.propTypes = {
  image: PropTypes.string.isRequired
};
