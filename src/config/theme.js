import { createTheme } from '@mui/material/styles';


export const themeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#F6831F',
      contrastText: 'rgba(255,255,255,0.87)',
    },
    secondary: {
      main: 'rgba(0,0,0,0.87)',
    },
  },
  typography: {
    fontFamily: 'Nunito, sans-serif',
  }
};


const theme = createTheme(themeOptions);

export default theme;