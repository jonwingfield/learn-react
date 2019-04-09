import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import { Square } from './Square';
import { Player } from './Board';

describe('<Square />', () => {
    it("should show the selected player", () => {
        const f = () => {};
        const component = shallow(<Square index={9} onClick={f} value={Player.X} />);
        expect(component.text()).to.equal("X");
    });

    it("should call onClick when clicked", () => {
        var onClick = spy();
        const component = shallow(<Square index={9} onClick={onClick} value={Player.X} />);
        component.find('button').simulate('click');
        expect(onClick.called).to.equal(true);
    });
});