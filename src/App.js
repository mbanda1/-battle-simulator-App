import React from "react";
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from './components/GlobalStyle';
import theme from './theme/theme';
import routes from './routes';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  const routing = useRoutes(routes());  

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AnimatePresence exitBeforeEnter>{routing}</AnimatePresence>
    </ThemeProvider>
  );
};

export default App;
