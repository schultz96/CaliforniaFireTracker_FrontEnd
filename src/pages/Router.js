import  React from 'react';
import { 
  Switch,
  Route
 } from 'react-router-dom';
 import { Map } from './Map/Map';
 import { Sources } from '../pages/Sources/Sources';

export const Router = () => (
  <Switch>
    <Route exact path="/">
      <Map/>
    </Route>
    <Route exact path="/sources">
      <Sources />
    </Route>
  </Switch>
)