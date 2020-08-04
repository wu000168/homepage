import React from "react";
import "./App.css";
import {
  Paper,
  Divider,
  Drawer,
  Tooltip,
  Tabs,
  Tab,
  Box,
  Typography,
  IconButton,
} from "@material-ui/core";
import LinkRoundedIcon from "@material-ui/icons/LinkRounded";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import photo from "./static/images/photo.jpeg";

function App() {
  return (
    <Box
      className="App"
      component="div"
      flexDirection="row"
      display="flex"
      alignItems="center"
      justifySelf="right"
      style={{
        paddingRight: "20pt",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "auto",
          maxWidth: "40%",
          flex: "0 0 auto",
        }}
      >
        <img
          src={photo}
          alt="Main"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            objectPosition: "50% 50%",
          }}
        />
      </div>
      <Box
        elevation={4}
        flexGrow={1}
        square
        style={{
          height: "100%",
          maxWidth: "100%",
          flex: "1 1 auto",
          overflowX: "auto",
        }}
        component={Paper}
        direction="column"
        display="flex"
      >
        <Box
          display="flex"
          flexDirection="column"
          style={{
            flex: "1 1 auto",
            overflowY: "auto",
            overflowX: "auto",
            height: "100%",
          }}
        >
          <div style={{ flex: "1 1 auto" }}>
            <Tabs
              orientation="vertical"
              value={0}
              centered
              variant="fullWidth"
              style={{ width: "100%" }}
            >
              <Box
                style={{
                  padding: "8pt",
                  marginLeft: "24pt",
                  marginBottom: "16pt",
                  paddingTop: "16pt",
                  width: "100%",
                }}
                display="flex"
                flexDirection="column"
              >
                <Box
                  display="flex"
                  component="span"
                  alignItems="center"
                  flexWrap="nowrap"
                >
                  <Typography
                    variant="h1"
                    style={{
                      fontWeight: "400",
                    }}
                  >
                    Zhiyuan Wu
                  </Typography>
                  <span style={{ marginLeft: "4pt" }}>
                    <Typography
                      variant="h1"
                      style={{
                        fontSize: "2pt",
                      }}
                    >
                      [ wu˧˥ . ɻ̩˥˩ ɥɛn˧˩˧ ]
                    </Typography>
                    <Typography
                      variant="h1"
                      style={{
                        fontSize: "14pt",
                      }}
                    >
                      吴致远
                    </Typography>
                  </span>
                </Box>
                <Box
                  display="flex"
                  component="span"
                  alignItems="center"
                  flexWrap="nowrap"
                >
                  <Typography variant="h1" style={{ fontSize: "12pt" }}>
                    University of Minnesota - Twin Cities
                  </Typography>
                  <IconButton
                    size="small"
                    style={{ marginLeft: "4pt" }}
                    href="https://twin-cities.umn.edu/"
                    target="_blank"
                  >
                    <LinkRoundedIcon />
                  </IconButton>
                </Box>
                <Box
                  display="flex"
                  component="span"
                  alignItems="center"
                  flexWrap="wrap"
                >
                  <Typography variant="h2" style={{ fontSize: "11pt" }}>
                    Bachelor of Science in <i>Computer Science</i>
                    ,&nbsp;
                  </Typography>
                  <Typography variant="h2" style={{ fontSize: "11pt" }}>
                    Minor in <i>Linguistics</i> (Expected in 2022)
                  </Typography>
                </Box>
              </Box>
              <Divider />
              <Tab
                href="https://drive.google.com/file/d/1ig00K4Z2UZuKEdqiLP0rJycDkpNRNLzK/view?usp=sharing"
                target="_blank"
                size="large"
                // style={{ background: "#66bbff" }}
                icon={
                  <DescriptionOutlinedIcon
                    style={{
                      margin: "0pt",
                      marginLeft: "8pt",
                      marginRight: "8pt",
                    }}
                  />
                }
                label={
                  <Box
                    style={{
                      margin: "0pt",
                      marginLeft: "8pt",
                      marginRight: "8pt",
                    }}
                    display="flex"
                    component="span"
                    alignItems="center"
                    flexWrap="nowrap"
                  >
                    <Typography variant="h3">Résumé/CV</Typography>
                  </Box>
                }
              />
              <Divider />
            </Tabs>
          </div>
          <div>
            <Divider />
            <Typography variant="body2" style={{ margin: "2pt" }}>
              made with{" "}
              <a href="https://reactjs.org/">
                <img
                  style={{ height: "8pt" }}
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
                  alt="React"
                />
              </a>{" "}
              <a href="https://reactjs.org/">ReactJS</a>
            </Typography>
          </div>
        </Box>
      </Box>
      <Drawer
        variant="persistent"
        anchor="right"
        open
        PaperProps={{ elevation: 8 }}
        style={{ padding: "8pt" }}
      >
        <Tooltip title="GitHub" placement="left" arrow>
          <IconButton
            size="large"
            href="https://github.com/wu000168"
            target="_blank"
            style={{ color: "#24292e" }}
          >
            <GitHubIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="LinkedIn" placement="left" arrow>
          <IconButton
            size="large"
            href="https://www.linkedin.com/in/zhiyuan-wu/"
            target="_blank"
            style={{ color: "#0077b5" }}
          >
            <LinkedInIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Email" placement="left" arrow>
          <IconButton
            size="large"
            href="mailto://wu000168@umn.edu/"
            target="_blank"
            style={{ color: "#B23121" }}
          >
            <EmailIcon />
          </IconButton>
        </Tooltip>
      </Drawer>
    </Box>
  );
}

export default App;
