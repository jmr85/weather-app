import React, {Component} from 'react';

class ForecastExtended extends Component {
    render() {
        const {city} = this.props;
        return (<div> Pronostico extendido para {city} </div>);
    }
}

export default ForecastExtended;