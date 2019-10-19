import React, {Component} from 'react';
import { Grid, Col, Row } from 'react-flexbox-grid';
import LocationList from './components/LocationList';
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
  handleSelectedLocation = city => {
    console.log(`handleSelectedLocation: ${city}`);
  }
  render(){
    return (
      <Grid>
        <Row>
          Titulo
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
              <div className="details"></div>
          </Col>
        </Row>   
      </Grid>
    );
  }
  
}

export default App;
