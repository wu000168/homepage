import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { Box } from "@material-ui/core";
import { isMobile } from "react-device-detect";
import { useMediaPredicate } from "react-media-hook";
import MainPhoto from "./MainPhoto";
import SideBar from "./SideBar";
import Resume from "./Resume";

function App() {
  // const [page, setPage] = useState(0);
  var isVertical = useMediaPredicate("(max-width: 768px)") || isMobile;
  // var isHome = useRouteMatch({
  //   path: "/",
  //   strict: true,
  //   sensitive: true,
  // });
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
      <Switch>
        <Route exact path="/">
          <MainPhoto isVertical={isVertical} />
          <SideBar
            isVertical={isVertical}
            style={{ height: "100%", flex: "1 1 auto" }}
          />
        </Route>
        <Route>
          <Route exact path="/resume" component={Resume}></Route>
          <SideBar
            isVertical={isVertical}
            isCompact
            style={{ height: isVertical ? "auto" : "100%", flex: "1 1 auto" }}
          />
        </Route>
      </Switch>
    </Box>
  );
}

export default App;
