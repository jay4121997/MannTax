import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" exact>
        Home
      </NavigationItem>
      <NavigationItem link="/about" exact>About Us</NavigationItem>
      <NavigationItem link="/services" exact>Services</NavigationItem>
      <NavigationItem link="/document-checklist" exact>Document Checklist</NavigationItem>
      <NavigationItem link="/know-more" exact>Know More</NavigationItem>
      <NavigationItem link="/ada" exact>News</NavigationItem>
      <NavigationItem link="/contact-us" exact>Contact Us</NavigationItem>
    </ul>
  );
};

export default navigationItems;
