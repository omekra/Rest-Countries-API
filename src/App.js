import React from 'react';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import { Container } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="lg">
        <CountriesList />
      </Container>
    </div>
  );
}

export default App;
