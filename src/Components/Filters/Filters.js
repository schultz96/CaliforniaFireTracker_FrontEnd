import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import './Filters.css';

export const Filters = (props) => {

  const { onToggleFilter } = props;

  const handleToggleFilter = (id) => {
    onToggleFilter(id)
  }

  return (
    <div>
      <h2>Map Filters:</h2>
      <List className="filters-list">
        {props.layers.map((layer, i) => (
            <ListItem 
              className="filter-item"
              key={layer.id}
              button
              onClick={(e) => {
                  handleToggleFilter(layer.id)
                }  
              }
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={layer.checked}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': `filter-label-${layer.id}`}}
                  style={{
                    color: layer.color || 'white'
                  }}
                />
              </ListItemIcon>
              <ListItemText 
                className="filter-item-text"
                id={`filter-label-${layer.id}`} 
                primary={layer.primary || 'Unknown layer'} 
                secondary={layer.secondary || ''}
              />

            </ListItem>

        ))}
      </List>
    </div>
    
  );
}