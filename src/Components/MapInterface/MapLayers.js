// import React, { useEffect, useRef } from 'react';
// import { loadModules } from 'esri-loader';

// export const Layers = (props) => {
//   loadModules(["esri/Map", "esri/views/MapView", "esri/layers/KMLLayer", "esri/layers/GeoJSONLayer", "esri/widgets/ScaleBar", "esri/layers/FeatureLayer", "esri/layers/support/LabelClass"], { css: true })
//   .then(([ArcGISMap, Map, MapView, KMLLayer, GeoJSONLayer, ScaleBar, FeatureLayer, LabelClass]) => {
//     const fireLayer = new GeoJSONLayer({
//       // url: "https://opendata.arcgis.com/datasets/5da472c6d27b4b67970acc7b5044c862_0.geojson"
//       url: "data/wildfire.geojson",
//       id: 'fire',
//       opacity: 0.55,
//       renderer: {
//         type: "simple",
//         symbol: {
//           type: "simple-fill",
//           color: "red"
//         }
//       }
//     });

//     return (
//       fireLayer
//     )
//   }
// )}




// loadModules(["esri/Map", "esri/views/MapView", "esri/layers/KMLLayer", "esri/layers/GeoJSONLayer", "esri/widgets/ScaleBar", "esri/layers/FeatureLayer", "esri/layers/support/LabelClass"], { css: true })
// .then(([ArcGISMap, Map, MapView, KMLLayer, GeoJSONLayer, ScaleBar, FeatureLayer, LabelClass]) => {
// //     // Active fires
    // var fireLayer = new GeoJSONLayer({
    //   // url: "https://opendata.arcgis.com/datasets/5da472c6d27b4b67970acc7b5044c862_0.geojson"
    //   url: "data/wildfire.geojson",
    //   id: 'fire',
    //   opacity: 0.55,
    //   renderer: {
    //     type: "simple",
    //     symbol: {
    //       type: "simple-fill",
    //       color: "red"
    //     }
    //   }
    // });

    // const fireLabelClass = { // autocasts as new LabelClass()
    //   symbol: {
    //     type: "text", // autocasts as new TextSymbol()
    //     color: "green",
    //     haloColor: "black",
    //     haloSize: '2px',
    //     font: { // autocast as new Font()
    //       family: "playfair-display",
    //       size: 10,
    //       weight: "bold"
    //     }
    //   },
    //   // labelPlacement: "above-center",
    //   labelExpressionInfo: {
    //     expression: "$feature.IncidentName"
    //   }
    // };

    // // adds fire names to fireLayer
    // fireLayer.labelingInfo = [fireLabelClass];

    // /*
    //   INCIDENTS
    //   ---------------------------------
    //   Useful info in layer: 
    //   - properties."DailyAcres": 11.1
    //   - properties."DiscoveryAcres": 0.1
    //   - properties."FireCause": "Human"
    //   - properties."FireCauseGeneral": "Utilities"
    //   - properties."FireCauseSpecific": "Power Generation/Transmission"
    //   - properties."ModifiedOnDateTime": 1590524946247.0 
    //       - In Epoch time format: https://www.epochconverter.com/
    //   - properties."POOCounty": "San Bernardino"
    //   - properties."FireBehaviorGeneral"
    //       - FireBehaviorGeneral1 2 3 and 4
    //   - properties."PredominantFuelGroup": "Grass-Shrub"  
    //   - properties."PredominantFuelModel": "GS2" 
    //       - Codes for Fuel Models found here: https://www.fs.fed.us/rm/pubs/rmrs_gtr153.pdf
    //       - It would be good to add a description to these codes somewhere for context
    // */
    // var incidentLayer = new GeoJSONLayer({
    //   // url: "https://opendata.arcgis.com/datasets/68637d248eb24d0d853342cba02d4af7_0.geojson"
    //   url: "data/incidents.geojson", // locally stored instead
    //   renderer: {
    //     type: "simple",
    //     symbol: {
    //       type: "simple-marker",
    //       size: 6,
    //       color: "yellow",
    //       outline: {
    //         width: 0.4,
    //         color: "black"
    //       }
    //     }
    //   }
    // });

    // const incidentLabelClass = { // autocasts as new LabelClass()
    //   symbol: {
    //     type: "text", // autocasts as new TextSymbol()
    //     color: "yellow",
    //     haloColor: "black",
    //     haloSize: '1px',
    //     font: { // autocast as new Font()
    //       family: "playfair-display",
    //       size: 8,
    //       weight: "bold"
    //     }
    //   },
    //   // labelPlacement: "above-center",
    //   labelExpressionInfo: {
    //     expression: "$feature.IncidentName"
    //   }
    // };

    // incidentLayer.labelingInfo = [incidentLabelClass];

    // // Responding locations
    // var responseLayer = new FeatureLayer({
    //   url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/Wildfire/FeatureServer/2",
    //   opacity: 0.4,
    // });

//     var smokeLayer = new FeatureLayer({
//       url: "data/hms_smoke20200820.zip"
//     });
//   })


  // export {layers}


  
    