// src/GifComponent.jsx
import React from 'react';
import './GifComponent.css';

const GifComponent = ({ src, style }) => {
  return (
    <img src={src} alt="Random GIF" className="gif" style={style} />
  );
};

export default GifComponent;
