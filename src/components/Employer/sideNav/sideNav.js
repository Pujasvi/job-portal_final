import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import classes from './sideNav.module.css'
const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <ul>
        <li className={classes.list}>
          <Link to="/home/view-jobs">View Posted Jobs</Link>
        </li>
        <li className={classes.list}>
          <Link to="/home/post-job">Post New Job</Link>
        </li>
       
      </ul>
    </div>
  );
};

export default Sidebar
