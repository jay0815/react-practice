import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import App from '../Containers/App/index.js';
import Step2 from '../Containers/Step2/index.js';


const RouterConfig = () =>
    <Router>
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/Step2' component={Step2} />
      </Switch>
    </Router>

export default RouterConfig;
