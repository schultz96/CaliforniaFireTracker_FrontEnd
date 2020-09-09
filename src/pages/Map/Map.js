import React, { useState } from 'react';
import { MapInterface } from '../../Components/MapInterface/MapInterface';
import { Filters } from '../../Components/Filters/Filters.js';
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
    <Grid container style={{ padding: 20 }}>
      <Grid item xs={2}>
        <Filters
          layers={[
            {
              display: 'Active Fires',
              id: 'fireLayer',
              checked: fireLayerToggle
            },
            {
              display: 'Recent Incidents',
              id: 'incidentLayer',
              checked: incidentLayerToggle
            },
            {
              display: 'Response Zones',
              id: 'responseLayer',
              checked: responseLayerToggle
            }
          ]}
          onToggleFilter={handleToggleFilter}
        />
      </Grid>
      <Grid item xs={10}>
        <MapInterface 
          fireLayerToggle={fireLayerToggle}
          incidentLayerToggle={incidentLayerToggle}
          responseLayerToggle={responseLayerToggle}
        />
      </Grid>
      
    </Grid>
    
  )
}