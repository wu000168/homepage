import React from "react";
import {
  Box,
  Paper,
  Container,
  Typography,
  Avatar,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Card,
  Fab,
} from "@material-ui/core";
import {
  Timeline,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
} from "@material-ui/lab";
import photo from "./static/images/photo.jpeg";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PhoneRoundedIcon from "@material-ui/icons/PhoneRounded";
import MailRoundedIcon from "@material-ui/icons/MailRounded";
import StarsRoundedIcon from "@material-ui/icons/StarsRounded";
import SchoolRoundedIcon from "@material-ui/icons/SchoolRounded";
import BuildRoundedIcon from "@material-ui/icons/BuildRounded";
import WorkRoundedIcon from "@material-ui/icons/WorkRounded";
import PeopleRoundedIcon from "@material-ui/icons/PeopleRounded";
import MoreHorizRoundedIcon from "@material-ui/icons/MoreHorizRounded";
import CardMembershipRoundedIcon from "@material-ui/icons/CardMembershipRounded";
import MenuBookRoundedIcon from "@material-ui/icons/MenuBookRounded";
import DescriptionRoundedIcon from "@material-ui/icons/DescriptionRounded";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const resumeTheme = createMuiTheme({
  typography: {
    h1: {
      fontFamily: "'Open Sans', sans-serif",
      fontweight: "600",
      fontSize: "16pt",
    },
    h2: {
      fontFamily: "'Open Sans', sans-serif",
      fontweight: "400",
      fontSize: "14pt",
    },
    body1: {
      // fontFamily: "'Roboto', sans-serif",
      fontweight: "300",
      fontSize: "11pt",
    },
    // body2: {
    //   fontweight: "300",
    //   // fontSize: "11pt",
    //   color: "#000000A0",
    // },
  },
});

function Resume() {
  // const [open, setOpen] = React.useState(false);
  // const theme = useTheme();
  // const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      style={{
        height: "100%",
        width: "100%",
        flex: "1 1 auto",
        overflowX: "hidden",
        overflowY: "auto",
      }}
      square
      component={Paper}
    >
      <Container
        maxWidth="md"
        square
        style={{ padding: "24pt", minHeight: "100%" }}
        component={Card}
        // variant="outlined"
      >
        <Fab
          variant="extended"
          color="primary"
          href="https://drive.google.com/file/d/1ig00K4Z2UZuKEdqiLP0rJycDkpNRNLzK/view?usp=sharing"
          target="_blank"
        >
          <DescriptionRoundedIcon />
          <Typography style={{ margin: "2pt" }}>View PDF - Page WIP</Typography>
        </Fab>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Avatar
            style={{
              marginBottom: "10pt",
              width: "64pt",
              height: "64pt",
            }}
          >
            <img
              src={photo}
              alt="Main"
              style={{ width: "100%", height: "auto" }}
            />
          </Avatar>
          <Box
            justifyContent="center"
            alignItems="flex-start"
            display="flex"
            flexDirection="column"
            marginLeft="16pt"
          >
            <Typography
              variant="h1"
              style={{
                marginLeft: "4pt",
                fontWeight: "400",
              }}
              component="span"
            >
              Zhiyuan Wu
            </Typography>
            <Box
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
              style={{
                marginTop: "4pt",
                marginBottom: "8pt",
              }}
            >
              <Chip
                // size="small"
                variant="outlined"
                icon={<PhoneRoundedIcon />}
                label="+1 (612) 205-3083"
                style={{ margin: "4pt" }}
              />
              <Chip
                // size="small"
                variant="outlined"
                icon={<MailRoundedIcon />}
                label="wu000168@umn.edu"
                style={{ margin: "4pt" }}
              />
            </Box>
          </Box>
        </Box>
        <ThemeProvider theme={resumeTheme}>
          <Accordion style={{ marginTop: "16pt" }} component={Card}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <SchoolRoundedIcon style={{ marginRight: "8pt" }} />
              <Typography variant="h1">Education</Typography>
            </AccordionSummary>
            <AccordionDetails
              style={{ textAlign: "left", margin: "4pt", padding: "8pt" }}
            >
              <div>
                <Typography
                  variant="h2"
                  style={{ margin: "8pt", marginTop: "4pt" }}
                >
                  University of Minnesota - Twin Cities
                </Typography>
                <Typography
                  variant="body1"
                  style={{ margin: "8pt", marginBottom: "4pt" }}
                >
                  Bachelor of Science in Computer Science, with Minor in
                  Linguistics
                  <br />
                  September 2018 - (Expected) May 2022
                </Typography>
                <Chip
                  size="small"
                  variant="outlined"
                  icon={<StarsRoundedIcon style={{ color: "#ffcc33" }} />}
                  label="Cumulative GPA - 3.99/4.00"
                  style={{ margin: "4pt" }}
                />
                <Chip
                  size="small"
                  variant="outlined"
                  icon={<BuildRoundedIcon style={{ color: "#7a0019" }} />}
                  label="Technical GPA - 4.00/4.00"
                  style={{ margin: "4pt" }}
                />
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion component={Card}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <WorkRoundedIcon style={{ marginRight: "8pt" }} />
              <Typography variant="h1">Experience</Typography>
            </AccordionSummary>
            <AccordionDetails
              style={{ textAlign: "left", margin: "4pt", padding: "4pt" }}
            >
              <Timeline align="left" component="span">
                <TimelineItem>
                  <TimelineOppositeContent style={{ minWidth: "16%" }}>
                    September 2020 - May 2021
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot style={{ backgroundColor: "#ffcc33" }} />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent
                    style={{ flex: "1 1 auto", padding: "16pt" }}
                  >
                    <Typography variant="h2" style={{ marginBottom: "4pt" }}>
                      Senior Software Project
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      style={{ marginBottom: "4pt" }}
                    >
                      TBD (Target/Medtronic/C.H. Robinson)
                      <br /> through Department of Computer Scicence &amp;
                      Engineering, University of Minnesota
                    </Typography>
                    <Typography variant="body1" style={{ marginBottom: "2pt" }}>
                      Working within a team of students, a corporate sponsor,
                      and a supervising facilitator, developing a software
                      system (TBD), distributing system to users, and
                      extending/maintaining it in response to their needs
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent style={{ minWidth: "16%" }}>
                    June - July 2020
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot variant="outlined" />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent
                    style={{ flex: "1 1 auto", padding: "16pt" }}
                  >
                    <Typography variant="h2" style={{ marginBottom: "4pt" }}>
                      S.O.S. Challenge Participant
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      style={{ marginBottom: "4pt" }}
                    >
                      TechPoint
                    </Typography>
                    <Typography variant="body1" style={{ marginBottom: "2pt" }}>
                      Participated as a software developer on a
                      multi-disciplinary team to create a solution for
                      challenges faced by community-based nonprofits during the
                      COVID-19, created digitization of intake form for Morning
                      Light with go-to-market strategy to facilite their
                      expansion in face of the pandemic
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent style={{ minWidth: "16%" }}>
                    July - August 2019
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot variant="outlined" />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent
                    style={{ flex: "1 1 auto", padding: "16pt" }}
                  >
                    <Typography variant="h2" style={{ marginBottom: "4pt" }}>
                      Software Development Intern
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      style={{ marginBottom: "4pt" }}
                    >
                      Shanghai Tulin Information Technology Co., Ltd.
                    </Typography>
                    <Typography variant="body1" style={{ marginBottom: "2pt" }}>
                      Wrote &amp; maintained server-side automation scripts for
                      database management &amp; product deployment using Bash
                      &amp; SQL, developed developer-facing tools &amp; simple
                      front-end dashboards for internal use with Flutter on Web,
                      performed automated &amp; manual tests on updates to
                      production software, investigated &amp; researched
                      potential solutions for future company operations
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent style={{ minWidth: "16%" }}>
                    May 2019
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot variant="outlined" />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent
                    style={{ flex: "1 1 auto", padding: "16pt" }}
                  >
                    <Typography variant="h2" style={{ marginBottom: "4pt" }}>
                      Student Academic Support
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      style={{ marginBottom: "4pt" }}
                    >
                      2019 Scientific Ballooning Technologies Workshop
                      <br /> School of Physics &amp; Astronomy, University of
                      Minnesota
                    </Typography>
                    <Typography variant="body1" style={{ marginBottom: "2pt" }}>
                      Put up posters and signs, set up conference room and
                      prepared devices for presentations, managed presentation
                      file submissions and projection, assisted with
                      registration, provided directions to conference attendees,
                      troubleshooted exceptions
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent style={{ minWidth: "16%" }}>
                    February - March 2019
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot variant="outlined" />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent
                    style={{ flex: "1 1 auto", padding: "16pt" }}
                  >
                    <Typography variant="h2" style={{ marginBottom: "4pt" }}>
                      Undergraduate Research Assistant
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      style={{ marginBottom: "4pt" }}
                    >
                      Robotic Sensor Networks Lab
                      <br /> Department of Computer Science &amp; Engineering,
                      University of Minnesota
                    </Typography>
                    <Typography variant="body1" style={{ marginBottom: "2pt" }}>
                      Pre-processed images &amp; produced machine learning
                      training data in .json format
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </AccordionDetails>
          </Accordion>
          <Accordion component={Card}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <MoreHorizRoundedIcon style={{ marginRight: "8pt" }} />
              <Typography variant="h1">Other Activities</Typography>
            </AccordionSummary>
            <AccordionDetails
              style={{ textAlign: "left", margin: "4pt", padding: "8pt" }}
            >
              WIP
            </AccordionDetails>
          </Accordion>
          <Accordion component={Card}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <PeopleRoundedIcon style={{ marginRight: "8pt" }} />
              <Typography variant="h1">Affiliations</Typography>
            </AccordionSummary>
            <AccordionDetails
              style={{ textAlign: "left", margin: "4pt", padding: "8pt" }}
            >
              WIP
            </AccordionDetails>
          </Accordion>
          <Accordion component={Card}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <CardMembershipRoundedIcon style={{ marginRight: "8pt" }} />
              <Typography variant="h1">Honors &amp; Awards</Typography>
            </AccordionSummary>
            <AccordionDetails
              style={{ textAlign: "left", margin: "4pt", padding: "8pt" }}
            >
              WIP
            </AccordionDetails>
          </Accordion>
          <Accordion component={Card}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <MenuBookRoundedIcon style={{ marginRight: "8pt" }} />
              <Typography variant="h1">Coursework</Typography>
            </AccordionSummary>
            <AccordionDetails
              style={{ textAlign: "left", margin: "4pt", padding: "8pt" }}
            >
              WIP
            </AccordionDetails>
          </Accordion>
        </ThemeProvider>
      </Container>
    </Box>
  );
}

export default Resume;
