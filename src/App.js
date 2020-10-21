import React from 'react';
import {
  BrowserRouter
} from 'react-router-dom';
import './App.css';
import { AppMenu } from './Components/Menu/Menu';
import { Router } from './pages/Router';
import { Grid } from '@material-ui/core';

const App = () => {
  
  return (
    <BrowserRouter>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Router/>
        </Grid>
      </Grid>
    </BrowserRouter>
  );
}

export default App;
