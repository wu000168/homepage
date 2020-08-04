import React from "react";
import "./App.css";
import { Slide } from "@material-ui/core";
import photo from "./static/images/photo.jpeg";

function MainPhoto(props) {
  return (
    <Slide direction="right" in={!props.isVertical} mountOnEnter unmountOnExit>
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
    </Slide>
  );
}

export default MainPhoto;
