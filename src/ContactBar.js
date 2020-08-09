import React from "react";
import {
  Paper,
  Box,
  Tooltip,
  IconButton,
  Divider,
  Typography,
  Slide,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

function GitHub(props) {
  return (
    <Tooltip title="GitHub" placement={props.tooltip}>
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

function LinkedIn(props) {
  return (
    <Tooltip title="LinkedIn" placement={props.tooltip}>
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

function Email(props) {
  return (
    <Tooltip title="Email" placement={props.tooltip}>
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

function PageInfo() {
  return (
    <div>
      <Typography variant="body2" style={{ margin: "2pt" }}>
        made with{" "}
        <img
          style={{ height: "8pt" }}
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
          alt="React"
        />{" "}
        ReactJS
        <br />
        and{" "}
        <img
          style={{ height: "8pt" }}
          src="https://material-ui.com/static/logo_raw.svg"
          alt="Material-UI"
        />{" "}
        Material-UI
        <br />
        hosted on{" "}
        <svg height="8pt" viewBox="0 0 16 16" style={{ fill: "white" }}>
          <path
            fill-rule="evenodd"
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
          ></path>
        </svg>{" "}
        GitHub Pages
      </Typography>
      <Divider
        light={true}
        style={{ background: "#ffffff55", margin: "4pt auto 2pt auto" }}
      />
      <Typography variant="body2">© 2020 Zhiyuan Wu</Typography>
    </div>
  );
}

function ContactBar(props) {
  const placement = { tooltip: props.isVertical ? "top" : "left" };
  const socials = [
    <GitHub {...placement} />,
    <LinkedIn {...placement} />,
    <Email {...placement} />,
  ];
  return [
    <Slide direction="left" in={!props.isVertical} mountOnEnter unmountOnExit>
      <Box
        component={Paper}
        display="flex"
        alignItems="center"
        flexWrap="nowrap"
        square
        style={{
          height: "100%",
          width: "auto",
          flex: "0 0 auto",
          overflowY: "auto",
        }}
        elevation={props.elevation}
        flexDirection="column"
        {...props}
      >
        {props.isCompact && !props.isVertical ? props.tabs : null}
        {socials}
        <Divider
          style={{ marginTop: "auto", height: "1pt", alignSelf: "stretch" }}
        />
        <Tooltip title={<PageInfo />} placement="left-end" arrow>
          <InfoOutlinedIcon
            style={{
              margin: "8pt auto 8pt auto",
              color: "grey",
            }}
          />
        </Tooltip>
      </Box>
    </Slide>,
    <Slide direction="up" in={props.isVertical} mountOnEnter unmountOnExit>
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
          <Tooltip title={<PageInfo />} placement="top-end" arrow>
            <InfoOutlinedIcon style={{ margin: "8pt", color: "grey" }} />
          </Tooltip>
        </Box>
      </Box>
    </Slide>,
  ];
}

export default ContactBar;
