import React from 'react';
import { Divider } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './MapInformation.css';

export const MapInformation = () => {

    return (
        <div>
            <h2>Map Information</h2>
            <p>All layers are updated every 4th hour (12:00am, 4:00am, 8:00am...) PST time.</p>
            <Divider/>
            <h2>Detailed layer information</h2>
            <div className="accordion-container">
                <Accordion className="accordion">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon className="expand-icon"/>}
                        aria-controls="Active Fires"
                    >
                        <h4>Active Fires</h4>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p>Displays active wildfire perimeters established and made public by the National Interagency Fire Center.</p>
                    </AccordionDetails>
                </Accordion>
                <Accordion className="accordion">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon className="expand-icon"/>}
                        aria-controls="Recent Incidents"
                    >
                        <h4>Recent Incidents</h4>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div>
                            <p>The Recent Incidents layer shows all officially recorded fire-related incidents in the current year and made public by the Integrated Reporting of Wildland Fire Information.</p>
                            <p>Click on a specific incident (yellow dot on the map) to view it's specific details. Below is an explanation of each detail recorded:</p>
                            <ul>
                                <li>Description: <em>Short description provided by the local fire agency who recorded the incident. Usually contains the starting location of the incident.</em></li>
                                <li>Daily Acres Burned: <em>Total amount of acres burned by a specific incident, updated daily.</em></li>
                                <li>Fire Cause General: <em>General cause of the incident.</em></li>
                                <li>Fire Cause Specific: <em>More specific cause of the incident.</em></li>
                                <li>Fire Behavior: <em>Describes the type of fire in the incident (smoldering, creeping, spotting, tree torching, etc.).</em></li>
                                <li>Predominant Fuel Group: <em>More specific cause of the incident.</em></li>
                                <li>Predominant Fuel Modal: <em>Provides a code that identifies the fuel source of the fire (trees, brush, urban, etc.).Official fuel classification codes / modals. A detailed explanation and breakdown of each code can be found starting on page 17 <a href="https://www.fs.fed.us/rm/pubs/rmrs_gtr153.pdf">here</a></em></li>
                            </ul>
                            <p>Note: It is up to the local fire agency to provide & update detailed information for each incident. Often times, fields are left blank for smaller incidents.</p>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion className="accordion">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon className="expand-icon"/>}
                        aria-controls="Response Zones"
                    >
                        <h4>Response Zones</h4>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p>Contains information detailing wildfire response events and suppression efforts. This layer comes and goes based on whether or not response zones are actively updated & recorded by the National Interagency Fire Center.</p>
                    </AccordionDetails>
                </Accordion>
                <Accordion className="accordion">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon className="expand-icon"/>}
                        aria-controls="Fire Hazard Severity Zone"
                    >
                        <h4>Fire Hazard Severity Zone</h4>
                    </AccordionSummary>
                    <AccordionDetails>
                    <p>Designated areas that are at high-risk based on factors such as fuel, slope, and fire weather. Provided by CALFIRE.</p>
                    </AccordionDetails>
                </Accordion>
            </div>
            
        </div>
    )   
}