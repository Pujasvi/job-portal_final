import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { dummyUserProfiles } from "../../dummyData/userProfiles";
import classes from "./Profile.module.css";
import { useNavigate } from 'react-router-dom';

function Profile() {
  let { id } = useParams();
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    // Fetch user data for the given ID from the server
    fetchUserData(id);
  }, [id]);

  const fetchUserData = async (userId) => {
    try {
      const data = dummyUserProfiles[0];
      console.log(data);
      // Update the userData state with the fetched data
      setUserData(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  if (!userData) {
    return <p>Loading user data...</p>;
  }
  const back = () => {
    navigate(-1)
  };
  return (
    <Fragment>
      <div className={classes.back} onClick={back}>
        Back ----
      </div>
      <div className={classes.wrapper}>
        <h2>User Profile</h2>
        <p>Name: {userData.name}</p>
        <p>Current Organisation: {userData.current_organisation}</p>
        <p>Email: {userData.emailId}</p>
        <p>Phone: {userData.phone}</p>
        <p>Experience: {userData.experience} years</p>
        <p>Skills: {userData.skills}</p>
        <p>CTC: {userData.CTC}</p>
        <p>ECTC: {userData.ECTC}</p>
      </div>
    </Fragment>
  );
}

export default Profile;
