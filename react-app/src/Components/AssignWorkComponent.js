import React, { useState } from 'react';
import WorkService from '../Service/WorkService';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import HeaderComponent from './HeaderComponent';

const AssignWorkComponent = () => {
  const { empId } = useParams();
  const [clientId] = useState(localStorage.getItem('clientId'))
  const navigate = useNavigate();
  const [workType, setWorkType] = useState('');
  const [workstartDate, setWorkstartDate] = useState('');
  const [workEndDate, setWorkEndDate] = useState('');
  const [employeeId, setemployeeId] = useState('');
  const [domainRequirement, setDomainRequirement] = useState('');
  const [error, setError] = useState('');
  const [output, setOutput] = useState('');
  
  const handleWorkTypeChange = (event) => {
    setWorkType(event.target.value);
  };

  const handleWorkStartDateChange = (event) => {
    setWorkstartDate(event.target.value);
  };

  const handleWorkEndDateChange = (event) => {
    setWorkEndDate(event.target.value);
  };
  const handleemployeeId = (event) => {
    setemployeeId(event.target.value);
  };

  const handleDomainRequirementChange = (event) => {
    setDomainRequirement(event.target.value);
  };

  const saveWork = (event) => {
    event.preventDefault();

    const work = {
      clientId: clientId,
      workType,
      workstartDate,
      workEndDate,
      empId,
      domainRequirement,
    };
    console.log(work);

    WorkService.assignWork(work)
      .then((res) => {
        console.log(res.data);
        setOutput(res.data);
        
      })

      .catch((err) => {
        console.log(err.response.data.message);
        setError(err.response.data.message);
      });
  };
  const back = () => {
    navigate('/user/employeeList');
  };
  const cancel = () => {
    navigate('/user');
  };

  return (
    
    <div style={{marginTop: '70px', textAlign: 'center' }} >
       <HeaderComponent/>
      <br />
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <div className="card-body">

              {
                output == '' &&
                <form>
                  <div className="form-group" style={{marginBottom:'5px'}}>
                    <label>Work type:</label>
                    <input
                      placeholder="Work type"
                      name="workType"
                      className="form-control"
                      value={workType}
                      onChange={handleWorkTypeChange}
                    />
                  </div>
                  <div className="form-group" style={{marginBottom:'5px'}}> 
                    <input
                      placeholder="Work start date"
                      type='Date'
                      name="workStartDate"
                      className="form-control"
                      value={workstartDate}
                      onChange={handleWorkStartDateChange}
                    />
                  </div>
                  <div className="form-group"style={{marginBottom:'5px'}} >
                    <input
                      placeholder="Work end date"
                      name="workEndDate"
                      type='date'
                      className="form-control"
                      value={workEndDate}
                      onChange={handleWorkEndDateChange}
                    />
                  </div>
                  {/* <div className="form-group" style={{marginBottom:'5px'}}>
                    <input
                      placeholder="Enter Employee Id"
                      name="employeeId"
                      className="form-control"
                      value={empId}
                      disabled
                    />
                  </div> */}
                  <div className="form-group" style={{marginBottom:'3px'}}>
                    <input
                      placeholder="Domain Requirement"
                      name="domainRequirement"
                      className="form-control"
                      value={domainRequirement}
                      onChange={handleDomainRequirementChange}
                    />
                  </div>
                  <button className="btn btn-success"  onClick={saveWork}> Save
                  </button>

                  <button
                 
                    className="btn btn-danger"
                    onClick={cancel}
                    style={{ marginLeft: '10px' }}
                  >
                    Cancel
                  </button>
                </form>
                }
              <div>
                {
                  output != '' && <div>
                    <h2> {output}</h2>
                    <div>
          <button
            className="btn btn-info"
            onClick={back}
            style={{ marginLeft: '10px' }}> Back
          </button>
          </div>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignWorkComponent;

