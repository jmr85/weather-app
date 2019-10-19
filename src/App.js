import React, {Component} from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Col, Row } from 'react-flexbox-grid';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import './App.css';


const cities = [
  'Buenos Aires,ar',
  'Bogota,col',
  'Miami,us',
  'Barcelona,es',
  'Lima,pe',
  'London,uk',
];
class App extends Component {
  constructor(){
    super();
    this.state = { city: 'Nueva Ciudad' }
  }

  handleSelectedLocation = city => {
    this.setState({city});
    console.log(`handleSelectedLocation: ${city}`);
  }
  render(){
    const {city} = this.state;
    return (
      <MuiThemeProvider>
        <Grid>
          <Row>
            <AppBar position='sticky'>
              <Toolbar>
                <Typography variant='title' color='inherit'>
                  Weather App
                </Typography>
              </Toolbar>
            </AppBar>  
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationList 
                cities={cities}
                onSelectedLocation={
                  this.handleSelectedLocation
                }>
              </LocationList>
            </Col>
            <Col xs={12} md={6}>
              <Paper elevation={4}>
                <div className="details">
                    <ForecastExtended city={city}>
                    </ForecastExtended>
                </div>
              </Paper>
            </Col>
          </Row>   
        </Grid>
      </MuiThemeProvider>  
    );
  }
  
}

export default App;
