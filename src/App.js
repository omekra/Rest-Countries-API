import React from 'react';
import Navbar from './components/Navbar';
// import SearchCountry from './components/SearchCountry';
import CountriesList from './components/CountriesList';
import { Container } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="lg">
        {/* <SearchCountry /> */}
        <CountriesList />
      </Container>
    </div>
  );
}

export default App;
