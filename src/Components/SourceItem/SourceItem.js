import React from 'react';
import Button from '@material-ui/core/Button';
import './SourceItem.css';

export const SourceItem = (props) => {
    return (
        <div className="source-item">
            <h3 className="source-title">Layer: {props.layer}</h3>
            <h5 className="source-organization">{props.organization}</h5>
            <p className="source-description">{props.description}</p>
            <Button 
                variant="contained"
                color="primary"
                href={props.link}
            >
                Go to source
            </Button>
        </div>
    )
}