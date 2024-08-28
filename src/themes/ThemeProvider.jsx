import {
  CssBaseline,
  ThemeProvider as MUIThemeProvider,
  createTheme,
} from '@mui/material';
import React, { createContext, useContext, useMemo, useState } from 'react';
import darkTheme from './darkTheme';
import lightTheme from './lightTheme';

const ThemeContext = createContext();

const useThemeContext = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('isDarkMode');
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  const theme = useMemo(() => {
    const baseTheme = isDarkMode ? darkTheme : lightTheme;

    return createTheme({
      ...baseTheme,
      components: {
        MuiCssBaseline: {
          styleOverrides: {
            body: {
              fontFamily: baseTheme.typography.fontFamily,
              minWidth: '100%',
              minHeight: '100dvh',
              margin: 0,
              padding: 0,
              overflowX: 'hidden',
              backgroundColor: baseTheme.palette.background.default,
              color: baseTheme.palette.text.primary,
              WebkitFontSmoothing: 'antialiased',
            },
            '*': {
              boxSizing: 'border-box',
            },
            'html, body, #root': {
              height: '100%',
            },
          },
        },
      },
    });
  }, [isDarkMode]);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;

    setIsDarkMode(newTheme);
    localStorage.setItem('isDarkMode', JSON.stringify(newTheme));
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, useThemeContext };
