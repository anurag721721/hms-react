import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MantineProvider, createTheme } from "@mantine/core"
import "@mantine/core/styles.css"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const theme = createTheme({
  colors: {
    // Custom primary color
    primary: [
      '#e3f2ff', // 0 - very light
      '#b3daff', // 1
      '#81c2ff', // 2
      '#4faaff', // 3
      '#1d92ff', // 4
      '#0078e6', // 5 (main shade)
      '#005db4', // 6
      '#004282', // 7
      '#002851', // 8
      '#001021', // 9 - very dark
    ],
    // You can define multiple palettes
    secondary: [
      '#fff3e3',
      '#ffd9b3',
      '#ffbf81',
      '#ffa54f',
      '#ff8b1d',
      '#e67200',
      '#b45900',
      '#823f00',
      '#512600',
      '#211000',
    ],
  },
  primaryColor: 'primary', 
  primaryShade: 4,
  focusRing: "never",
  defaultGradient: {
    from: "primary.4",
    to: "primary.8",
    deg: 132
  }
  , fontFamily: "Poppins,sans-serif",

  headings: { fontFamily: "Merriweather,serid" }

});
root.render(
  <React.StrictMode>
    <MantineProvider theme={theme} >
      <App />
    </MantineProvider>
  </React.StrictMode>
);

reportWebVitals();
