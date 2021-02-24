import React from "react";
import classes from "./ButtonLink.module.css";
import { Link } from "react-router-dom";

const ButtonLink = (props) => {
  return (
    <div>
      <div className={classes.btn}>
        <Link to={props.link}>{props.children}</Link>
      </div>
    </div>
  );
};

export default ButtonLink;
