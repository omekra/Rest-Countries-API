import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../src/components/Navbar';
import Loading from '../src/components/Countries/Loading';
import CountriesList from '../src/components/Countries/CountriesList';
import { Container } from '@material-ui/core';
import '../src/styles/styles.css';

function App() {
  const url = 'https://restcountries.eu/rest/v2/all';
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [result, setResult] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(url);
        setData(res.data);
        setFiltered(res.data);
      } catch (err) {
        throw Error(err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const getResult = () => {
      const results = filtered.filter((res) =>
        res.name.toLowerCase().includes(result.trim())
      );
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
        {!data.length ? (
          <Loading />
        ) : (
          <CountriesList data={data} onChange={onChange} />
        )}
      </Container>
    </div>
  );
}

export default App;
