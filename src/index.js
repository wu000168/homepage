import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    h1: {
      fontFamily: "'Open Sans', sans-serif",
      fontSize: "24pt",
      align: "left",
    },
    h3: {
      fontFamily: "'Lato', sans-serif",
      fontSize: "18pt",
      align: "center",
    },
    button: { textTransform: "none", textAlign: "left" },
    body2: {
      fontFamily: "'Times New Roman'",
      fontVariant: "small-caps",
    },
  },
  overrides: {
    MuiTabs: {
      indicator: { left: "8pt", background: "rgb(255,204,51)", width: "2pt" },
    },
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
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap"
      rel="stylesheet"
    />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
