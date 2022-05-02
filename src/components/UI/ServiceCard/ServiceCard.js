import React from "react";
import classes from "./ServiceCard.module.css";
import * as Icn from 'react-icons/fa';



// FaUserFriends
const ServiceCard = (props) => {
  let icon
    switch (props.icon) {
      case "FaCity":
        icon = <Icn.FaCity className={classes.icon} />;
        break;
      case "FaUserFriends":
        icon = <Icn.FaUserFriends className={classes.icon} />;
        break;
      case "FaHandHoldingUsd":
        icon = <Icn.FaHandHoldingUsd className={classes.icon} />;
        break;
      case "FaRoute":
        icon = <Icn.FaRoute className={classes.icon} />;
        break;
      case "FaSearchDollar":
        icon = <Icn.FaSearchDollar className={classes.icon} />;
        break;

      default:
        icon = null;
        break;
    }
  
  return (
     
      
    <div>
      <div className={classes.cards}>
        <div className={classes.cardItem}>
          <div>
            <div className={[classes.box, classes[props.color]].join(" ")}>
            {icon}
              <div className={classes.text}>
                <h1>{props.title}</h1>
                {props.text && <p>{props.text}</p>}
                {props.documentList && (
                  <ul className={classes.list}>
                    {props.documentList.map((doc) => (
                      <li>{doc}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
