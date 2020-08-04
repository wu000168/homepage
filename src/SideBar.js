import React from "react";
import { Box } from "@material-ui/core";
import TabBar from "./TabBar";
import ContactBar from "./ContactBar";

function SideBar(props) {
  return (
    <Box
      {...props}
      display="flex"
      flexDirection={props.isVertical ? "Column" : "row"}
    >
      <TabBar isVertical={props.isVertical} isCompact={props.isCompact} />
      <ContactBar
        isVertical={props.isVertical}
        isCompact={props.isCompact}
        elevation={8}
      />
    </Box>
  );
}

export default SideBar;
