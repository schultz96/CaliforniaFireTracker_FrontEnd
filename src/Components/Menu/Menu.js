import React from 'react';
import { MenuItem } from './MenuItem';
import './Menu.css';

export const Menu = () => {
  return (
    <div>
      <MenuItem
        title="Dashboard"
        to="/"
      />
      <MenuItem
        title="Management"
        relativeTo="/management"
      >
        <MenuItem
          title="Users"
          to="/management/users"
        />
        <MenuItem
          title="Reservations"
          to="/management/reservations"
        />
      </MenuItem>
    </div>
  )
}