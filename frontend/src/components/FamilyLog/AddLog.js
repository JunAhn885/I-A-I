import React, { useState } from "react";
import classes from "./AddLog.module.css";
import lineDot from "./../../img/lineDot.svg";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Header from "../Header/Header";
import UserService from "../../userSerivces"

const AddLog = () => {
  const [date, setDate] = useState(new Date());
  const [eventName, setEventName] = useState("");
  const [location, setLocation] = useState("");
  const [notes, setNotes] = useState("");

  const addLog = async () => {
    let user = localStorage.getItem('user');
    user = JSON.parse(user);
    try {
      const response = await UserService.addLog(user.id, date, eventName, location, notes);
      console.log(response);
      // handle successful response here, such as redirecting to another page or clearing the form
    } catch (error) {
      console.error(error);
      // handle errors here
    }
  }

  return (
    <div>
      <Header/>
      <div className={classes.addLogTop}>
        <div className={classes.pageName}>
          <h1>Family Log</h1>
        </div>
        <div className={classes.addMainContent}>
          <label>Event name</label>
          <input type="text" placeholder="Event Name" value={eventName} onChange={(e) => setEventName(e.target.value)} />
          <label>Date & Time</label>
          <div className={classes.datePicker}>
            <div className="addlog-calendar">
              <Calendar onChange={setDate} value={date}/>
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
          <input type="text" placeholder="Search..." value={location} onChange={(e) => setLocation(e.target.value)} />
          <label>Notes</label>
          <textarea placeholder="Notes" value={notes} onChange={(e) => setNotes(e.target.value)}></textarea>
          <div className={classes.btns}>
            <button className={classes.cancel}>Cancel</button>
            <button className={classes.create} onClick={addLog}>Create</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddLog;
