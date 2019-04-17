import React from 'react';
import { Square } from './Square';
import { Loaded } from './Loader';

export enum Player { 
  X = 'X', 
  O = 'O',
};

interface BoardState {
  squares: Player[];
  whoseTurn: Player;
}

interface BoardProps {
  symbol: string;
}

export class Board extends React.Component<Loaded<BoardProps, number>, BoardState> {
  constructor(props: Loaded<BoardProps, number>) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      whoseTurn: Player.X,
    };
  }
  renderSquare(i: number) {
    return (<Square index={i} value={this.state.squares[i]} onClick={() => this.handleClick(i)} />);
  }
  handleClick(i: number) {
    const turn = this.state.whoseTurn;
    const squares = this.state.squares.slice();
    if (squares[i] || this.checkWinner()) {
      return;
    }
    squares[i] = turn;
    this.setState({ squares: squares, whoseTurn: turn === Player.X ? Player.O : Player.X });
  }
  checkWinner() {
    var s = this.state.squares;
    for (var j = 0; j < 3; j++) {
      if (s[3 * j] != null && s[3 * j] === s[3 * j + 1] && s[3 * j + 1] === s[3 * j + 2]) {
        return s[3 * j];
      }
      else if (s[j] != null && s[j] === s[j + 3] && s[j + 3] === s[j + 6]) {
        return s[j];
      }
    }
    if (s[0] != null && s[0] === s[4] && s[4] === s[8]) {
      return s[0];
    }
    if (s[2] != null && s[2] === s[4] && s[4] === s[6]) {
      return s[2];
    }
    return null;
  }
  renderWinner() {
    const winner = this.checkWinner();
    console.log(winner);
    if (winner) {
      return <span className="winner">Winner: {winner}</span>;
    }
    return <span className="winner"></span>;
  }
  render() {
    const status = 'Next player: ' + this.state.whoseTurn;
    return (<div>
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
      <div>{this.props.symbol}: {this.props.data}</div>
    </div>);
  }
}

