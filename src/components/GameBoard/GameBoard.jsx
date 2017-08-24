import React from 'react';
import GuessRow from '../GuessRow/GuessRow';
import './GameBoard.css';
import'../../App.css';

const GameBoard = (props) => {
  return (
    <div className="App">
      <div className="GameBoard">
        {props.guesses.map((guess, idx) => 
          <GuessRow
            handleGuess={props.handleGuess}
            guess={guess}
            colors={props.colors}
            rowIdx={idx}
            currentGuess={idx === (props.guesses.length - 1)}
            key={idx}
          />
        )}
      </div>
    </div>
  );
}

export default GameBoard;