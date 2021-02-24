import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.module.css";
import BackDrop from "../../UI/Backdrop/Backdrop";
const sideDrawer = (props) => {
    let attechedClasses = [classes.SideDrawer, classes.Close]
    if (props.open) {
        attechedClasses=[classes.SideDrawer, classes.Open]
    }
  return (
    <React.Fragment>
      <BackDrop show={props.open} clicked={props.closed} />
      <div className={attechedClasses.join(' ')} onClick={props.closed}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems isAuthanticated={props.isAuth} />
        </nav>
      </div>
    </React.Fragment>
  );
};

export default sideDrawer;
