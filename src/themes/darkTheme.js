import { createTheme } from '@mui/material/styles';
import components from './components';
import palette from './palette';
import typography from './typography';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    ...palette.dark, // Spread dark palette settings
  },
  typography,
  components,
});

export default darkTheme;
