#### Task 1

> src/Reducers/third.js

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
        reason: Object(action).hasOwnProperty('meta') ? action.meta : state.reason
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
import reducers from './Reducers/index.js'
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

> src/Actions/Third.js

```Javascript

export const updateReason = (reason) => (dispatch, getState) =>
  dispatch({
    types: 'UPDATE_REASON',
    meta: reason
  })

```


> src/Containers/Third/index.js

```Javascript

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateReason } from './../../Actions/Third.js';

class Third extends Component {

  changeReason = () => this.props.updateReason('you had change reason');

  render () {
    return (
      <div onClick={this.changeReason}>
        Third Practice
        {this.props.reason}
        {
          this.props.nameList.map((item) =>
            <span key={item}>{item}</span>
          )
        }
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateReason: bindActionCreators(updateReason, dispatch)
})

const mapStateToProps = (state) => ({
  reason: state.thirdState.reason,
  nameList: state.thirdState.nameList
});

export default connect(mapStateToProps, mapDispatchToProps)(Third)

```
