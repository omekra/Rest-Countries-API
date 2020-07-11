import { createMuiTheme } from '@material-ui/core/styles';

export const lightTheme = createMuiTheme({
  palette: {
    primary: {
      main: 'hsl(200, 15%, 8%)', // Dark Mode Text & Light Mode Elements
    },
    grey: {
      50: 'hsl(0, 0%, 98%)', // Light Mode Background
      500: 'hsl(0, 0%, 52%)', // Light Mode Input
    },
  },
  typography: {
    fontFamily: 'Nunito Sans, sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightMedium: 600,
    fontWeightBold: 800,
  },
});

export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      paper: '#fff',
      default: '#fafafa',
    },
    primary: {
      main: 'hsl(0, 0%, 100%)', // Dark Mode Text
    },
  },
});
