import React from 'react';
import { BrowserRouter as Routing, Switch, Route } from 'react-router-dom';

import App from '../App';
import Recipe from './Recipe';

const Router = props => (
  <Routing>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/recipe/:id" component={Recipe} />
    </Switch>
  </Routing>
);

export default Router;
