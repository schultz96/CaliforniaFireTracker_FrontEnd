import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { loadModules } from 'esri-loader';
import './MapInterface.css';

let fireLayer;
let incidentLayer;
let responseLayer;

export const MapInterface = (props) => {
  const mapRef = useRef();

  // set visibility based on filters
  if (fireLayer) fireLayer.visible = props.filterToggles.fireLayer;
  if (incidentLayer) incidentLayer.visible = props.filterToggles.incidentLayer;
  if (responseLayer) responseLayer.visible = props.filterToggles.responseLayer;

  useEffect(
    () => {
      // lazy load the required ArcGIS API for JavaScript modules and CSS
      loadModules(['esri/Map', 'esri/views/MapView', "esri/layers/GeoJSONLayer", "esri/layers/FeatureLayer"], { css: true })
      .then(([ArcGISMap, MapView, GeoJSONLayer, FeatureLayer]) => {

        if (!fireLayer) {
          fireLayer = new GeoJSONLayer({
            // url: "https://opendata.arcgis.com/datasets/5da472c6d27b4b67970acc7b5044c862_0.geojson"
            url: "data/wildfire.geojson",
            id: 'fireLayer',
            opacity: 0.55,
            renderer: {
              type: "simple",
              symbol: {
                type: "simple-fill",
                color: "red"
              }
            }
          });
          // adds fire names to fireLayer
          fireLayer.labelingInfo = [{ // autocasts as new LabelClass()
            symbol: {
              type: "text", // autocasts as new TextSymbol()
              color: "red",
              haloColor: "black",
              haloSize: '2px',
              font: { // autocast as new Font()
                family: "playfair-display",
                size: 10,
                weight: "bold"
              }
            },
            // labelPlacement: "above-center",
            labelExpressionInfo: {
              expression: "$feature.IncidentName"
            }
          }];
        }

        /*
          INCIDENTS
          ---------------------------------
          Useful info in layer: 
          - properties."DailyAcres": 11.1
          - properties."DiscoveryAcres": 0.1
          - properties."FireCause": "Human"
          - properties."FireCauseGeneral": "Utilities"
          - properties."FireCauseSpecific": "Power Generation/Transmission"
          - properties."ModifiedOnDateTime": 1590524946247.0 
              - In Epoch time format: https://www.epochconverter.com/
          - properties."POOCounty": "San Bernardino"
          - properties."FireBehaviorGeneral"
              - FireBehaviorGeneral1 2 3 and 4
          - properties."PredominantFuelGroup": "Grass-Shrub"  
          - properties."PredominantFuelModel": "GS2" 
              - Codes for Fuel Models found here: https://www.fs.fed.us/rm/pubs/rmrs_gtr153.pdf
              - It would be good to add a description to these codes somewhere for context
        */
        if (!incidentLayer) {
          incidentLayer = new GeoJSONLayer({
            // url: "https://opendata.arcgis.com/datasets/68637d248eb24d0d853342cba02d4af7_0.geojson"
            url: "data/incidents.geojson", // locally stored instead
            id: 'incidentLayer',
            renderer: {
              type: "simple",
              symbol: {
                type: "simple-marker",
                size: 6,
                color: "yellow",
                outline: {
                  width: 0.4,
                  color: "black"
                },
              }
            },
          });
          
          incidentLayer.labelingInfo = [{ // autocasts as new LabelClass()
            symbol: {
              type: "text", // autocasts as new TextSymbol()
              color: "yellow",
              haloColor: "black",
              haloSize: '1px',
              font: { // autocast as new Font()
                family: "playfair-display",
                size: 10,
                weight: "bold"
              },
            },
            minScale: 300000,
            // labelPlacement: "above-center",
            labelExpressionInfo: {
              expression: "$feature.IncidentName"
            }
          }];
        }
        
        // Responding locations
        if (!responseLayer) {
          responseLayer = new FeatureLayer({
            url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/Wildfire/FeatureServer/2",
            id: 'responseLayer',
            opacity: 0.4,
          });
        }
        

        const map = new ArcGISMap({
          basemap: 'topo-vector',
          layers: [fireLayer, incidentLayer, responseLayer]
        });

        // load the map view at the ref's DOM node
        const view = new MapView({
          container: mapRef.current,
          map: map,
          center: [-118, 34],
          zoom: 8
        }); 

        
        

        return () => {
          if (view) {
            // destroy the map view
            view.container = null;
          }
        };
      });
    },
    [] // dependencies
  );

  return <div className="webmap" ref={mapRef} />;
};