import React from 'react';
import { MenuItem } from './MenuItem';
import { Grid } from '@material-ui/core';
import './Menu.css';

export const Menu = () => {
  return (
    <Grid container style={{ paddingLeft: 20, paddingRight: 20}}>
      <Grid xs={2}>
        <h1>California Fire Tracker</h1>
      </Grid>
      <Grid xs={10}>
        <MenuItem
          title="Dashboard"
          to="/"
        />
      </Grid>
      
      
    </Grid>
  )
}