import { createTheme } from '@mui/material/styles';
import components from './components';
import palette from './palette';
import typography from './typography';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    ...palette.light, // Spread light palette settings
  },
  typography,
  components,
});

export default lightTheme;
