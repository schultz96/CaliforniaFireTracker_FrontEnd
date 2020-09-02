import  React from 'react';
import { 
  Switch,
  Route
 } from 'react-router-dom';
 import { Dashboard } from './Dashboard/Dashboard';
 import { ManagementRouter } from './Management/Router';


export const Router = () => (
  <Switch>
    <Route exact path="/">
      <Dashboard/>
    </Route>
    <Route path="/management">
      <ManagementRouter/>
    </Route>
  </Switch>
)