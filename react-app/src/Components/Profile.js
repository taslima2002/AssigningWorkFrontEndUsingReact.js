import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import ClientService from "../Service/ClientService";
import HeaderComponent from "./HeaderComponent";


const Profile = () => {
  const [clientId, setClientId] = useState(localStorage.getItem('clientId'))
  const [clientName, setClientName] = useState(localStorage.getItem('clientName'))
  const [companyName , setCompanyName]= useState(localStorage.getItem('companyName'  ))
  const [location , setLocation  ]= useState(localStorage.getItem('location'))
  const [error, setError] = useState('');

 
       

  return (
    <div     style={{ backgroundSize:'cover', height: '100vh',   display: 'flex',justifyContent:'center'}}>
    <HeaderComponent/>
    <div style={{width:'100%',marginTop:'100px'}}>
        <h2> Profile Details </h2>
        <div>
        <table class ="table table-sm-8">
            <thead>
            <tr className="table-danger" style={{ marginBottom: '30px' }}>
                    <th scope="col"> Client Id</th>
                    <th scope="col">{clientId}</th>
                </tr>
                <tr className="table-danger"  style={{ marginBottom: '30px' }}>
                    <th scope="col"> Client Name </th>
                    <th scope="col">{clientName}</th>

                </tr>
                <tr className="table-danger"   style={{ marginBottom: '30px' }}>
                    <th scope="col"> Company Name</th>
                    <th scope="col">{companyName}</th>
                </tr>
                <tr className="table-danger"  style={{ marginBottom: '30px' }}>
                    <th scope="col"> Location </th>
                    <th scope="col">{location}</th>
                </tr>
            </thead>

        </table>
        </div>
    </div>
    </div>
    
  );
};

export default Profile;
