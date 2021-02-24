import React from "react";
import classes from "./SectionTitle.module.css";

const SectionTitle = (props) => {
  let word = props.title;
  let first = word.split(" ")[0];
  let rest = word.split(" ").slice(1).join(" ");
  return (
    <div >
      <div className={classes.border}>
      <p className={classes.rest}>
          <span className={classes.first}> {first}</span> {rest}
        </p>
      </div>
       
    </div>
  );
};

export default SectionTitle;
