export default {
  increment: (state) => (Object.assign({}, state, { count: state.count += 1 } )),
  decrement: (state) => (Object.assign({}, state, { count: state.count -= 1 } )),
  reset: (state, data) => (Object.assign({}, state, { count: data } ))
};
