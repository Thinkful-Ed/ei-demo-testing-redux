import React from 'react';
import {connect} from 'react-redux';

export function Counter(props) {
    return <div className="counter">Count: {props.counter}</div>;
}

export const mapStateToProps = (state, props) => ({
    counter: state.count
});

export default connect(mapStateToProps)(Counter);
