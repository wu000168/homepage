import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { HashRouter as Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const mainTheme = createMuiTheme({
  typography: {
    h1: {
      fontFamily: "'Open Sans', sans-serif",
      fontSize: "24pt",
      textAlign: "center",
    },
    h3: {
      fontFamily: "'Lato', sans-serif",
      fontSize: "18pt",
      align: "center",
    },
    button: { textTransform: "none", textAlign: "left" },
    body2: {
      fontSize: "10pt",
      textAlign: "center",
      fontFamily: "'Times New Roman'",
      fontVariant: "small-caps",
    },
  },
  overrides: {
    MuiTab: {
      wrapper: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "flex-start",
      },
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Router basename={`${process.env.PUBLIC_URL}/`}>
      <ThemeProvider theme={mainTheme}>
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
