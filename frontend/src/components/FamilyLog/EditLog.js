import React from "react";
import classes from "./EditLog.module.css";
import edit from "./../../img/edit.svg";
import deleteIcon from "./../../img/Delete.svg";
import attach from "./../../img/attachFile.svg";
import Header from "../Header/Header";

const EditLog = () => {
  return (
    <div>
      <Header/>
      <div className={classes.editLogTop}>
        <div className={classes.pageName}>
          <h1>Family Log</h1>
        </div>
        <div className={classes.editMainContent}>
          <div className={classes.headerMain}>
            <h1>First photo shoot</h1>
            <img src={edit} alt="edit" />
            <img src={deleteIcon} alt="deleteIcon" />
          </div>
          <p className={classes.dateName}>03/01/2023 BeanKeeper Studio</p>

          <p className={classes.editMessage}>
            Hi, [user name], how did this event go? Record your experience
          </p>
          <div className={classes.messagearea}>
            <div className={classes.textarea}>
              <textarea className={classes.message}></textarea>
              <img src={attach} alt="attach" /> 
            </div>
            <button>update</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditLog;
