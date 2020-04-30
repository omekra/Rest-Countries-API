import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'hsl(0, 0%, 100%)', // Dark Mode Text & Light Mode Elements
      contrastText: 'hsl(200, 15%, 8%)', // Light Mode Text
    },
    grey: {
      50: 'hsl(0, 0%, 98%)', // Light Mode Background
      500: 'hsl(0, 0%, 52%)', // Light Mode Input
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
