import React from 'react';

const NewGameButton = (props) => {
  return (
    <div className="GameControls">
    <button onClick={props.handleNewGameClick} className="btn btn-default">
      New Game
    </button>
    </div>
  );
}

export default NewGameButton;