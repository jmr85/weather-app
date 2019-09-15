import React from 'react';
import './App.css';
import LocationList from './components/LocationList';
const cities = [
  'Buenos Aires,ar',
  'Bogota,col',
  'Miami,us',
  'Barcelona,es',
  'Lima,pe',
  'London,uk',

];
function App() {
  return (
    <div className="App">
     <LocationList cities={cities}></LocationList>  
    </div>
  );
}

export default App;
