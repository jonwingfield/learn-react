import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            whoseTurn: 'X',
        };
    }

    renderSquare(i) {
      return (
        <Square index={i}
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)} />
      );
    }

    handleClick(i) {
        const turn = this.state.whoseTurn;
        const squares = this.state.squares.slice();
        if (squares[i] || this.checkWinner()) { return; }
        squares[i] = turn;
        this.setState({ squares: squares, whoseTurn: turn === 'X' ? 'O' : 'X' });
    }
    
    checkWinner() {
        var s = this.state.squares;
        for(var j=0; j<3; j++) {
            if(s[3*j] != null && s[3*j] === s[3*j+1] && s[3*j+1] === s[3*j+2]){
                return s[3*j];
            }
            else if(s[j] != null && s[j] === s[j+3] && s[j+3] === s[j+6]) {
                return s[j];
            }
        }

        if(s[0] != null && s[0] === s[4] && s[4] === s[8]) {
            return s[0];
        }
        if(s[2] != null && s[2] === s[4] && s[4] === s[6]) {
            return s[2];
        }

        return null;
    }

    renderWinner() {
        const winner = this.checkWinner();
        console.log(winner);
        if (winner) {
            return <span>Winner: {winner}</span>;
        }
        return <span>Test</span>;
    }

    render() {
      const status = 'Next player: ' + this.state.whoseTurn;
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
          <div>{this.renderWinner()}</div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  