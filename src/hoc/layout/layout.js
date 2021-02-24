import React, { useState } from "react";

import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SidedDrawer/SideDrawer";
import Footer from "../../components/Footer/Footer";
// import classes from "./layout.module.css";

const Layout = (props) => {
  const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);
  const sideDrawerCloseHandler = () => {
    setSideDrawerIsVisible(false);
  };
  const sideDrawerToggleHandler = () => {
    setSideDrawerIsVisible(!sideDrawerIsVisible);
  };
  return (
    <div>
      <Toolbar drawerToggleClicked={sideDrawerToggleHandler}></Toolbar>
      <SideDrawer open={sideDrawerIsVisible} closed={sideDrawerCloseHandler} />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
