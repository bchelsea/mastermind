import React, { Component } from 'react';
import './App.css';
// Must import components used in the JSX
import GameBoard from './components/GameBoard/GameBoard';
import ColorPicker from './components/ColorPicker/ColorPicker';
import NewGameButton from './components/NewGameButton/NewGameButton';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  };
  

  getInitialState() {
    let colors = ['#899DA4', '#C93312', '#FAEFD1', '#DC863B'];
    return {
      colors,
      code: this.genCode(colors.length),
      selColorIdx: 0,
      guesses: [this.getNewGuess()]
    };
  }

  getNewGuess() {
    return {
      code: [null, null, null, null],
      // code: [3, 2, 1, 0], // for testing purposes
      score: {
        perfect: 0,
        almost: 0
      }
    };
  }

  genCode(size) {
    return new Array(size).fill().map(dummy => Math.floor(Math.random() * size));
  }

  getWinTries() {
    // if winner, return num guesses, otherwise 0 (no winner)
    let lastGuess = this.state.guesses.length - 1;
    return this.state.code.join() === this.state.guesses[lastGuess].code.join() ? lastGuess + 1 : 0;
  }


  handleColorSelection = (colorIdx) => {
    this.setState({selColorIdx: colorIdx});
  }

  handleNewGameClick = () => {
    this.setState(this.getInitialState());
  }

  handleGuess = (guessIdx) => {
    var guesses = [...this.state.guesses];
    guesses[this.state.guesses.length - 1].code[guessIdx] = this.state.selColorIdx;
    this.setState({
    });
  }

  render() {
    let winTries = this.getWinTries();
    return (
      <div className="App">
          <header className="App-header">REACT MASTERMIND</header>
          <div style={{display: "flex", justifyContent: "center"} }>
            <GameBoard
              guesses={this.state.guesses}
              colors={this.state.colors}
              handleGuess={this.handleGuess}
            />
            <div className="GameControls">
              <ColorPicker 
              handleColorSelection={this.handleColorSelection}
              setColorIdx={this.state.selColorIdx}
              colors={this.state.colors} />
              <NewGameButton 
              handleNewGameClick={this.handleNewGameClick}/>
          </div>
        </div>
          <footer>{(winTries ? `You Won in ${winTries} Guesses!` : 'Good Luck!')}</footer>
      </div>
    );
  }
}



export default App;