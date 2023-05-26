import React, { useState, useEffect } from "react";
import classes from "./FamilyLog.module.css";
import foot from "./../../img/foot.svg";
import line from "./../../img/line.svg";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import UserService from "../../userSerivces";
import Navbar from "../shared/navbar2"


function LogCardPast(props) {
  let logTitle = props.title;
  let logContent = props.description;
  let logLocation = props.location

  return (
    <div className={classes.LogCardPast}>
      <div className={
        props.toggleMonth === props.month
          ? `${classes.data} ${classes.findActiveContent}`
          : `${classes.data}`
      }></div>
      <div className={classes.card}>
        <div className={classes.lineLeft}></div>
        <div className={classes.cardInner}>
          <div className={classes.text}>
            <h2 style={{marginBottom: "0"}}>{logTitle}</h2>
            <p style={{marginTop: "3px", marginBottom: "0", fontSize: "20px", color: "#A1A1A1"}}>{logLocation}</p>
            <p style={{marginTop:"5px"}}>{logContent}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const FamilyLog = () => {
  const today = new Date();
  const user = localStorage.getItem("user");
  const userObj = JSON.parse(user);

  const [toggleMonth, setIsToggleMonth] = useState(today.getMonth());
  const [toggleYear, setIsToggleYear] = useState(today.getFullYear());
  const [logs, setLogs] = useState([]);

  const showMonthData = index => {
    setIsToggleMonth(index);
  };

  const showYearData = (id) => {
    setIsToggleYear(id);
  };

  const showLog = logs.length > 0 ? logs.map(logs => {
    return <LogCardPast title={logs.title} description={logs.description} location={logs.location} month={logs.month} toggleMonth={toggleMonth}/>;
  }) : <p style={{color: "#8b8888", fontSize: "24px", fontWeight: "500"}} className="no-notes-display-family-log">No Notes to display for this day. Add more events or select a different day to display events!</p>;

  useEffect(() => {
    const showMonthData = async (index) => {
      const response = await UserService.getLog(userObj.id, toggleMonth, toggleYear);
      setLogs(response.data);
      console.log(response.data);
    };
    showMonthData();
  }, [toggleMonth, toggleYear])

  const contentStyle = {
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center',
  }

  const test = {
    color: 'blue',
   lineHeight: 10,
   padding: '1.5em',
  }

  return (
    <div className={classes.familyLogTop}>
      <Navbar/>
      <div className={classes.rowTop}>
        <div className={classes.left}>
          <img src={foot} alt="foot" />
        </div>
        <div className={classes.right}>
          <div className={classes.years}>
            <div onClick={() => {showYearData(2021);}}
            className={
              toggleYear === 2021
                ? `${classes.arrow} ${classes.arrowActive}`
                : `${classes.arrow}`
            }
            
            >
              <p>2021</p>
            </div>
            <div onClick={() => {
              showYearData(2022);
            }}
            className={
              toggleYear === 2022
                ? `${classes.arrow} ${classes.arrowActive}`
                : `${classes.arrow}`
            }>
              <p>2022</p>
            </div>
            <div 
            onClick={() => {
              showYearData(2023);
            }}
            className={
              toggleYear === 2023
                ? `${classes.arrow} ${classes.arrowActive}`
                : `${classes.arrow}`
            }
            >
              <p>2023</p>
            </div>
          </div>
          <img src={line} alt="line" />
          <div className={classes.months}>
            <span
              onClick={() => {
                showMonthData(1);
              }}
              className={
                toggleMonth === 1
                  ? `${classes.tabs} ${classes.findActive}`
                  : `${classes.tabs}`
              }
            >
              1
            </span>
            <span
              onClick={() => {
                showMonthData(2);
              }}
              className={
                toggleMonth === 2
                  ? `${classes.tabs} ${classes.findActive}`
                  : `${classes.tabs}`
              }
            >
              2
            </span>
            <span
              onClick={() => {
                showMonthData(3);
              }}
              className={
                toggleMonth === 3
                  ? `${classes.tabs} ${classes.findActive}`
                  : `${classes.tabs}`
              }
            >
              3
            </span>
            <span
              onClick={() => {
                showMonthData(4);
              }}
              className={
                toggleMonth === 4
                  ? `${classes.tabs} ${classes.findActive}`
                  : `${classes.tabs}`
              }
            >
              4
            </span>
            <span
              onClick={() => {
                showMonthData(5);
              }}
              className={
                toggleMonth === 5
                  ? `${classes.tabs} ${classes.findActive}`
                  : `${classes.tabs}`
              }
            >
              5
            </span>
            <span
              onClick={() => {
                showMonthData(6);
              }}
              className={
                toggleMonth === 6
                  ? `${classes.tabs} ${classes.findActive}`
                  : `${classes.tabs}`
              }
            >
              6
            </span>
            <span
              onClick={() => {
                showMonthData(7);
              }}
              className={
                toggleMonth === 7
                  ? `${classes.tabs} ${classes.findActive}`
                  : `${classes.tabs}`
              }
            >
              7
            </span>
            <span
              onClick={() => {
                showMonthData(8);
              }}
              className={
                toggleMonth === 8
                  ? `${classes.tabs} ${classes.findActive}`
                  : `${classes.tabs}`
              }
            >
              8
            </span>
            <span
              onClick={() => {
                showMonthData(9);
              }}
              className={
                toggleMonth === 9
                  ? `${classes.tabs} ${classes.findActive}`
                  : `${classes.tabs}`
              }
            >
              9
            </span>
            <span
              onClick={() => {
                showMonthData(10);
              }}
              className={
                toggleMonth === 10
                  ? `${classes.tabs} ${classes.findActive}`
                  : `${classes.tabs}`
              }
            >
              10
            </span>
            <span
              onClick={() => {
                showMonthData(11);
              }}
              className={
                toggleMonth === 11
                  ? `${classes.tabs} ${classes.findActive}`
                  : `${classes.tabs}`
              }
            >
              11
            </span>
            <span
              onClick={() => {
                showMonthData(12);
              }}
              className={
                toggleMonth === 12
                  ? `${classes.tabs} ${classes.findActive}`
                  : `${classes.tabs}`
              }
            >
              12
            </span>
          </div>
        </div>
      </div>

      <div style={{height: "auto"}}className={classes.details}>
        <div className={classes.addLog}>
          <Link to="/add-Log">
            <span>+</span>
          </Link>
        </div>
      <div>
        {showLog}
      </div>  
      </div>
    </div>
  );
};

export default FamilyLog;
