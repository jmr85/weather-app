import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';

const strToComponents = cities => (
    cities.map(city => <WeatherLocation city={city}/>)
);
//stateless component = componente que no tiene estado
const LocationList = ({cities}) => {
    console.log(cities);
    return(
            <div>
                {strToComponents(cities)}
            </div>         
    );   
};
LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
} 
export default LocationList;