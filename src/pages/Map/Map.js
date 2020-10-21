import React, { useState } from 'react';
import { MainLayout } from '../../Layouts/MainLayout/MainLayout';
import { MapInterface } from '../../Components/MapInterface/MapInterface';
import { Filters } from '../../Components/Filters/Filters.js';
import { MapInformation } from '../../Components/MapInformation/MapInformation';

export const Map = () => {

  const [ filterToggles, setToggleFilters ] = useState({
    fireLayer: true,
    incidentLayer: true,
    responseLayer: true,
    hazardLayer: true
  });

  const handleToggleFilter = (id) => {
    console.log(id)

    setToggleFilters({
      ...filterToggles,
      [id]: !filterToggles[id]
    })
  }

  return (
    <MainLayout
      sidebar={
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
            },
            {
              primary: 'Fire Hazard Severity Zone',
              secondary: 'Zones with varying degrees of fire hazard based on factors such as fuel, slope, and fire weather.',
              id: 'hazardLayer',
              checked: filterToggles.hazardLayer,
              color: 'orange'
            }
          ]}
          onToggleFilter={handleToggleFilter}
        />
      }
    >
      <MapInterface 
        filterToggles={filterToggles}
      />
      <MapInformation/>
    </MainLayout>
  )
}