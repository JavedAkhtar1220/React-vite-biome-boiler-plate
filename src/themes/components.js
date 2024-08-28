const components = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 6,
        padding: '8px 16px',
      },
    },
    defaultProps: {
      disableElevation: true, // Default property to remove button shadow
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        marginBottom: '16px',
      },
    },
  },
  MuiTypography: {
    styleOverrides: {
      root: {
        marginBottom: '1em', // Margin for all typography elements
      },
    },
  },
  // More component overrides...
};

export default components;
