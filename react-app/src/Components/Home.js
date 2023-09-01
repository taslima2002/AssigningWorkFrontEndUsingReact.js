import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import HeaderComponent from "./HeaderComponent";


const Home = () => {
  const [clientId, setClientId] = useState(localStorage.getItem('clientId'))
  const[clientName ,setClientName] = useState(localStorage.getItem('clientName'));
  return (
   
    <div     style={{ backgroundImage: 'url("/831613.webp")', backgroundSize:'cover', height: '100vh',   display: 'flex',alignItems: 'center', justifyContent: 'center',
    flexDirection: 'column', textAlign: 'center'}}>
       <HeaderComponent/>
    <div className="home-container">
      <div className="text-center">
        <div>
          <p className="mb-3" style={{ fontSize: '35px', fontStyle: 'bold', color: 'white', fontStyle:'italic' }}> {clientName}</p>
          <h2 className="mb-3" style={{ fontSize: '40px', fontStyle: 'italic' }}>Welcome to AssignWork</h2>
          <p style={{ fontSize: '35px', fontStyle: 'italic' }}>
            <strong>Here you can assign your work</strong> to the most suitable person for the job.
          </p>
          <Link to={`/user/employeeList`} className="btn btn-primary">
            Get Started
          </Link>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Home;
