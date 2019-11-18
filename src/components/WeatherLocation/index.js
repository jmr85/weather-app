import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { PropTypes } from 'prop-types';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';
import transformWeather from './../../services/transformWeather';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

class WeatherLocation extends Component {
    // weatherLocationCont es lo mismo que index.js
    constructor(props){
        super(props);// si o si agregar super() porque si no podria haber errores
        const {city} = props;
        this.state = {
            city,
            data: null,
        };
        console.log("constructor");
    }

//cdm+tab
componentDidMount() {
        console.log("componentDidMount");
        this.handleUpdateClick();
        //componente montó, termino de renderizar
}
//cdup+tab
componentDidUpdate(prevProps, prevState) {
    //componente se actualizó
    console.log("componentDidUpdate");
}
  
    handleUpdateClick = () => {
        const api_weather = getUrlWeatherByCity(this.state.city);
        
        fetch(api_weather).then(resolve =>{
            return resolve.json();
        }).then(data => {
            console.log("Resultado del handleUpdateClick");
           //resultados del servidor
           const newWeather = transformWeather(data);
           console.log(newWeather);
           //debugger;
            this.setState({
                data: newWeather
            });            
        });
        /*console.log("actualizado");
        setState para actualizar el estado, 
        el this.state siempre va en el constructor, es el estado inicial
        this.setState({data: data2});*/
    }
    render(){
        const {onWeatherLocationClick} = this.props;
        console.log("render");
        const { city, data} = this.state; 
        return (
            <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
                <Location city={city}></Location>
                {data ? 
                    <WeatherData data={data}></WeatherData>:
                    <CircularProgress/>
                }               
            </div>
        );    
    }
}
WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
} 

export default WeatherLocation;