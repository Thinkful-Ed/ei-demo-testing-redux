import {INCREMENT, DECREMENT} from './actions';

const initialState = {
    count: 0
};

export default (state = initialState, action) => {
    if (action.type === INCREMENT) {
        return Object.assign({}, state, {
            count: state.count + action.by
        });
    } else if (action.type === DECREMENT) {
        return Object.assign({}, state, {
            count: state.count - action.by
        });
    }
    return state;
};
