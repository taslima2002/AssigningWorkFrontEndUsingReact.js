import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WorkService from '../Service/WorkService';
import HeaderComponent from './HeaderComponent';

const AssignedWorkComponent = () => {
  const [works, setWorks] = useState([]);
  const [clientId, setClientId] = useState(localStorage.getItem('clientId'));

  useEffect(() => {
    WorkService.getWorksByClientId(clientId)
      .then(response => {
        setWorks(response.data);
      })
      .catch(error => {
        console.error('Error fetching assigned works:', error);
      });
  }, [clientId]);

  return (
    <div  style={{ backgroundImage: 'url("/831613.webp")', backgroundSize:'cover',   display: 'flex'}}>
       <HeaderComponent/>
    <div>
    <h2 style={{ fontStyle: 'italic', marginTop: '70px', textAlign: 'center' }}>Assigned Works</h2>
    {works.length > 0 ? (
        <div className="row" >
       {works.map((work, index) => (
    <div class="col-sm-3">
    <div class="card">
      <div class="card-body">      
            <div className="card" key={work.workId} >
              <div className="card-header">
                <p>Work ID: {work.workId}</p>
                <p>Work Type: {work.workType}</p>
              </div>
              <div className="card-body">
                <p>Start Date: {work.workstartDate}</p>
                <p>End Date: {work.workEndDate}</p>
                <p>Domain Requirement: {work.domainRequirement}</p>
                <p>Client ID: {work.clientId}</p>
                <p>Employee ID: {work.empId}</p>
              </div>
              </div>
            </div>
            </div>
            </div>
          ))}
        </div>
       
      ) : (
        <p>No assigned works found.</p>
      )}
    </div>
  </div>
    
  );
};

export default AssignedWorkComponent;
