import React from 'react';
import ReactDOM from 'react-dom';
import stateful from '../src/index';
import actions from './actions';

const INITIAL_COUNT = 0;
const initialState = { count: INITIAL_COUNT };

const Counter = stateful(initialState, actions)(({ count, dispatch }) => (
  <div className="counter">
    <span>Counter: {count}</span>
    <br />
    <button onClick={() => dispatch('decrement')}>-</button>
    <button onClick={() => dispatch('increment')}>+</button>
    <button onClick={() => dispatch('reset', INITIAL_COUNT)}>Reset</button>
  </div>
));

ReactDOM.render(<Counter />, document.getElementById('root'));
