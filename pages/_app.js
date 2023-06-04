import { useEffect, useState } from 'react';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Preloader from '../components/Preloader';
import '../styles/globals.css';
import Navbar from "../components/Navbar";
import {CssBaseline} from "@mui/material";

export default function App({ Component, pageProps }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating an asynchronous operation (e.g., fetching data)
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the delay time as needed
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      primary: {
        main: isDarkMode ? '#f5f5f5' : '#000000', // Set white color for light mode
      },
    },
  });

  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps}  isDarkMode={isDarkMode} toggleTheme={toggleTheme}/>
      </ThemeProvider>
  );
}
