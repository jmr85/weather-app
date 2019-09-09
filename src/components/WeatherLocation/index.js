import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {
    CLOUD, 
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from '../../constants/weathers';
const data = {
    temperature: 6,
    weatherState: SUN,
    humidity: 30,
    wind: '10 m/s',
}
const data2 = {
    temperature: 15,
    weatherState: WINDY,
    humidity: 60,
    wind: '40 m/s',
}
class WeatherLocation extends Component {
    // weatherLocationCont es lo mismo que index.js
    constructor(){
        super();// si o si agregar super() porque si no podria haber errores
        this.state = {
            city: 'Buenos Aires',
            data: data,
        };
    }
    handleUpdateClick = () => {
        console.log("actualizado");
        /*setState para actualizar el estado, 
        el this.state siempre va en el constructor, es el estado inicial*/
        this.setState({city:'Rosario', data: data2});
    }
    render(){
        const { city, data} = this.state; 
        return (
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                <WeatherData data={data}></WeatherData>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );    
    }
}
 

export default WeatherLocation;