import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Avatar,
  Collapse,
  Grow,
} from "@material-ui/core";
import LinkRoundedIcon from "@material-ui/icons/LinkRounded";
import photo from "./static/images/photo.jpeg";

function Info(props) {
  return (
    <Box
      {...props}
      style={{
        width: "100%",
      }}
      display="flex"
      flexDirection="column"
      component="div"
    >
      <Collapse in={props.isVertical} mountOnEnter unmountOnExit>
        <div
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <Grow in={props.isVertical} mountOnEnter unmountOnExit>
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
          </Grow>
        </div>
      </Collapse>
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
              fontSize: "16pt",
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
        alignItems="flex-start"
        flexWrap="wrap"
        flexDirection={props.isVertical ? "column" : "row"}
      >
        <Typography variant="h2" style={{ fontSize: "11pt" }}>
          Bachelor of Science in <i>Computer Science</i>
          {props.isVertical ? " " : ","}&nbsp;
        </Typography>
        <Typography variant="h2" style={{ fontSize: "11pt" }}>
          Minor in <i>Linguistics</i> (Expected in 2022)
        </Typography>
      </Box>
    </Box>
  );
}

export default Info;
