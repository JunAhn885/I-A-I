import React, { useState, useEffect } from "react";
import classes from "./FamilyLog.module.css";
import foot from "./../../img/foot.svg";
import line from "./../../img/line.svg";
import baby from "./../../img/baby.png";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import UserService from "../../userSerivces";


function LogCardPast(props) {
  let logTitle = props.title;
  let logContent = props.content;

  return (
    <div className={classes.card}>
      <div className={classes.lineLeft}></div>
      
      <div className={classes.cardInner}>
        <div className={classes.text}>
          <h2>{logTitle}</h2>
          <br />
          <p>{logContent}</p>
        </div>
      </div>
    </div>
  );
}

function LogCardUpcoming(props) {
  let logTitle = props.title;
  let logTime = props.time;

  return (
    <div>
      <div className={classes.upcoming}>
        <div className={classes.dot}></div>
          <div className={classes.textUpcoming}>
            <div><p>upcoming</p></div>
          </div>
      </div>
      <div className={classes.card}>
        <div className={classes.lineLeft}></div>
          <div className={classes.cardInner}>
            <div className={classes.text}>
              <h2>
                {logTitle} <span>{logTime}</span>
              </h2>
            </div>
        </div>
      </div>
    </div>
  );
}

function LogCardByMonth(props) {
  let monthNum = props.month;

  return (
    <div className={
      toggleMonth === {monthNum}
        ? `${classes.data} ${classes.findActiveContent}`
        : `${classes.data}`
    }>
      <LogCardPast title="First Photo Shoot" content="Emily’s first photo shoot experience! As a parent, a baby's
          photo shoot experience is both exciting and nerve-wracking.
          Seeing your little one dressed up in adorable outfits and
          captured in timeless poses is heartwarming, but it can also be
          challenging to keep them calm and cooperative throughout the
          session. Nonetheless, the final product is worth the effort,
          and you'll cherish the memories captured forever." />;
      <LogCardUpcoming title="Doctor’s appointment" time="06/15/2023"/>;
      <LogCardUpcoming title="Doctor’s appointment" time="01/31/2024"/>;
    </div>
  );
}

const FamilyLog = () => {
  const [toggleMonth, setIsToggleMonth] = useState(1);
  const [toggleYear, setIsToggleYear] = useState(1);
  const [logs, setLogs] = useState([]);
  
  const user = localStorage.getItem("user");
  const userObj = JSON.parse(user);

  const showMonthData = async (index) => {
    setIsToggleMonth(index);
    const response = await UserService.getLog(userObj.id, index);
    setLogs(response.data);
  };

  const showYearData = (id) => {
    setIsToggleYear(id);
  };

  return (
    <div className={classes.familyLogTop}>
      <div className={classes.rowTop}>
        <div className={classes.left}>
          <img src={foot} alt="foot" />
        </div>
        <div className={classes.right}>
          <div className={classes.years}>
            <div
            onClick={() => {
              showYearData(1);
            }}
            className={
              toggleYear === 1
                ? `${classes.arrow} ${classes.arrowActive}`
                : `${classes.arrow}`
            }
            
            >
              <p>2021</p>
            </div>
            <div onClick={() => {
              showYearData(2);
            }}
            className={
              toggleYear === 2
                ? `${classes.arrow} ${classes.arrowActive}`
                : `${classes.arrow}`
            }>
              <p>2022</p>
            </div>
            <div 
            onClick={() => {
              showYearData(3);
            }}
            className={
              toggleYear === 3
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

      <div className={classes.details}>
        <div className={classes.addLog}>
          <Link to="/add-Log">
            <span>+</span>
          </Link>
        </div>

        <LogCardByMonth monthNum='1' />
        <LogCardByMonth monthNum='2' />
        <LogCardByMonth monthNum='3' />
        <LogCardByMonth monthNum='4' />
        <LogCardByMonth monthNum='5' />
        <LogCardByMonth monthNum='6' />
        <LogCardByMonth monthNum='7' />
        <LogCardByMonth monthNum='8' />
        <LogCardByMonth monthNum='9' />
        <LogCardByMonth monthNum='10' />
        <LogCardByMonth monthNum='11' />
        <LogCardByMonth monthNum='12' />
      </div>
    </div>
  );
};

export default FamilyLog;
