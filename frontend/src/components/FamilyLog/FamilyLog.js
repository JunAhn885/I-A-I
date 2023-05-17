import React, { useState, useEffect } from "react";
import classes from "./FamilyLog.module.css";
import foot from "./../../img/foot.svg";
import line from "./../../img/line.svg";
import baby from "./../../img/baby.png";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import UserService from "../../userSerivces";

const FamilyLog = () => {
  const [toggleMonth, setIsToggleMonth] = useState(1);
  const [toggleYear, setIsToggleYear] = useState(1);
  const [logs, setLogs] = useState([]);

  const showMonthData = async (index) => {
    setIsToggleMonth(index);
    const response = await UserService.getLog(index);
    setLogs(response.data);
  };

  const showYearData = (id) => {
    setIsToggleYear(id);
  };

  useEffect(() => {
    showMonthData(toggleMonth);
  }, [toggleMonth]);

  return (
    <div>
      <Header />
      {logs.map((log, index) => (
        <div key={index} className={classes.logItem}>
          <h2>{log.eventName}</h2>
          <p>Date: {log.date}</p>
          <p>Location: {log.location}</p>
          <p>Notes: {log.notes}</p>
        </div>
      ))}
    </div>
  );
};

export default FamilyLog;
