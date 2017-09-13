# stateful-decorator
Exploring a state machine on React functional components.

## Advice
Note that stateless components are wrapped in classes internally by React. Therefore, they mostly have the same performance when the entire vdom is rerendered.
  
In this sense classes give you more power to tweak performance that you won't be able to do on functional components.
  
Still this is a quick/easy way to add state to those functional components that don't rerender a lot of dependant components.

## Usage

```javascript
// actions.js
export default {
  increment: (state) => ({ ...state, count: state.count += 1 }),
  decrement: (state) => ({ ...state, count: state.count -= 1 }),
  reset: (state, data) => ({ ...state, count: data })
};
```
