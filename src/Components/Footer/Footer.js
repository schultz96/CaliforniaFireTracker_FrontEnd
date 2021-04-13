import React from 'react';
import { Grid } from '@material-ui/core';
import Logo2 from './logo2.png';
import './Footer.css';

export const Footer = () => {

    return (
        <Grid item xs={12} className="footer-container">
            <img src={Logo2} width='100' height='150' alt="CA Fire Tracker"/>
            <h2>California Fire Tracker</h2>
            <p>Created by Kenny Schultz</p>
            <p>View more of my work on my website below</p>
            <p>www.kennyschultz.com</p>
        </Grid>
    )
}