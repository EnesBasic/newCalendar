// src/UI/GlassArrow.jsx
import React from 'react';
import leftArrow from '../../assets/icons/left3.png';
import rightArrow from '../../assets/icons/right3.png';

const GlassArrow = ({ direction, size = 32 }) => (
  <img 
    src={direction === 'left' ? leftArrow : rightArrow}
    alt={direction === 'left' ? 'Previous' : 'Next'}
    style={{ width: size, height: size }}
  />
);

// Named export
export { GlassArrow };

// OR default export (choose one, not both)
// export default GlassArrow;