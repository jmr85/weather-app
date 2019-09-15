import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcons from 'react-weathericons';
import './styles.css';
import {
    CLOUD, 
    SUN,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE,
} from '../../../constants/weathers';
const icons = {
    [CLOUD]: "cloud",
    [SUN]: "day-sunny",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [THUNDER]: "day-thunderstore",
    [DRIZZLE]: "DAY-showers",
};

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    const sizeIcon = "4x";
    if (icon){
        return <WeatherIcons className="wicon" name={icon} size={sizeIcon}/>
    }else{
        return <WeatherIcons className="wicon" name={"day-sunny"} size={sizeIcon}/>
    }
    
}
const WeatherTemparature = ({temperature, weatherState}) =>(
    <div className="weatherTemperatureCont">              
        {
            getWeatherIcon(weatherState)
        }
        <span className="temperature">{`${temperature} `}</span>  
        <span className="temperatureType">{`C°`}</span> 
             
    </div>
);
//valida propiedades del componente
WeatherTemparature.propTypes = {
    // validacion de prpiedades {temperature, weatherState}
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTemparature;