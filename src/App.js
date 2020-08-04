import React from "react";
import "./App.css";
import {
  Paper,
  Divider,
  Tabs,
  Tab,
  Box,
  Typography,
  IconButton,
  Avatar,
} from "@material-ui/core";
import LinkRoundedIcon from "@material-ui/icons/LinkRounded";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import CodeOutlinedIcon from "@material-ui/icons/CodeOutlined";
import BrushOutlinedIcon from "@material-ui/icons/BrushOutlined";
import MicNoneOutlinedIcon from "@material-ui/icons/MicNoneOutlined";
import photo from "./static/images/photo.jpeg";
import ContactBar from "./ContactBar";

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
                  marginBottom: "24pt",
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
            </Tabs>
          </div>
        </Box>
      </Box>
      <ContactBar />
    </Box>
  );
}

export default App;
