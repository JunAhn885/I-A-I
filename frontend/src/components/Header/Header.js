import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.headerTop}>
      <ul>
        <li>Dashboard</li>
        <li>Tasks</li>
        <NavLink to="/bonding-journal">
          <li>Bonding Journal</li>
        </NavLink>
        <NavLink to="/family-log">
          <li>Family Log</li>
        </NavLink>
        <li>Profile</li>
      </ul>
    </div>
  );
};

export default Header;
