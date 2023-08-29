import { createTheme } from '@mui/material/styles';

export const logoutButtonTheme = createTheme({
  palette: {
    primary: {
      light: '#d9740f',
      main: '#d90f0f',
      dark: '#d90f74',
      contrastText: '#fff',
    }
  }
});

export const loginButtonTheme = createTheme({
  palette: {
    primary: {
      light: '#6dc584',
      main: '#1dac50',
      dark: '#32ac1d',
      contrastText: '#fff',
    }
  }
});