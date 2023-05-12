import React from 'react';
import classes from './FamilyLog.module.css';

const Upcoming = ({ showText }) => {
  return (
    <div className={classes.upcoming}>
      <div className={classes.dot}></div>
      {showText && (
        <div className={classes.textUpcoming}>
          <div>
            <p>upcoming</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Upcoming;
