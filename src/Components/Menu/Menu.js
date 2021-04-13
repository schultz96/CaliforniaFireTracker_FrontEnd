import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import MapIcon from '@material-ui/icons/Map';
import ReceiptIcon from '@material-ui/icons/Receipt';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import './Menu.css';
import Logo from './cfa-logo.png';

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
          <img src={Logo} height={125} width={325} style={{position : 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}/>
        </div>
        {/*<div style={{textAlign: 'center', paddingTop: 25}}>*/}
        {/*  /!* <h1>California Fire Tracker</h1> *!/*/}
        {/*</div>*/}
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
            <Link to='/'>
              <MenuItem onClick={handleClose}>
                  <MapIcon
                    className="menu-icon"
                  />
                  Map
              </MenuItem>
            </Link>
            <Link to='/sources'>
              <MenuItem onClick={handleClose}>
                  <ReceiptIcon
                    className="menu-icon"
                  />
                  Sources
              </MenuItem>
            </Link>
          </Menu>
        </div>
      </div>
    </div>
  )
}
