import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
// import IconButton from '@material-ui/core/IconButton';
// import { Icon } from '@material-ui/core';


// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//     maxWidth: 360,
//     backgroundColor: theme.palette.background.paper,
//   },
// }));

export const Filters = (props) => {
  // const classes = useStyles();

  const { onToggleFilter } = props;

  const handleToggleFilter = (id) => {
    onToggleFilter(id)
  }

  return (
    <div>
      <h2>Map Filters:</h2>
      <List>
        {props.layers.map((layer, i) => (
            <ListItem 
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
                />
              </ListItemIcon>
              <ListItemText id={`filter-label-${layer.id}`} primary={layer.display} />

            </ListItem>

        ))}
      </List>
    </div>
    
  );
}