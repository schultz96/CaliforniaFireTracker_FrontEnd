import React, { useState } from 'react';
import { MainLayout } from '../../Layouts/MainLayout/MainLayout';
import { SourceItem } from '../../Components/SourceItem/SourceItem';

export const Sources = () => {

  return (
    <MainLayout
      sidebar={[]}
    >
      <h1>Sources</h1>
      <p>Listed below are the dataset sources for each of the layers used on this site. The map is powered by ArcGIS which can be found <a href="https://developers.arcgis.com/javascript/">here</a></p>
      <SourceItem
        layer='Active Fires'
        organization='National Interagency Fire Center'
        description='Displays wildfire perimeters made public by the NIFS.'
        link='https://data-nifc.opendata.arcgis.com/datasets/wildfire-perimeters'
      />
      <SourceItem
        layer='Recent Incidents'
        organization='Integrated Reporting of Wildland Fire Information'
        description='All wildland fire incidents from the IRWIN (Integrated Reporting of Wildland Fire Information) integration service that meet the following criteria:
        IRWIN records, categorized as valid Wildfire (WF), Prescribed Fire (RX), or Incident Complex (CX) records, that have not been declared contained, controlled, or out, have not had fire report records completed (certified), and are not "quarantined" in IRWIN due to potential conflicts with other records.'
        link='https://data-nifc.opendata.arcgis.com/datasets/incident-3'
      />
      <SourceItem
        layer='Response Zones'
        organization='National Interagency Fire Center'
        description='Contains information detailing wildfire response events and suppression efforts.'
        link='https://sampleserver6.arcgisonline.com/arcgis/rest/services/Wildfire/FeatureServer/2'
      />
      <SourceItem
        layer='Fire Hazard Severity Zone'
        organization='CALFIRE'
        description='Layer definition: A Fire Hazard Severity Zone (FHSZ) is a mapped area that designates zones (based on factors such as fuel, slope, and fire weather) with varying degrees of fire hazard (i.e., moderate, high, and very high). FHSZ maps evaluate wildfire hazards, which are physical conditions that create a likelihood that an area will burn over a 30- to 50-year period. They do not take into account modifications such as fuel reduction efforts.'
        link='https://gis.data.ca.gov/datasets/789d5286736248f69c4515c04f58f414'
      />
    </MainLayout>
  )

}