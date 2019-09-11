import React, { Component } from 'react';
import transformWeather from './../../services/transformWeather';
import { api_weather } from './../../constants/api_url';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import  {
    SUN,
} from './../../constants/weathers';


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
        console.log("constructor");
    }

    
//cdm+tab
componentDidMount() {
        console.log("componentDidMount");
}
//cdup+tab
componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
}
//cwm+tab
componentWillMount() {
    console.log("UNSAFE omponentWillMount");
}
//cwup+tab
componentWillUpdate(nextProps, nextState) {
    console.log("UNSAFE componentWillUpdate");
}
  
    handleUpdateClick = () => {
        fetch(api_weather).then(resolve =>{
            return resolve.json();
        }).then(data => {
           //resultados del servidor
           const newWeather = transformWeather(data);
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
        console.log("render");
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