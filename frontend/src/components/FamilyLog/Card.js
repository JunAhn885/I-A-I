import React from 'react';
import classes from './FamilyLog.module.css';
import baby from './../../img/baby.png';

const Card = ({ title, description, imgUrl }) => {
  return (
    <div className={classes.card}>
      <div className={classes.lineLeft}></div>
      <div className={classes.cardInner}>
        {imgUrl && (
          <div className={classes.pic}>
            <img src={imgUrl} alt="baby" />
            <img src={imgUrl} alt="baby" />
          </div>
        )}
        <div className={classes.text}>
          <h2>{title}</h2>
          <br />
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
