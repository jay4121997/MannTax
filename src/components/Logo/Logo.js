import React from "react";
import siteLogo from "../../asserts/logo.png";
import classes from "./Logo.module.css";
import {Link} from 'react-router-dom'
const logo = (props) => {
  return (
    <div className={classes.Logo}>
      <Link to='/'>
        <img src={siteLogo} alt="Mann Logo" style={{ width: props.width }} />
        </Link>
    </div>
  );
};

export default logo;
