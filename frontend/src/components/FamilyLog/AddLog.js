import React from "react";
import classes from "./AddLog.module.css";
import lineDot from "./../../img/lineDot.svg";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Header from "../Header/Header";



const AddLog = () => {
  const [date, setDate] = useState(new Date());
  const onChange = (date) => {
    setDate(date);
  };
  const [value, setValue] = useState(new Date());
  return (
    <div>
      <Header/>
      <div className={classes.addLogTop}>
        <div className={classes.pageName}>
          <h1>Family Log</h1>
        </div>
        <div className={classes.addMainContent}>
          <label>Event name</label>
          <input type="text" placeholder="Event Name"/>
          <label>Date & Time</label>
          <div className={classes.datePicker}>
              <div className="addlog-calendar">
                <Calendar onChange={setValue} value={value}/>
              </div>
            <div className={classes.timePicker}>
              <div className={classes.left}>
                <div className={classes.card}>
                  <p>00</p>
                </div>{" "}
                <h1>:</h1>
                <div className={classes.card}>
                  <p>00</p>
                </div>
              </div>
              <img className={classes.lineDot} src={lineDot} alt="lineDot" />
              <div className={classes.right}>
                <div className={classes.card}>
                  <p>00</p>
                </div>{" "}
                <h1>:</h1>
                <div className={classes.card}>
                  <p>00</p>
                </div>
              </div>
            </div>
          </div>
          <label>Location</label>
          <input type="text" placeholder="Seaarch..." />
          <label>Notes</label>
          <textarea placeholder="Notes"></textarea>
          <div className={classes.btns}>
            <button className={classes.cancel}>Cancel</button>
            <button className={classes.create}>Create</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddLog;
