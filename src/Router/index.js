import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Provider
} from "react-router-dom";
import App from './Containers/App/index.js';


const RouterConfig = (store) =>
  <Provider store={store}>
    <Switch>
      <Route exact path='/' component={App} />
      {/* <Route exact path='/login' component={createComponent(Login)} /> */}
      {/* <PrivateRoute path='/Entry' component={createComponent(Entry)} /> */}
      {/* <Route
        render={() => {
          return (
            <Redirect to='/' />
          );
        }}
      /> */}
    </Switch>
  </Provider>
