import { Component, createElement } from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';

const stateful = (...args) => WrappedComponent => {
  class Dispatcher extends Component {
    constructor(props) {
      super(props);
      this.state = args.shift();
      this._actions = Object.assign(...args);
      this.handleDispatch = this.handleDispatch.bind(this);
    }
    
    handleDispatch(action, data = null) {
      this.setState((state) => {
        return this._actions[action](state, data);
      });
    }
    
    render() {
      return (
        createElement(
          WrappedComponent,
          Object.assign({}, this.props, this.state, {
            dispatch: this.handleDispatch
          }))
      );
    }
  }
  return hoistNonReactStatics(Dispatcher, WrappedComponent);
};

export default stateful;