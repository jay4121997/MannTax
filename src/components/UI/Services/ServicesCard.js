import React from "react";
import classes from "./ServicesCard.module.css";

const Services = (props) => {
  let services = props.list;
  console.log(services);
  return (
    <div>
      <div
        className={
          props.alt
            ? [classes.blogCard, classes.alt].join(" ")
            : classes.blogCard
        }
      >
        <div className={classes.meta}>
          <div
            className={classes.photo}
            style={{
              backgroundImage: `url(${props.url})`,
            }}
          ></div>
        </div>
        <div className={classes.description}>
          <h1>{props.title}</h1>
          <h2>{props.subtitle}</h2>
          <p>{props.text}</p>
          <ul>
            {services.map((service) => {
              return <li>{service}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
