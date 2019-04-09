import React from 'react';
import { expect } from 'chai';
import { shallow, ShallowWrapper } from 'enzyme';
import { spy } from 'sinon';
import { Board, Player } from './Board';
import { Square, ButtonProps } from './Square';

describe("Board", () => {
    let board: ShallowWrapper<Board>;
    beforeEach(() => {
        board = shallow(<Board />);
    })

    const square = (offset: number) => board.find(Square).at(offset).props();
    
    it("checks a square when clicking", () => {
        square(0).onClick();
        expect(square(0).value).to.equal(Player.X);
    })

    it("alternates between players", () => {
        square(0).onClick();
        square(1).onClick();
        expect(square(1).value).to.equal(Player.O);
    })

    it("shows whose turn it is", () => {
        expect(board.find('.status').text()).to.equal('Next player: X');
        square(1).onClick();
        expect(board.find('.status').text()).to.equal('Next player: O');
    })

    it("declares a winner", () => {
        square(0).onClick();
        square(1).onClick();
        square(4).onClick();
        square(3).onClick();
        square(8).onClick();
        expect(board.find('.winner').text()).to.equal("Winner: X");
    })
})