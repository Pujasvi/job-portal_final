import React, { useState } from "react";
import classes from "./EmployerForm.module.css";
import { useSelector, useDispatch } from "react-redux";
import { postJobs } from "../../../Components/Employer/employerAction";
import { initialErrors, initialState } from "./EmployerConstants";
import { isValidEmail, isValidPhoneNumber } from "../../../utils/utils";

function EmployerForm() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialState);
  const [formErrors, setFormErrors] = useState(initialErrors);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };
  

  const submit = (e) => {
    e.preventDefault();
    const errors = {};
    for (const key in formData) {
      if (formData[key].trim() === "") {
        errors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } is required`;
      }
    }
    if (!isValidEmail(formData.contactEmail)) {
      errors.contactEmail = 'Invalid email format';
    }
    if (!isValidPhoneNumber(formData.contactPhone)) {
      errors.contactPhone = 'Invalid phone number format';
    }


    setFormErrors(errors);
    if (Object.keys(errors)?.length === 0) {
      dispatch(postJobs(formData));
      setFormData(initialState);
    }
  };

  return (
    <div className={classes.wrapper}>
      <h2>Enter Job Details</h2>
      <form>
        <div>
          <label htmlFor="jobDescription" className={classes.label}>
            Job Description:
          </label>
          <textarea
            id="jobDescription"
            name="jobDescription"
            value={formData.jobDescription}
            onChange={handleChange}
            maxLength={16 * 1024} // Maximum length of 16KB
            required
            className={classes.textArea}
          />
           {formErrors.jobDescription && <p className={classes.error}>{formErrors.jobDescription}</p>}
        </div>
        <div>
          <label htmlFor="jobRequirements" className={classes.label}>
            Job Requirements:
          </label>
          <textarea
            id="jobRequirements"
            name="jobRequirements"
            value={formData.jobRequirements}
            onChange={handleChange}
            required
          />
           {formErrors.jobRequirements && <p className={classes.error}>{formErrors.jobRequirements}</p>}
        </div>
        <div>
          <label htmlFor="tags" className={classes.label}>
            Tags:
          </label>
          <textarea
            id="tags"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            rows={3}
            placeholder="Enter chipsets (one per line)"
            required
          />
           {formErrors.tags && <p className={classes.error}>{formErrors.tags}</p>}
        </div>
        <div>
          <label htmlFor="companyName" className={classes.label}>
            Company Name:
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
           {formErrors.companyName && <p className={classes.error}>{formErrors.companyName}</p>}  
        </div>
        <div>
          <label htmlFor="contactEmail" className={classes.label}>
            Contact Email:
          </label>
          <input
            type="text"
            id="contactEmail"
            name="contactEmail"
            value={formData.contactEmail}
            onChange={handleChange}
            required
          />
           {formErrors.contactEmail && <p className={classes.error}>{formErrors.contactEmail}</p>}
        </div>
        <div>
          <label htmlFor="contactPhone" className={classes.label}>
            Contact Phone:
          </label>
          <input
            type="text"
            id="contactPhone"
            name="contactPhone"
            value={formData.contactPhone}
            onChange={handleChange}
            required
          />
             {formErrors.contactPhone && <p className={classes.error}>{formErrors.contactPhone}</p>}
        </div>
        <button className={classes.submit} onClick={submit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default EmployerForm;
