import React from 'react';
import SweatherIcons from 'react-weathericons';

const icons = {
    sunny:"day-sunny",
    fog: "day-fog"
};
const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    if (icon){
        return <SweatherIcons name={icon} size="2x"/>
    }else{
        return <SweatherIcons name={"day-sunny"} size="2x"/>
    }
    
}
const WeatherTemparature = ({temperature, weatherState}) =>(
    <div>              
        {
            getWeatherIcon(weatherState)
        }
        <span>{`${temperature} C°`}</span>       
    </div>
);

export default WeatherTemparature;