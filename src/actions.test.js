import {increment, INCREMENT, decrement, DECREMENT} from './actions';

describe('increment', () => {
    it('Should return the action', () => {
        const by = 5;
        const action = increment(by);
        expect(action.type).toEqual(INCREMENT);
        expect(action.by).toEqual(by);
    });
});

describe('decrement', () => {
    it('Should return the action', () => {
        const by = 5;
        const action = decrement(by);
        expect(action.type).toEqual(DECREMENT);
        expect(action.by).toEqual(by);
    });
});
