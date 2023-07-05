import React, { useState } from 'react';
import classes from './EmployerForm.module.css';

function EmployerForm() {
  const [formData, setFormData] = useState({
    jobDescription: '',
    jobRequirements: '',
    tags: '',
    companyName: '',
    contactInfo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const submit = (e) => {
    e.preventDefault();

    
    setFormData({
      jobDescription: '',
      jobRequirements: '',
      tags: '',
      companyName: '',
      contactInfo: ''
    });

  };
 

  return (
    <div className={classes.wrapper}>
      <h2>Enter Job Details</h2>
      <form >
        <div>
          <label htmlFor="jobDescription" className={classes.label}>Job Description:</label>
          <textarea
            id="jobDescription"
            name="jobDescription"
            value={formData.jobDescription}
            onChange={handleChange}
            maxLength={16 * 1024} // Maximum length of 16KB
            required
            className={classes.textArea}
          />
        </div>
        <div>
          <label htmlFor="jobRequirements" className={classes.label}>Job Requirements:</label>
          <textarea
            id="jobRequirements"
            name="jobRequirements"
            value={formData.jobRequirements}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="tags" className={classes.label}>Tags:</label>
          <textarea
            id="tags"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            rows={3}
            placeholder="Enter chipsets (one per line)"
            required
          />
        </div>
        <div>
          <label htmlFor="companyName" className={classes.label}>Company Name:</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="contactInfo" className={classes.label}>Contact Info:</label>
          <input
            type="text"
            id="contactInfo"
            name="contactInfo"
            value={formData.contactInfo}
            onChange={handleChange}
            required
          />
        </div>
        <button className={classes.submit} onClick={submit}>Submit</button>
      </form>
    </div>
  );
}

export default EmployerForm;
