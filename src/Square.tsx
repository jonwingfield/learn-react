import React from 'react';
import { Player } from './Board';

export interface ButtonProps {
  value: Player;
  onClick: () => void;
  index: number;
}

export function Square(props: ButtonProps) {
  return (<button className="square" onClick={props.onClick}>
    {props.value}
  </button>);
}
