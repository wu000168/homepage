import React from "react";
import {
  Drawer,
  Paper,
  Box,
  Tooltip,
  IconButton,
  Divider,
  Typography,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

function GitHub() {
  return (
    <Tooltip title="GitHub" placement="left">
      <IconButton
        size="large"
        href="https://github.com/wu000168"
        target="_blank"
        style={{ color: "#24292e" }}
      >
        <GitHubIcon />
      </IconButton>
    </Tooltip>
  );
}

function LinkedIn() {
  return (
    <Tooltip title="LinkedIn" placement="left">
      <IconButton
        size="large"
        href="https://www.linkedin.com/in/zhiyuan-wu/"
        target="_blank"
        style={{ color: "#0077b5" }}
      >
        <LinkedInIcon />
      </IconButton>
    </Tooltip>
  );
}

function Email() {
  return (
    <Tooltip title="Email" placement="left">
      <IconButton
        size="large"
        href="mailto://wu000168@umn.edu/"
        target="_blank"
        style={{ color: "#B23121" }}
      >
        <EmailIcon />
      </IconButton>
    </Tooltip>
  );
}

function Info() {
  return (
    <Typography variant="body2" style={{ margin: "2pt" }}>
      made with{" "}
      <img
        style={{ height: "8pt" }}
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
        alt="React"
      />{" "}
      ReactJS
      <br />© 2020 Zhiyuan Wu
    </Typography>
  );
}

function ContactBar(props) {
  const socials = [<GitHub />, <LinkedIn />, <Email />];
  return !props.isVertical ? (
    <Drawer
      variant="permanent"
      anchor="right"
      open
      PaperProps={{ elevation: props.elevation }}
      style={{ padding: "8pt" }}
    >
      {socials}
      <div style={{ margin: "auto" }} />
      <Divider />
      <Tooltip title={<Info />} placement="left-end" arrow>
        <InfoOutlinedIcon
          style={{
            margin: "8pt auto 8pt auto",
            color: "grey",
          }}
        />
      </Tooltip>
    </Drawer>
  ) : (
    <Box
      component={Paper}
      display="flex"
      alignItems="center"
      flexWrap="wrap"
      square
      style={{
        width: "100%",
      }}
      elevation={props.elevation}
    >
      <Box display="flex" alignItems="center" flexWrap="nowrap">
        {socials}
      </Box>
      <Box
        display="flex"
        flexWrap="nowrap"
        style={{
          flex: "1 1 auto",
        }}
        flexDirection="row-reverse"
      >
        <Tooltip title={<Info />} placement="top-end" arrow>
          <InfoOutlinedIcon style={{ margin: "8pt", color: "grey" }} />
        </Tooltip>
      </Box>
    </Box>
  );
}

export default ContactBar;
