import moment from 'moment';

const transformForecast = data => (
    data.list.filter(item =>(
        moment.unix(item.dt).utc().hour() === 6 ||
        moment.unix(item.dt).utc().hour() === 12 ||
        moment.unix(item.dt).utc().hour() === 18 
    ))
);

export default transformForecast;