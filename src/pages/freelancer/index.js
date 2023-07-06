import React, { useState } from 'react';
import MultiSelectDropdown from '../../common/multiselect-dropdown';
import styles from './index.module.css';
function UserProfile() {
  const [userData, setUserData] = useState({
    name: '',
    skills: ["java","react","c#","node.js"],
    gitProfile: '',
    projects: [],
    currentOrganization: '',
    email: '',
    phone: '',
    experience: '',
    ctc: '',
    expectedCtc: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form submission and data handling here
    // You can send the data to an API or update the state, etc.

    // Reset form fields after submission
    setUserData({
      name: '',
      skills: [],
      gitProfile: '',
      projects: [],
      currentOrganization: '',
      email: '',
      phone: '',
      experience: '',
      ctc: '',
      expectedCtc: ''
    });
  };

  return (
    <div className={styles.userProfile}>
      <h2>User Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={userData.name}
            onChange={handleChange}
            required
            className={styles.inputField}
          />
        </div>
        <div>
          <label htmlFor="skills" className={styles.label}>Skills:</label>
          <MultiSelectDropdown options={userData.skills} />
        </div>
        <div>
          <label htmlFor="gitProfile" className={styles.label}>Git Profile:</label>
          <input
            type="text"
            id="gitProfile"
            name="gitProfile"
            value={userData.gitProfile}
            onChange={handleChange}
            className={styles.inputField}
          />
        </div>
        <div>
          <label htmlFor="projects" className={styles.label}>Projects:</label>
          <textarea
            id="projects"
            name="projects"
            value={userData.projects.join('\n')}
            onChange={(e) => {
              const projectsArray = e.target.value.split('\n');
              setUserData((prevData) => ({
                ...prevData,
                projects: projectsArray
              }));
            }}
          />
        </div>
        <div>
          <label htmlFor="currentOrganization" className={styles.label}>Current Organization:</label>
          <input
            type="text"
            id="currentOrganization"
            name="currentOrganization"
            value={userData.currentOrganization}
            onChange={handleChange}
            className={styles.inputField}
          />
        </div>
        <div>
          <label htmlFor="email" className={styles.label}>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
            className={styles.inputField}
          />
        </div>
        <div>
          <label htmlFor="phone" className={styles.label}>Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={userData.phone}
            onChange={handleChange}
            required
            className={styles.inputField}
          />
        </div>
        <div>
          <label htmlFor="experience" className={styles.label}>Experience:</label>
          <input
            type="text"
            id="experience"
            name="experience"
            value={userData.experience}
            onChange={handleChange}
            className={styles.inputField}
          />
        </div>
        <div>
          <label htmlFor="ctc" className={styles.label}>CTC:</label>
          <input
            type="text"
            id="ctc"
            name="ctc"
            value={userData.ctc}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="expectedCtc" className={styles.label}>Expected CTC:</label>
          <input
            type="text"
            id="expectedCtc"
            name="expectedCtc"
            value={userData.expectedCtc}
            onChange={handleChange}
            className={styles.inputField}
          />
        </div>
        <button type="submit"  className={styles.submitButton}>Save</button>
      </form>
    </div>
  );
}

export default UserProfile;
