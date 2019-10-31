import React, {Component} from 'react';
import './styles.css'

class ForecastExtended extends Component {
    render() {
        const {city} = this.props;
        return (
        <div> 
            <h2 className="forecast-title">Pronostico extendido para {city}</h2> 
        </div>);
    }
}

export default ForecastExtended;