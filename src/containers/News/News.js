import React, { useEffect } from "react";
import SectionTitle from "../../components/UI/SectionTitle/SectionTitle";
import ButtonLink from "../../components/UI/ButtonLink/ButtonLink";
import classes from "./News.module.css";
import { Redirect } from "react-router-dom";
const News = () => {
  useEffect(() => {
      window.scroll(0, 0);
      

      setTimeout(() => {
        window.location.href = '/';
      }, 5000);
      document.title = "Latest TAX News | MANN TAX AND ACCOUNTING "
    
  }, []);

  return (
    <div data-aos='fade-up'>
        <SectionTitle title="Latest News" />
          <div className={classes.center} >
              <div className={classes.text}>This feature is in development....we are redirecting you to <a href="/"> Home</a> page</div>
        </div>
    </div>
  );
};

export default News;
