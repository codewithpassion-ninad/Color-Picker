import React, { useState } from 'react';
import '../App.css';

const ColorPicker = ({ colors }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [hoveredColor, setHoveredColor] = useState(null);
  const [showColorList, setShowColorList] = useState(false);

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setHoveredColor(null);
  };

  const handleColorHover = (color) => {
    setHoveredColor(color);
  };

  return (
    <center>
      <div
        className="color-picker-container"
        style={{ backgroundColor: selectedColor || hoveredColor || 'pink' }}
        onMouseLeave={() => setHoveredColor(null)}
      >
        {showColorList && (
          <div className="color-list">
            {colors.map((color, index) => (
              <div
                key={index}
                className="color-item"
                style={{ backgroundColor: color }}
                onClick={() => handleColorClick(color)}
                onMouseEnter={() => handleColorHover(color)}
              />
            ))}
          </div>
        )}
        <button className="color-picker-button" onClick={() => setShowColorList(!showColorList)}>
          Pick a color
        </button>
        <div className="selected-color">
          Selected Color: {selectedColor || hoveredColor || 'None'}
        </div>
      </div>
    </center>
  );
};

export default ColorPicker;
