import React from 'react';
import { IconButton } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Brightness4, Brightness7 } from '@mui/icons-material';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = React.useState(false);
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <IconButton onClick={handleThemeChange} color="inherit">
        {darkMode ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </ThemeProvider>
  );
};

export default ThemeToggle;

