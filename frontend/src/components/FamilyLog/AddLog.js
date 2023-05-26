import React, { useState } from "react";
import classes from "./AddLog.module.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Header from "../Header/Header";
import UserService from "../../userSerivces"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";

const AddLog = () => {
  const [date, setDate] = useState(new Date());
  const [eventName, setEventName] = useState("");
  const [location, setLocation] = useState("");
  const [notes, setNotes] = useState("");
  const navigate = useNavigate();
  

  const addLog = async () => {
    let user = localStorage.getItem('user');
    user = JSON.parse(user);
    if (eventName === "") {
      alert("Please fill out the event name")
    } else if (location === "") {
      alert("Please fill out the location")
    } else if (notes === ""){
      alert("please fill out the notes")
    } else {
      try {
        const response = await UserService.addLog(user.id, date, eventName, location, notes);
        console.log(response);
        navigate("../family-log")
      } catch (error) {
        console.error(error);
        // handle errors here
      }
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
          </div>
          <label>Location</label>
          <input type="text" placeholder="Search..." value={location} onChange={(e) => setLocation(e.target.value)} />
          <label>Notes</label>
          <textarea placeholder="Notes" value={notes} onChange={(e) => setNotes(e.target.value)}></textarea>
          <div className={classes.btns}>
            <Link to="/family-log"><button className={classes.cancel}>Cancel</button></Link>
            <button className={classes.create} onClick={addLog}>Create</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddLog;
