const fs = require('fs');
const axios = require('axios');

try {
    axios({
        method: 'get',
        url: 'https://opendata.arcgis.com/datasets/5da472c6d27b4b67970acc7b5044c862_0.geojson',
        responseType: 'stream'
    })
        .then(function (response) {
            response.data.pipe(fs.createWriteStream('./public/data/wildfire.geojson'))
            console.log('saved file')
        });
}
catch (err) {
    console.log(err)
}