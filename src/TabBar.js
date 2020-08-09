import React from "react";
import "./App.css";
import {
  Paper,
  Divider,
  Tabs,
  Tab,
  Box,
  Typography,
  Avatar,
  Slide,
  Collapse,
  Tooltip,
} from "@material-ui/core";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import CodeOutlinedIcon from "@material-ui/icons/CodeOutlined";
import BrushOutlinedIcon from "@material-ui/icons/BrushOutlined";
import MicNoneOutlinedIcon from "@material-ui/icons/MicNoneOutlined";
import Info from "./Info";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import photo from "./static/images/photo.jpeg";

const homeTabsTheme = createMuiTheme({
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

function FullTabBar(props) {
  return (
    <Box
      elevation={4}
      square
      style={{
        height: props.isVertical ? "auto" : "100%",
        width: props.isVertical ? "100%" : "auto",
        minHeight: props.isVertical ? "100%" : "auto",
        overflowY: "auto",
        flex: "1 1 auto",
      }}
      component={Paper}
      flexDirection="column"
      {...props}
    >
      <ThemeProvider theme={homeTabsTheme}>
        <Slide
          direction="left"
          in={!props.isCompact}
          mountOnEnter
          unmountOnExit
        >
          <Tabs
            orientation="vertical"
            value={props.value}
            centered
            variant="fullWidth"
            style={{
              width: "auto",
              minHeight: "100%",
              flex: "1 1 auto",
            }}
            TabIndicatorProps={{
              style: { transitionDelay: "200ms" },
            }}
          >
            {props.tabs.head.full}
            <Divider style={{ marginTop: "auto" }} />
            {props.tabs.tabs.map((tab, i) => [
              <Tab
                disabled={tab.disabled}
                href={tab.href}
                size="large"
                icon={
                  <Avatar
                    style={{
                      margin: "0pt",
                      marginLeft: "8pt",
                      marginRight: "8pt",
                      background: tab.color,
                    }}
                  >
                    {tab.icon}
                  </Avatar>
                }
                label={
                  <Box
                    disabled
                    style={{
                      width: "100%",
                      margin: "0pt",
                      marginLeft: "8pt",
                      marginRight: "8pt",
                    }}
                    flexDirection="row"
                    display="flex"
                    component="span"
                    alignItems="center"
                    flexWrap="wrap"
                  >
                    <Typography
                      variant="h3"
                      style={{
                        textSize: "4pt",
                        flex: "1 1 auto",
                        textAlign: "left",
                      }}
                    >
                      {tab.disabled ? <del>{tab.title}</del> : tab.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      style={{ textSize: "2pt", flex: "0 0 auto" }}
                    >
                      {tab.trailing}
                    </Typography>
                  </Box>
                }
              />,
              <Divider />,
            ])}
            <div style={{ margin: "16pt" }} />
          </Tabs>
        </Slide>
      </ThemeProvider>
    </Box>
  );
}

function CompactTab(props) {
  var compactTabTheme = createMuiTheme({
    overrides: {
      MuiTabs: {
        indicator: {
          left: "0pt",
          background: props.tabs.tabs[props.value].color,
          width: "2pt",
        },
      },
      MuiTab: {
        root: { minWidth: "0pt" },
        wrapper: {
          alignItems: "center",
        },
      },
    },
  });
  return (
    <Collapse
      in={props.isCompact && !props.isVertical}
      mountOnEnter
      unmountOnExit
      style={{ transitionDelay: "300ms" }}
    >
      <div {...props} style={{ height: "auto" }}>
        <ThemeProvider theme={compactTabTheme}>
          <Tabs orientation="vertical" value={props.value} variant="centered">
            {props.tabs.head.compact}
            {props.tabs.tabs.map((tab) => (
              <Tab
                href={tab.href}
                label={
                  <Tooltip title={tab.title} placement="left">
                    {{ ...tab.icon, props: { style: { color: tab.color } } }}
                  </Tooltip>
                }
                disabled={tab.disabled}
                style={{ minWidth: "0pt" }}
              />
            ))}
          </Tabs>
        </ThemeProvider>
      </div>
    </Collapse>
  );
}

function TabBar(props) {
  const tabs = {
    head: {
      full: (
        <Box
          style={{
            padding: "12pt",
            marginLeft: "24pt",
            marginBottom: "24pt",
            paddingTop: "24pt",
            width: "auto",
          }}
        >
          <Info isVertical={props.isVertical} />
        </Box>
      ),
      compact: (
        <Tab
          href="/"
          style={{ minWidth: "0pt" }}
          icon={
            <Tooltip title="Home" placement="left">
              <Avatar
                style={{
                  width: "24pt",
                  height: "24pt",
                  marginTop: "8pt",
                  marginBottom: "8pt",
                }}
              >
                <img
                  src={photo}
                  alt="Zhiyuan Wu"
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    objectPosition: "50% 50%",
                  }}
                />
              </Avatar>
            </Tooltip>
          }
        ></Tab>
      ),
    },
    tabs: [
      {
        icon: <DescriptionOutlinedIcon />,
        color: "#0077b5",
        title: "Résumé/CV",
        trailing: "(Page WIP)",
        href: "/resume",
        disabled: false,
      },
      {
        icon: <CodeOutlinedIcon />,
        color: "#072C61",
        title: "Software Projects",
        trailing: "(Page WIP)",
        href: "https://github.com/wu000168",
        disabled: false,
      },
      {
        icon: <BrushOutlinedIcon />,
        color: "#ff6f00",
        title: "Vector Design",
        trailing: "(Coming Soon)",
        href: "#",
        disabled: true,
      },
      {
        icon: <MicNoneOutlinedIcon />,
        color: "#009688",
        title: "Podcast",
        trailing: "(Coming Soon)",
        href: "#",
        disabled: true,
      },
    ],
  };
  return [
    <FullTabBar id="TabBar" {...props} tabs={tabs} value={0} />,
    <CompactTab id="TabBar" {...props} tabs={tabs} value={1} />,
  ];
}

export default TabBar;
