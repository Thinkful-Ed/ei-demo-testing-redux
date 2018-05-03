import reducer from './reducer';
import {increment, decrement} from './actions';

describe('reducer', () => {
    it('Should set the initial state when nothing is passed in', () => {
        const state = reducer(undefined, {type: '__UNKNOWN'});
        expect(state).toEqual({
            count: 0
        });
    });

    it('Should return the current state on an unknown action', () => {
        const oldState = {
            count: 25
        };
        const state = reducer(oldState, {type: '__UNKNOWN'});
        expect(state).toBe(oldState);
    });

    it('Should handle the increment action', () => {
        const oldState = {
            count: 25
        };
        const by = 6;
        const state = reducer(oldState, increment(by));
        expect(state.count).toEqual(oldState.count + by);
    });

    it('Should handle the decrement action', () => {
        const oldState = {
            count: 25
        };
        const by = 6;
        const state = reducer(oldState, decrement(by));
        expect(state.count).toEqual(oldState.count - by);
    });
});
