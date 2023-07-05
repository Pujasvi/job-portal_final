import React from 'react'
import Sidebar from './sideNav/sideNav';
import { Routes ,Route ,Router} from 'react-router-dom';
import EmployerForm from './employerForm/EmployerForm';
import EmployerTable from './data-table/DataTable';
import Employer from '.';
const EmployerRoutes = () => {
  return (
    <div>
      
      <div className="main-content">
        <Routes>
        <Route path="/home" element = {<Employer/>}  />
          <Route path="/home/post-job" element = {<EmployerForm/>} />
          <Route path="/home/view-jobs" element={<Employer/>} />
        
        </Routes>
      </div>
    </div>
  );
};
export default EmployerRoutes