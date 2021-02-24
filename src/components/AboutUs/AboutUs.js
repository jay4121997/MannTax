import React from "react";
import aboutImage from "../../asserts/about-us.png";
import classes from "./AboutUs.module.css";
import ButtonLink from "../UI/ButtonLink/ButtonLink";

const AboutUs = (props) => {
  return (
    <div>
      <div className={classes.flexgrid}>
        <div className={classes.col}>
          <div className={classes.text}>
            <p className={classes.paragraph}>
              MANN Tax provides unparalleled personalized tax preparation
              services to a broad range of clients across the Canada. We are
              ready and able to serve as your tax preparer, tax planner, and
              guide along your path to success.
            </p>
            <div className={classes.button}>
              <ButtonLink  link="/about">
                Who we are...
              </ButtonLink>
            </div>
          </div>
        </div>
        <div className={classes.col}>
          <img
            className={[classes.image, classes.col].join(" ")}
            src={aboutImage}
            alt={"Vector"}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
