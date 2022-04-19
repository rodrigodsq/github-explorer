import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/github-explorer" component={Dashboard} />
    <Route path="/repositories/:repository+" component={Repository} />
    <Route render={() => <Redirect to="/github-explorer" />} />
  </Switch>
);

export default Routes;
