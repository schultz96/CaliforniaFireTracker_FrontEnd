import React from 'react';
import { MenuItem } from './MenuItem';
import { Grid } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MapIcon from '@material-ui/icons/Map';
import ReceiptIcon from '@material-ui/icons/Receipt';
import './Menu.css';
import Logo from './logo.png';

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}



export const Menu = () => {
  return (
    <div>
      <h1 style={{marginBottom: '0'}}>California Fire Tracker</h1>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <MapIcon 
              className="icon"
            />
          </ListItemIcon>
          <ListItemText 
            primary="Map" 
          />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ReceiptIcon 
              className="icon"
            />
          </ListItemIcon>
          <ListItemText 
            primary="Sources" 
          />
        </ListItem>
      </List>
    </div>
  )
}


{/* <Grid container>
  <Grid item xs={12}>
    <img src={Logo} alt="CA Fire Tracker" width={100} height={100}/>
    <h2>California Fire Tracker</h2>
  </Grid>
  <Grid container item xs={12}>
    <Grid item xs={2}>
      <MenuItem
        title="Dashboard"
        to="/"
      />
    </Grid>
    <Grid item xs={2}>
      <MenuItem
        title="Dashboard"
        to="/"
      />
    </Grid>
  </Grid>
</Grid> */}