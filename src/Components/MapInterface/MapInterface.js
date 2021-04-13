import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { loadModules } from 'esri-loader';
import './MapInterface.css';
import { GraphicEqSharp } from '@material-ui/icons';

let fireLayer;
let incidentLayer;
let responseLayer;
let hazardLayer;

export const MapInterface = (props) => {
  const mapRef = useRef();

  // set visibility based on filters
  if (fireLayer) fireLayer.visible = props.filterToggles.fireLayer;
  if (incidentLayer) incidentLayer.visible = props.filterToggles.incidentLayer;
  if (responseLayer) responseLayer.visible = props.filterToggles.responseLayer;
  if (hazardLayer) hazardLayer.visible = props.filterToggles.hazardLayer;

  useEffect(
    () => {
      // lazy load the required ArcGIS API for JavaScript modules and CSS
      loadModules(['esri/Map', 'esri/views/MapView', "esri/layers/GeoJSONLayer", "esri/layers/FeatureLayer"], { css: true })
      .then(([ArcGISMap, MapView, GeoJSONLayer, FeatureLayer]) => {

        if (!fireLayer) {
          fireLayer = new GeoJSONLayer({
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
              expression: `$feature.IncidentName`
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
            minScale: 1, //300000
            // labelPlacement: "above-center",
            labelExpressionInfo: {
              // this is only here temporarily until i can figure out why these properties won't appear in the details box unless they're in this labelExpressionInfo object
              expression: `
                $feature.IncidentName + TextFormatting.NewLine + 
                $feature.IncidentShortDescription + TextFormatting.NewLine +
                $feature.DailyAcres + TextFormatting.NewLine +
                $feature.FireCause + TextFormatting.NewLine +
                $feature.FireCauseSpecific + TextFormatting.NewLine +
                $feature.FireBehaviorGeneral1 + TextFormatting.NewLine +
                $feature.FireBehaviorGeneral2 + TextFormatting.NewLine +
                $feature.FireBehaviorGeneral3 + TextFormatting.NewLine +
                $feature.FireBehaviorGeneral4 + TextFormatting.NewLine +
                $feature.PredominantFuelGroup + TextFormatting.NewLine +
                $feature.PredominantFuelModel + TextFormatting.NewLine +
                $feature.ModifiedOnDateTime
              `
            }
          }];
        }
        
        // Responding locations
        if (!responseLayer) {
          responseLayer = new GeoJSONLayer({
            url: "data/response.geojson",
            id: 'responseLayer',
            opacity: 0.4,
            renderer: {
              type: "simple",
              symbol: {
                type: "simple-fill",
                color: "teal"
              }
            }
          });
        }

        // hazardous zones with high likelyhood of fire
        if (!hazardLayer) {
          hazardLayer = new GeoJSONLayer({
            url: 'data/hazard-areas.geojson',
            id: 'hazardLayer',
            opacity: 0.4,
            renderer: {
              type: "simple",
              symbol: {
                type: "simple-fill",
                color: "orange"
              }
            }
          })
        }
        

        const map = new ArcGISMap({
          basemap: 'topo-vector',
          layers: [fireLayer, incidentLayer, responseLayer, hazardLayer]
        });

        // load the map view at the ref's DOM node
        const view = new MapView({
          container: mapRef.current,
          map: map,
          center: [-118, 34],
          zoom: 8,
          popup: {
            actions: [],
            dockEnabled: true,
            dockOptions: {
              buttonEnabled: true,
              breakpoint: false,
            },
            collapseEnabled: false
          }
        }); 

        // Listen for when the scene view is ready
        view.when(function () {
          // It's necessary to overwrite the default click for the popup
          // behavior in order to display your own popup
          view.popup.autoOpenEnabled = false;
        });


        // Get the screen point from the view's click event
        view.on("click", function (event) {
          var screenPoint = {
            x: event.x,
            y: event.y
          };

          // Search for graphics at the clicked location
          view.hitTest(screenPoint).then(function (response) {
            if (response.results.length) {
              // console.log(response.results)
              var fireLayerResult = response.results.find(fireLayerResult => fireLayerResult.graphic.layer === fireLayer);
              var incidentLayerResult = response.results.find(incidentLayerResult => incidentLayerResult.graphic.layer === incidentLayer);

              if (fireLayerResult) {
                let graphic = fireLayerResult.graphic;
                console.log(graphic.attributes);
                // let modifiedDate = new Date(graphic.attributes.CreateDate).toISOString().slice(0, 19).replace(/-/g, "/").replace("T", " ")

                view.popup.open({
                  // Set the popup's title to the coordinates of the location
                  title: `Fire Name: ${graphic.attributes.IncidentName || ''}`,
                  content: `
                    Description: ${graphic.attributes.IncidentShortDescription || ''} <br>
                    Daily Acres Burned: ${graphic.attributes.DailyAcres || ''} <br>
                    Last Modified: ${graphic.attributes.CreateDate || ''}
                  `
                });
              };

              if (incidentLayerResult) {
                let graphic = incidentLayerResult.graphic;
                console.log(graphic.attributes);
                let modifiedDate = new Date(graphic.attributes.ModifiedOnDateTime).toISOString().slice(0, 19).replace(/-/g, "/").replace("T", " ")

                view.popup.open({
                  // Set the popup's title to the coordinates of the location
                  title: `Incident: ${graphic.attributes.IncidentName || ''}`,
                  content: `
                    Description: ${graphic.attributes.IncidentShortDescription || ''} <br>
                    Daily Acres Burned: ${graphic.attributes.DailyAcres || ''} <br>
                    Fire General Cause: ${graphic.attributes.FireCause || ''} <br>
                    Fire Specific Cause: ${graphic.attributes.FireCauseSpecific || ''} <br>
                    Fire Behavior: 
                    ${graphic.attributes.FireBehaviorGeneral1 ? graphic.attributes.FireBehaviorGeneral1 : ''}
                    ${graphic.attributes.FireBehaviorGeneral2 ? ', ' + graphic.attributes.FireBehaviorGeneral2 : ''}
                    ${graphic.attributes.FireBehaviorGeneral3 ? ', ' + graphic.attributes.FireBehaviorGeneral3 : ''}
                    ${graphic.attributes.FireBehaviorGeneral4 ? ', ' + graphic.attributes.FireBehaviorGeneral4 : ''} 
                    <br>
                    PredominantFuelGroup: ${graphic.attributes.PredominantFuelGroup || ''} <br>
                    PredominantFuelModel: ${graphic.attributes.PredominantFuelModel || ''} <br>
                    Last Modified: ${modifiedDate || ''}
                  `
                });
              };
            }
          });
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