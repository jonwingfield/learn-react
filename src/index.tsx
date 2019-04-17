import React from 'react';
import ReactDOM from 'react-dom';
import { Board } from './Board';
import { Api } from "./Api";
import withLoader from './Loader';
import { Symbol } from './Symbol';
import './index.css';

  class Game extends React.Component<{}, { symbol?: string }> {
    onSymbolEntered(symbol: string) {
      this.setState({ symbol });
    }
    render() {
      let boardSection;
      if (this.state.symbol) {
        const symbol = this.state.symbol;
        const BoardWithLoader = withLoader(() => Api.getQuote(symbol), Board);
        boardSection = <BoardWithLoader symbol={this.state.symbol} />;
      } else {
        boardSection = <div />
      }
      return (
        <div className="game">
          <Symbol onSymbolEntered={this.onSymbolEntered.bind(this)} />
          <div className="game-board">
            {boardSection}
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
  