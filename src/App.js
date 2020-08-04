import React from // , { useState }
"react";
import "./App.css";
import { Box } from "@material-ui/core";
import { isMobile } from "react-device-detect";
import { useMediaPredicate } from "react-media-hook";
import MainPhoto from "./MainPhoto";
import SideBar from "./SideBar";

function App() {
  // const [page, setPage] = useState(0);
  var isVertical = useMediaPredicate("(max-width: 768px)") || isMobile;
  // var isVertical = true;
  return (
    <Box
      className="App"
      component="div"
      flexDirection={isVertical ? "column" : "row"}
      display={isVertical ? "block" : "flex"}
      alignItems="center"
      style={{
        overflowX: "hidden",
        overflowY: isVertical ? "auto" : "hidden",
      }}
    >
      <MainPhoto isVertical={isVertical} />
      <SideBar style={{ height: "100%", flex: "1 1 auto" }} />
    </Box>
  );
}

export default App;
