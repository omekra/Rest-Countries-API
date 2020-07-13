import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import Loading from './components/Loading';
import CountriesList from '../src/components/Countries/CountriesList';
import CountryDetails from '../src/components/Countries/CountryDetails';
import {
  Container,
  Paper,
  AppBar,
  Toolbar,
  Typography,
  Button,
} from '@material-ui/core';
import '../src/styles/styles.css';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    marginBottom: 45,
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  const url = 'https://restcountries.eu/rest/v2';
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [result, setResult] = useState('');
  const [darkMode, setDarkMode] = useState(false);

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

  const lightTheme = createMuiTheme({
    palette: {
      background: { paper: 'hsl(0, 0%, 98%)' },
      primary: {
        main: 'hsl(200, 15%, 8%)',
        contrastText: 'hsl(200, 15%, 8%)',
      },
      grey: {
        50: 'hsl(0, 0%, 98%)',
        500: 'hsl(0, 0%, 52%)',
      },
    },
    typography: {
      fontFamily: "'Nunito Sans', sans-serif",
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightMedium: 600,
      fontWeightBold: 800,
    },
  });

  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
      background: {
        paper: 'hsl(207, 26%, 17%)',
      },
    },
  });

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <div className="App">
        <Paper elevation={0}>
          {/* <Navbar /> */}
          <div className={classes.root}>
            <AppBar position="static" color="primary">
              <Paper square>
                <Toolbar>
                  <Typography variant="h6" className={classes.title}>
                    Where in the world?
                  </Typography>
                  <Button
                    color="inherit"
                    onClick={() => setDarkMode(!darkMode)}>
                    Dark Mode
                  </Button>
                </Toolbar>
              </Paper>
            </AppBar>
          </div>
          <Container maxWidth="lg" height="auto">
            {!data.length ? (
              <Loading />
            ) : (
              <Router>
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={() => (
                      <CountriesList
                        data={data}
                        onChange={onChange}
                        url={url}
                      />
                    )}
                  />
                  <Route
                    exact
                    path="/country-details"
                    component={CountryDetails}
                  />
                </Switch>
              </Router>
            )}
          </Container>
        </Paper>
      </div>
    </ThemeProvider>
  );
}

export default App;
