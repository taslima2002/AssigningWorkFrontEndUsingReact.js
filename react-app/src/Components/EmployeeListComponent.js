import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import EmployeeService from '../Service/EmployeeService';
import HeaderComponent from './HeaderComponent';

const EmployeeListComponent = () => {
  const [clientId, setClientId] = useState(localStorage.getItem('clientId'));
  const [employees, setEmployees] = useState([]);
  const [empExpertise, setEmpExpertise] = useState('');
  const [error, setError] = useState('');
  const [output, setOutput] = useState('');

  const searchEmployees = (e) => {
    e.preventDefault();
    EmployeeService.searchEmployees(empExpertise)
      .then((res) => {
        console.log(res.data);
        setEmployees(res.data);
        
      })
      .catch((error) => {
        if (error.response && error.response.data && error.response.data.message) {
          console.log(error.response.data.message);
          setError(error.response.data.message);
          setOutput(error.response.data.message);
        } else {
          console.log("An error occurred");
          setError("An error occurred");
        }
      });
  };

  useEffect(() => {
    EmployeeService.getAllEmployees()
      .then((res) => {
        setEmployees(res.data);
        console.log(res.data);
      });
  }, []);

  return (
    <div className='text-center'style={{marginTop: '70px', textAlign: 'center' }}  >
        <HeaderComponent/>
      <h2 className="text-center">Employee List</h2>
      <div className="row">
        <div className="text-center justify-content-center d-flex">
          <div className="col-5 ">
            <input
              type="text"
              onChange={(e) => setEmpExpertise(e.target.value)}
              placeholder='Search domain'
            />
            <button
              className='btn btn-info'
              style={{ marginLeft: "10px" }}
              onClick={searchEmployees}
              type='submit'>Search
            </button>
          </div>
        </div>
      </div>
      {output === '' && (
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Employee name</th>
              <th>Employee Availability</th>
              <th>Employee Dept</th>
              <th>Employee Expertise</th>
              <th>Employee Experience</th>
              <th>Employee rating</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.empId}>
                <td>{employee.empName}</td>
                <td>{employee.empAvailability ? "Avail" : "Not Avail"}</td>
                <td>{employee.empDept}</td>
                <td>{employee.empExpertise}</td>
                <td>{employee.empExperience}</td>
                <td>{employee.ratings}</td>
                <td>
                  <Link to={`/user/${employee.empId}/assignwork`} type='button' className="btn btn-secondary">Assign Work</Link>
                  <Link to={`/user/${employee.empId}/giverating`} type='button' style={{ marginLeft: '5px' }} className="btn btn-success">Give Rating</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div>
        {output && (
          <div>
            <h2>{output}</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default EmployeeListComponent;
