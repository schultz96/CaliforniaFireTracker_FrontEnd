import React from 'react';
import { AppMenu } from '../../Components/Menu/Menu';
import { Grid } from '@material-ui/core';
import { Footer } from '../../Components/Footer/Footer';
import './MainLayout.css';


export const MainLayout = (props) => {

  return (
    <Grid container style={{ padding: 20 }} spacing={3}>
      <Grid item xs={12} md={12} lg={3} className="sidebar-container">
        <AppMenu />
        {props.sidebar ? props.sidebar : []}
      </Grid>
      <Grid item xs={12} md={12} lg={9} className="content-container">
        {props.children}
      </Grid>
      <Footer/>
    </Grid>
  )
}