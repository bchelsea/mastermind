import React from 'react';
import './ColorPicker.css';

const ColorPicker = (props) => {
  return (
    <div className="GameControls">
      {props.colors.map((color, idx) =>
        <div 
        onClick={() => props.handleColorSelection(idx)}
        className="ColorPicker"
        style={{backgroundColor:props.selColorIdx === idx ? 'white': color,
        border: props.selColorIdx === idx ? `14px solid ${color}` : false 
        }} 
        key={color}
        />
      )}
    </div>
  );
}




export default ColorPicker;