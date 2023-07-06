import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { dummyApplications } from '../../../dummyData/applications';
import DataTable from '../data-table/DataTable';
import { createColumnHelper } from "@tanstack/react-table";
import { useNavigate } from "react-router-dom";
const columnHelper = createColumnHelper();
const columns = [
  columnHelper.accessor("name", {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
    size: 150,
    maxSize: 150,
    minSize: 150,
  }),
  columnHelper.accessor((row) => row.emailId, {
    id: "emailId",
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>emailId</span>,
    footer: (info) => info.column.id,
    size: 250,
    maxSize: 250,
    minSize: 250,
  }),
  columnHelper.accessor("phone", {
    header: () => "phone",
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
    size: 300,
    maxSize: 300,
    minSize: 300,
  }),

];

function Applications() {
  let {  id } = useParams(); 
  const [applications, setApplications] = useState([]);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const navigate =useNavigate();
  useEffect(() => {
    // Fetch applications data for the given job ID from the server
    fetchApplications( id);
  }, [ id]);

  const fetchApplications = async ( id) => {
    try {
      const applications = dummyApplications[ id];
      setApplications(applications);
    } catch (error) {
      console.error('Error fetching applications:', error);
    }
  };
  const clickRow = (id)=>{
    navigate(`/home/application/${id}`);
  }
  const handleApplicationClick = (application) => {
    setSelectedApplication(application);
  };

  return (
    <div>
      <h2>Applications for Job ID: { id}</h2>
      {applications?.length === 0 ? (
        <p>No applications found.</p>
      ) : (

        <DataTable
        columns={columns}
        data={applications}
        clickRow={clickRow}
        />
        // <ul>
        //   {applications?.map((application) => (
        //     <li key={application.id} onClick={() => handleApplicationClick(application)}>
        //       <span>{application.name}</span>
        //       <span>{application.current_organisation}</span>
        //       <span>{application.emailId}</span>
        //       <span>{application.phone}</span>
        //       <span>{application.experience}</span>
        //       <span>{application.CTC}</span>
        //     </li>
        //   ))}
       // </ul>
      )}

      {selectedApplication && (
        <div>
          <h3>Selected Application</h3>
          <p>Name: {selectedApplication.name}</p>
          <p>Job Profile: {selectedApplication.jobProfile}</p>
          {/* Render other application details */}
        </div>
      )}
    </div>
  );
}

export default Applications;
