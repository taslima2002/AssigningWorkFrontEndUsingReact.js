import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css'  ;
const SignupComponent = () => {
  const [clientId, setClientId] = useState('');
  const [password, setPassword] = useState('');
  const [clientName, setClientName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');
  const [output, setOutput] = useState('');

  const handleClientIdChange = (e) => {
    setClientId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleClientNameChange = (e) => {
    setClientName(e.target.value);
  };

  const handleCompanyNameChange = (e) => {
    setCompanyName(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const client = {
        clientId,
        password,
        clientName,
        companyName,
        location,
      };

      const response = await axios.post('http://localhost:8070/signup', client);

      if (response.data) {
        console.log('Signup successful');
        setOutput(response.data);
      } else {
        setError('Signup failed. Client ID already exists.');
      } 
    } catch (error) {
      console.error('Signup failed:', error);
      setError('Signup failed. Please try again.');
    }
  };
  return (
    <div  className='text-center1'  >
       
          <div className="card col-md-6 offset-md-3 offset-md-3">
    
      <h2 style={{ marginLeft: '70px',marginTop:'5px' }}>Signup</h2><br/>
      {output == '' &&
      <form onSubmit={handleSubmit} >
        {error && <div className="error">{error}</div>}
        <div class="mb-3"  style={{ marginLeft: '70px' }}  >
          <label class="form-label"  for="client id">Client ID:</label>
          <input type="text" class="form-control" id="clientId" placeholder="Client-id"value={clientId} onChange={handleClientIdChange} required />
        </div>
        <div  class="mb-3" style={{ marginLeft: '70px' }}>
          <label for="password" class ="form-label" >Password:  </label>
          <input type="password" class="form-control" id="password"  placeholder="password"value={password} onChange={handlePasswordChange} required />
        </div>
        <div   class="mb-3"  style={{ marginLeft: '70px' }}>
          <label htmlFor="clientName" class ="form-label">Client Name:</label>
          <input type="text" id="clientName" class="form-control" value={clientName} placeholder="Your Name"onChange={handleClientNameChange} required />
        </div>
        <div   class="mb-3" style={{ marginLeft: '70px' }} >
          <label htmlFor="companyName"class ="form-label">Company Name:</label>
          <input type="text" id="companyName" class ="form-control" placeholder=" Company Name "  value={companyName} onChange={handleCompanyNameChange} required />
        </div>
        <div   class="mb-3"  style={{ marginLeft: '70px' }}>
          <label htmlFor="location" class ="form-label" >Location:</label>
          <input type="text" id="location" class ="form-control"  placeholder=" Location  "value={location} onChange={handleLocationChange} required />
        </div>
        <div className="col-12">
        <button type="submit" className="btn btn-success"   style={{ marginLeft: '70px' }}>Signup</button>
        </div>
       
      </form>
       }
       <div>
         {
           output !='' && <div>
             <h2>{output}</h2>
             </div>
         }
       </div>
       <div style={{ marginLeft: '70px' ,marginTop:'2px', marginBottom:'15px'}}>
      <Link to="/login">Already have an account? Login</Link>
      </div>
    </div>
    
    </div>

  );
};

export default SignupComponent;
