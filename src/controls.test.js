import React from 'react';
import {mount} from 'enzyme';
import {Controls} from './controls';
import {increment, decrement} from './actions';

describe('Controls', () => {
    it('Dispatches the increment action', () => {
        const value = 15;
        const dispatch = jest.fn();
        const wrapper = mount(<Controls dispatch={dispatch} />);
        const input = wrapper.find('#amount');
        input.instance().value = value;
        const button = wrapper.find('#increment-button');
        button.simulate('click');
        expect(dispatch).toHaveBeenCalledWith(increment(value));
    });

    it('Dispatches the decrement action', () => {
        const value = 15;
        const dispatch = jest.fn();
        const wrapper = mount(<Controls dispatch={dispatch} />);
        const input = wrapper.find('#amount');
        input.instance().value = value;
        const button = wrapper.find('#decrement-button');
        button.simulate('click');
        expect(dispatch).toHaveBeenCalledWith(decrement(value));
    });
});
