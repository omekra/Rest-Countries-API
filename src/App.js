import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import { Container } from '@material-ui/core';

function App() {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [result, setResult] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://restcountries.eu/rest/v2/all');
        setData(res.data);
        setFiltered(res.data);
      } catch (err) {
        throw Error(err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const getResult = async () => {
      const results = await filtered.filter((res) =>
        res.name.toLowerCase().includes(result.trim())
      );
      console.log(results);
      setData(results);
    };
    getResult();
  }, [result, filtered]);

  const onChange = (e) => {
    setResult(e.target.value);
  };

  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="lg">
        <CountriesList
          data={data}
          filtered={filtered}
          result={result}
          onChange={onChange}
        />
      </Container>
    </div>
  );
}

export default App;
