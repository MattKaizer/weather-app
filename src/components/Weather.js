import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Weather = ({result}) => {

    const {name, main} = result; 
    if(!name) return null;
    //From Kelvin to centigrades
    const kelvin = 273.15;
    const temperature = parseFloat(main.temp - kelvin, 10).toFixed(2); 
    const maxTemperature = parseFloat(main.temp_max - kelvin, 10).toFixed(2); 
    const minTemperature = parseFloat(main.temp_min - kelvin, 10).toFixed(2); 

    return ( 
        <Fragment>
            <div className="card-panel white col s12">
                <div className="black-text">
                    <h2>El clima en {name} es:</h2>
                    <p className="temperature">
                        {temperature}
                        <span>&#x2103;</span> 
                    </p>
                    <h2>Temperatura máxima:</h2>
                    <p>
                        {maxTemperature}
                        <span>&#x2103;</span> 
                    </p>
                    <h2>Temperatura mínima:</h2>
                    <p>
                        {minTemperature}
                        <span>&#x2103;</span> 
                    </p>
                </div>
            </div>
        </Fragment>
     );
}

Weather.propTypes = {
    result: PropTypes.object.isRequired
}
 
export default Weather;
