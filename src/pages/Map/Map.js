import React, { useState } from 'react';
import { MapInterface } from '../../Components/MapInterface/MapInterface';
import { Filters } from '../../Components/Filters/Filters.js';
import { AppMenu } from '../../Components/Menu/Menu';
import { Grid } from '@material-ui/core';

export const Map = () => {

  // const [ fireLayerToggle, toggleFireLayer ] = useState(true);
  // const [ incidentLayerToggle, toggleIncidentLayer ] = useState(true);
  // const [ responseLayerToggle, toggleResponseLayer ] = useState(true);
  const [ filterToggles, setToggleFilters ] = useState({
    fireLayer: true,
    incidentLayer: true,
    responseLayer: true,
  });

  const handleToggleFilter = (id) => {
    console.log(id)

    setToggleFilters({
      ...filterToggles,
      [id]: !filterToggles[id]
    })

    // if (id === 'fireLayer') {
    //   toggleFireLayer(!fireLayerToggle);
    // }
    // if (id === 'incidentLayer') {
    //   toggleIncidentLayer(!incidentLayerToggle);
    // }
    // if (id === 'responseLayer') {
    //   toggleResponseLayer(!responseLayerToggle);
    // }
  }

  return (
    <Grid container style={{ padding: 20 }} spacing={3}>
      <Grid item xs={12} md={12} lg={3} style={{ padding: 20 }}>
        <AppMenu />
        <Filters
          layers={[
            {
              primary: 'Active Fires',
              secondary: `Current active wildfires`,
              id: 'fireLayer',
              checked: filterToggles.fireLayer,
              color: 'red'
            },
            {
              primary: 'Recent Incidents',
              secondary: 'Contains all fire-related incidents. Click for specific details such as cause & fuel source',
              id: 'incidentLayer',
              checked: filterToggles.incidentLayer,
              color: 'yellow'
            },
            {
              primary: 'Response Zones',
              secondary: 'Visualizes wildfire response events and suppression efforts',
              id: 'responseLayer',
              checked: filterToggles.responseLayer,
              color: '#00CDCD'
            }
          ]}
          onToggleFilter={handleToggleFilter}
        />
      </Grid>
      <Grid item xs={12} md={12} lg={9}>
        <MapInterface 
          filterToggles={filterToggles}
          // fireLayerToggle={fireLayerToggle}
          // incidentLayerToggle={incidentLayerToggle}
          // responseLayerToggle={responseLayerToggle}
        />
      </Grid>
    </Grid> 
  )
}