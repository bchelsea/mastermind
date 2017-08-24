import React from 'react';
import './GuessPeg.css'

const GuessPeg = (props) => {

  let style = {
    width: 40, 
    height: 40, 
    margin: 5, 
    borderRadius: '50%',
    backgroundColor: props.color,
    opacity: 0.85,
    border: props.color || '1px dashed grey',
    cursor: props.currentGuess && 'pointer'
  };
  
  return (
    <div onClick={props.handleGuess} style={ style } >
      {/* {props.color} */}
    </div>
  );

}

export default GuessPeg;