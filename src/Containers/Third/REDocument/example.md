####

> src/Reducer/third.js

```Javascript
const initialState = {
  reason: 'no reason',
  nameList: []
};

const thirdState = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_REASON':
      return {
        ...state,
        reason: Object(action).hasOwnProperty('reason') ? action.reason : state.reason
      }
    default:
      return state
  }
}

export default thirdState;
```

> src/Reducer/index.js

```Javascript

import { combineReducers } from 'redux'
import thirdState from './thirdState.js'

const reducer = combineReducers({
  thirdState
})

export default reducer;

```

> src/index.js

```Javascript

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import reducers from './Reducer/index.js'
// AppContainer 是一个 HMR 必须的包裹(wrapper)组件
import { AppContainer } from 'react-hot-loader';
import RouterConfig from './Router/index.js';
import { Provider } from 'react-redux';

const store = createStore(reducers);

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root'));
};

render(RouterConfig);

```
