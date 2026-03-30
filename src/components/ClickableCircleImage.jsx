import React from 'react';
import './ClickableCircleImage.css';

const ClickableCircleImage = ({ imageUrl, altText, onClick, size }) => {
  return (
    <button
      className="circle-image-button"
      onClick={onClick}
      style={{ width: size, height: size }}
    >
      <img src={imageUrl} alt={altText} className="circle-image" />
    </button>
  );
};

export default ClickableCircleImage;
