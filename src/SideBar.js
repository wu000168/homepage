import React from "react";
import { Box, Slide, Divider } from "@material-ui/core";
import TabBar from "./TabBar";
import ContactBar from "./ContactBar";

function SideBar(props) {
  return (
    <Box
      id="Sidebar"
      {...props}
      display="flex"
      square
      flexDirection={props.isVertical ? "Column" : "row"}
    >
      <Slide direction="left" in={!props.isCompact} mountOnEnter unmountOnExit>
        <div style={{ flex: "1 1 auto" }}>
          <TabBar isVertical={props.isVertical} isCompact={props.isCompact} />
        </div>
      </Slide>
      <ContactBar
        isVertical={props.isVertical}
        isCompact={props.isCompact}
        elevation={8}
        tabs={[
          <TabBar
            style={{ marginTop: "0pt" }}
            isVertical={props.isVertical}
            isCompact={props.isCompact}
          />,
          <Divider
            style={{
              height: "1pt",
              alignSelf: "stretch",
              marginTop: "8pt",
              marginBottom: "8pt",
            }}
          />,
        ]}
      ></ContactBar>
    </Box>
  );
}

export default SideBar;
