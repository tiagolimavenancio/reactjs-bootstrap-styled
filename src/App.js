import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Navigation from "./components/Navigation";
import Page from "./components/Page";

import { KitGlobal } from "./kit";
import themes from "./theme";
import './App.css';

function App(props) {
  const [destinationIndex, setDestinationIndex] = useState(0);
  const [theme, setTheme] = useState(themes.luna);
  const destination = props.destinations[destinationIndex];

  useEffect(() => {
    setTheme(themes[destination.theme]);
  }, [destination])

  return (
    <ThemeProvider theme={theme}>
      <>
        <KitGlobal />
        <Navigation 
          {...props}
          destinationIndex={destinationIndex}
          setDestinationIndex={setDestinationIndex}
        />
        <Page 
          {...props}
          destinationIndex={destinationIndex}
          setDestinationIndex={setDestinationIndex}
        />
      </>
    </ThemeProvider>
  );
}

export default App;
