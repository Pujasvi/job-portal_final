import React, { useState, useEffect } from 'react';
import { dummyEmployers } from '../../dummyData/employers';
import classes from './JobListing.module.css'
import Pagination from 'react-js-pagination';
import { useDispatch } from "react-redux";
import { logout } from "../Login/loginSlice";
import { setDataInLocalStorage } from "../../utils/commonUtils";
import { useNavigate } from "react-router-dom";
// Mock data for job listings
const mockJobListings = dummyEmployers;

function JobListing() {
  const [jobListings, setJobListings] = useState(mockJobListings);
  const [filteredJobListings, setFilteredJobListings] = useState(jobListings);
  const [experienceFilter, setExperienceFilter] = useState('');
  const [tagsFilter, setTagsFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(5);

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobListings.slice(indexOfFirstJob, indexOfLastJob);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  
  useEffect(() => {
    applyFilters();
  }, [experienceFilter, tagsFilter]);

  const applyFilters = () => {
    let filteredJobs = jobListings;

    if (experienceFilter !== '') {
      filteredJobs = filteredJobs.filter(job => job.experience >= experienceFilter);
    }
    if (tagsFilter !== '') {
      const tagsArray = tagsFilter.split(',')?.map(tag => tag.trim());
      filteredJobs = filteredJobs.filter(job => {
        const jobTags = job.tags.split(',').map(tag => tag.trim());
        return tagsArray.every(tag => jobTags.includes(tag));
      });
    }

    setFilteredJobListings(filteredJobs);
  };

  const handleExperienceFilterChange = (e) => {
    setExperienceFilter(parseInt(e.target.value));
  };

  const handleTagsFilterChange = (e) => {
    setTagsFilter(e.target.value);
  };

  const handleQuickApply = (jobId) => {

    console.log(`Quick apply to job with ID: ${jobId}`);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutLocal = () => {
    setDataInLocalStorage("user", "");
    dispatch(logout());
    navigate("/login");
    return;
  };

  return (
    <>
          <div className={classes.header}>
        <button type="button" onClick={logoutLocal}>
          Logout
        </button>
      </div>
    <div className={classes.joblistingPage}>
      <h1>Job Listings</h1>

      {/* Filters */}
      <div className={classes.filters}>
        <label htmlFor="experienceFilter">Minimum Experience:</label>
        <input type="number" id="experienceFilter" value={experienceFilter} onChange={handleExperienceFilterChange} />

        <label htmlFor="tagsFilter">Tags:</label>
        <input type="text" id="tagsFilter" value={tagsFilter} onChange={handleTagsFilterChange} />
      </div>

      {/* Job Listings */}
      <div>
        {currentJobs?.map(job => {
          return <div key={job.id} className={classes.jobListing}>
            <h3>{job.company_name}</h3>
            <p>{job.job_description}</p>
            <p>Experience Required: {job.experience}</p>
            <p> <p>Tags: {job.tags}</p>
            <p>Contact Phone: {job.contact_info_phone}</p>
            <p>Contact Email: {job.contact_info_email}</p>
            <p>Applications: {job.applications}</p></p>
            <button onClick={() => handleQuickApply(job.id)}>Quick Apply</button>
          </div>
        })}
      </div>
      <div className={classes.paginationContainer}>
        <Pagination
          activePage={currentPage}
          itemsCountPerPage={jobsPerPage}
          totalItemsCount={filteredJobListings.length}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
          itemClass={classes['page-item']}
          linkClass={classes['page-link']}
        />
      </div>
    </div>
    </>
  );
}

export default JobListing;
