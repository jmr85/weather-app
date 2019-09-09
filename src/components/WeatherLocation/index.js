import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {  
    SUN,
} from '../../constants/weathers';

const location = "Buenos Aires,ar";
const api_key = "31370e87f95b00644d8e710bf635fadb";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}&units=metric`;

const data = {
    temperature: 6,
    weatherState: SUN,
    humidity: 30,
    wind: '10 m/s',
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
    getWeatherState = weather_data =>{
        return SUN;
    }
    getData = weather_data => {
        const {humidity,temp} = weather_data.main;
        const {speed} = weather_data.wind;
        const weatherState = this.getWeatherState(weather_data);

        const data = {
            humidity,
            temperature: temp,
            weatherState,
            wind: `${speed} m/s`,
        }
        return data;
    }
    handleUpdateClick = () => {
        fetch(api_weather).then(resolve =>{
            return resolve.json();
        }).then(data => {
           //resultados del servidor
           const newWeather = this.getData(data);
           console.log(newWeather);
           debugger;
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