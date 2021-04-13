import React from 'react';
import { Grid } from '@material-ui/core';
import Logo2 from './logo2.png';
import './Footer.css';

export const Footer = () => {

    return (
        <Grid item xs={12} className="footer-container">
            <img src={Logo2} width='100' height='150' alt="CA Fire Tracker"/>
            <h2>California Fire Tracker</h2>
            <p>Created by Kenny Schultz during and near the 2020 Eldorado Fire in Southern California</p>
            <p>View more of my work at <a href="https://www.kennyschultz.com" target="_blank">kennyschultz.com</a></p>
        </Grid>
    )
}
