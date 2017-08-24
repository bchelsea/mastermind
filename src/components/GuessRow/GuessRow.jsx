import React from 'react';
import GuessPegs from '../GuessPegs/GuessPegs';
import GuessScore from '../GuessScore/GuessScore';
import ScoreButton from '../ScoreButton/ScoreButton';
import './GuessRow.css';

const GuessRow = (props) => {
  return (
    <div className="GuessRow">
      <div style={ {color:props.currentGuess ? 'black' : "lightgrey"} }>{props.rowIdx + 1}
      </div>
      <GuessPegs 
      handleGuess={props.handleGuess}
      code={props.guess.code} 
      colors={props.colors}
      currentGuess={props.currentGuess}/>
      <div style={{width: "80px"}}>
        {
          props.currentGuess ?
              <ScoreButton />
            :
              <GuessScore score={props.guess.score} />
        }
      </div>
    </div>
  );
}

export default GuessRow;
