import React from 'react';
import { AppMenu } from '../../Components/Menu/Menu';
import { Grid } from '@material-ui/core';


export const MainLayout = (props) => {

  return (
    <Grid container style={{ padding: 20 }} spacing={3}>
      <Grid item xs={12} md={12} lg={3} style={{ padding: 20 }}>
        <AppMenu />
        {props.sidebar ? props.sidebar : []}
      </Grid>
      <Grid item xs={12} md={12} lg={9}>
        {props.children}
      </Grid>
    </Grid>
  )
}