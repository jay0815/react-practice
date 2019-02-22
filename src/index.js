import React from 'react';
import ReactDOM from 'react-dom';
// AppContainer 是一个 HMR 必须的包裹(wrapper)组件
import { AppContainer } from 'react-hot-loader';
import RouterConfig from './Router/index.js'

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'));
};

render(RouterConfig);

// if (module.hot) {
//   /**
// 	* Warning from React Router, caused by react-hot-loader.
// 	* The warning can be safely ignored, so filter it from the console.
// 	* Otherwise you'll see it every time something changes.
// 	* See https://github.com/gaearon/react-hot-loader/issues/298
// 	*/
//   const orgError = console.error;// eslint-disable-line no-console
//   // eslint-disable-next-line no-console
//   console.error = (message) => {
//     if (message && message.indexOf('You cannot change <Router routes>;') === -1) {
//       // Log the error as normally
//       orgError.apply(console, [message]);
//     }
//   };
//   module.hot.accept('./Containers/App/index.js', () => { render(App); });
// }
