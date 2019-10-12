import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';

//stateless component = componente que no tiene estado
const LocationList = ({cities}) => {
    const strToComponents = cities => (
        cities.map(city => (<WeatherLocation key={city} city={city}/>))
    );
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