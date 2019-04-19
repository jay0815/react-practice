import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Loadable from 'react-loadable';
import App from '../Containers/App/index.tsx';
import Step3 from '../Containers/Step3/index.js';

const Loading = () => <div>loading</div>

const loadComponet = Loadable({
  loader: () => import('../Containers/First/index.js'),
  loading: Loading
})

const RouterConfig = () =>
    <Router>
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/Step2' component={loadComponet} />
        <Route exact path='/Step3' component={Step3} />
      </Switch>
    </Router>

export default RouterConfig;
