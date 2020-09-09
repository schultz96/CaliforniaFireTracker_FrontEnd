import React, { useState } from 'react';
import { MapInterface } from '../../Components/MapInterface/MapInterface';
import { Filters } from '../../Components/Filters/Filters.js';
import { Menu } from '../../Components/Menu/Menu';
import { Grid } from '@material-ui/core';

export const Map = () => {

  const [ fireLayerToggle, toggleFireLayer ] = useState(true);
  const [ incidentLayerToggle, toggleIncidentLayer ] = useState(true);
  const [ responseLayerToggle, toggleResponseLayer ] = useState(true);

  const handleToggleFilter = (id) => {
    console.log(id)
    if (id === 'fireLayer') {
      toggleFireLayer(!fireLayerToggle);
    }
    if (id === 'incidentLayer') {
      toggleIncidentLayer(!incidentLayerToggle);
    }
    if (id === 'responseLayer') {
      toggleResponseLayer(!responseLayerToggle);
    }
  }

  return (
    <Grid container style={{ padding: 20 }} spacing={3}>
      <Grid item xs={12} md={12} lg={3} style={{ padding: 20 }}>
        <Menu />
        <Filters
          layers={[
            {
              primary: 'Active Fires',
              secondary: `Current active wildfires`,
              id: 'fireLayer',
              checked: fireLayerToggle,
              color: 'red'
            },
            {
              primary: 'Recent Incidents',
              secondary: 'Contains all fire-related incidents. Click for specific details such as cause & fuel source',
              id: 'incidentLayer',
              checked: incidentLayerToggle,
              color: 'yellow'
            },
            {
              primary: 'Response Zones',
              secondary: 'Visualizes wildfire response events and suppression efforts',
              id: 'responseLayer',
              checked: responseLayerToggle,
              color: '#00CDCD'
            }
          ]}
          onToggleFilter={handleToggleFilter}
        />
      </Grid>
      <Grid item xs={12} md={12} lg={9}>
        <MapInterface 
          fireLayerToggle={fireLayerToggle}
          incidentLayerToggle={incidentLayerToggle}
          responseLayerToggle={responseLayerToggle}
        />
      </Grid>
      
    </Grid>
    
  )
}