import React from 'react';
import { Grid } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MapIcon from '@material-ui/icons/Map';
import ReceiptIcon from '@material-ui/icons/Receipt';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import './Menu.css';
import Logo from './logo.png';

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export const AppMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <div>
      <div>
        <div style={{position: 'relative', width: '100%', height: '100px'}}>
          <img src={Logo} height={100} width={100} style={{position : 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}/>
        </div>
        <div style={{textAlign: 'center'}}>
          <h1>California Fire Tracker</h1>
        </div>
        <div>
          <div style={{textAlign: 'center'}}>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
              <MenuIcon 
                className="icon"
                fontSize="large"
              />
            </Button>
          </div>
          <Menu
            color="#2E2E2E"
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <MenuItem onClick={handleClose}>
              <MapIcon 
                className="menu-icon"
              />
              <Link to='/'>
                Dashboard
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ReceiptIcon 
                className="menu-icon"
              />
              <Link to='/sources'>
                Sources
              </Link>
            </MenuItem>
          </Menu>
        </div>
      </div>
    </div> 
  )
}


{/* <div>
  <div style={{position: 'relative', width: '100%', height: '100px'}}>
    <img src={Logo} height={100} width={100} style={{position : 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}/>
  </div>
  <div style={{textAlign: 'center'}}>
    <h1>California Fire Tracker</h1>
  </div>
  <div>
    <h2>Menu: </h2>
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
</div> */}



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