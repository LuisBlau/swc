import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: [
      '"Source Sans Pro"',
    ].join(','),
  }
});

export default darkTheme;