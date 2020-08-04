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
  Fade,
} from "@material-ui/core";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import CodeOutlinedIcon from "@material-ui/icons/CodeOutlined";
import BrushOutlinedIcon from "@material-ui/icons/BrushOutlined";
import MicNoneOutlinedIcon from "@material-ui/icons/MicNoneOutlined";
import Info from "./Info";

function TabBar(props) {
  return (
    <Box
      elevation={4}
      square
      style={{
        minHeight: "100%",
        maxWidth: "100%",
        height: "auto",
        width: props.isVertical ? "100%" : "auto",
        overflowY: "auto",
        flex: "1 1 auto",
      }}
      component={Paper}
      flexDirection="column"
      display="flex"
      {...props}
    >
      <Fade direction="left" in={!props.isCompact} mountOnEnter unmountOnExit>
        <Tabs
          orientation="vertical"
          value={0}
          centered
          variant="fullWidth"
          style={{
            width: "auto",
            minHeight: "100%",
            height: "100%",
            flex: "1 1 auto",
          }}
          TabIndicatorProps={{
            style: { transitionDelay: "200ms" },
          }}
        >
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
          <Divider style={{ marginTop: "auto" }} />
          <Tab
            href="https://drive.google.com/file/d/1ig00K4Z2UZuKEdqiLP0rJycDkpNRNLzK/view?usp=sharing"
            target="_blank"
            size="large"
            icon={
              <Avatar
                style={{
                  margin: "0pt",
                  marginLeft: "8pt",
                  marginRight: "8pt",
                  background: "#0077b5",
                }}
              >
                <DescriptionOutlinedIcon />
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
                  Résumé/CV
                </Typography>
                <Typography
                  variant="body1"
                  style={{ textSize: "2pt", flex: "0 0 auto" }}
                >
                  (Page WIP)
                </Typography>
              </Box>
            }
          />
          <Divider />
          <Tab
            href="https://github.com/wu000168"
            target="_blank"
            size="large"
            icon={
              <Avatar
                style={{
                  margin: "0pt",
                  marginLeft: "8pt",
                  marginRight: "8pt",
                  background: "#072C61",
                }}
              >
                <CodeOutlinedIcon />
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
                  Software Projects
                </Typography>
                <Typography
                  variant="body1"
                  style={{ textSize: "2pt", flex: "0 0 auto" }}
                >
                  (Page WIP)
                </Typography>
              </Box>
            }
          />
          <Divider />
          <Tab
            disabled
            target="_blank"
            size="large"
            icon={
              <Avatar
                style={{
                  margin: "0pt",
                  marginLeft: "8pt",
                  marginRight: "8pt",
                  background: "#ff6f00",
                }}
              >
                <BrushOutlinedIcon />
              </Avatar>
            }
            label={
              <Box
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
                  <del>Vecter Design</del>
                </Typography>
                <Typography
                  variant="body1"
                  style={{ textSize: "2pt", flex: "0 0 auto" }}
                >
                  (Coming Soon)
                </Typography>
              </Box>
            }
          />
          <Divider />
          <Tab
            disabled
            target="_blank"
            size="large"
            icon={
              <Avatar
                style={{
                  margin: "0pt",
                  marginLeft: "8pt",
                  marginRight: "8pt",
                  background: "#009688",
                }}
              >
                <MicNoneOutlinedIcon />
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
                  <del>Podcast</del>
                </Typography>
                <Typography
                  variant="body1"
                  style={{ textSize: "2pt", flex: "0 0 auto" }}
                >
                  (Coming Soon)
                </Typography>
              </Box>
            }
          />
          <Divider style={{ marginBottom: "auto" }} />
          <div style={{ margin: "16pt" }} />
        </Tabs>
      </Fade>
    </Box>
  );
}

export default TabBar;
