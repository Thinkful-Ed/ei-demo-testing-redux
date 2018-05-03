import React from 'react';

import Counter from './counter';
import Controls from './controls';

export default function App(props) {
    return (
        <div className="app">
            <Counter />
            <Controls />
        </div>
    );
}
