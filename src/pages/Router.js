import  React from 'react';
import { 
  Switch,
  Route
 } from 'react-router-dom';
 import { Map } from './Map/Map';
 import { Grid } from '@material-ui/core';

export const Router = () => (
  <Switch>
    <Route exact path="/">
      <Map/>
    </Route>
    
  </Switch>
)