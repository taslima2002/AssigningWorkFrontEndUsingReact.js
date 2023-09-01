import React from 'react';
import HeaderComponent from './HeaderComponent';

const AboutComponent = () => {
  return (
    <div style={{display: 'flex' ,alignItems: 'center', justifyContent: 'center', textAlign: 'center', height: '100vh'}}>
       <HeaderComponent/> 
    <div  >
        <div className='text-center' >
      <h2>About Assigning Work Management   </h2><br/>
      </div>
      <br></br>
      <div className='text-center'>
      <p><i>
        The Assigning Work Management application helps you manage and assign tasks or work within your organization. <br/>It provides a centralized platform for assigning and organizing work to improve
        productivity and collaboration. 
        </i>

      </p>
      <h4>  Key Features:</h4>
        <ul>
          <li>Find the best employee </li>
          <li>Assign tasks to a employee</li>
          <li>Set deadlines and priorities for tasks</li>
          <li>Manage task dependencies and relationships</li>
          <li>Give Rating</li>
        </ul>
      </div>

      </div>

     {/* <div style={{ display: 'flex', justifyContent: 'left', marginLeft:"20px",height: '100vh' }}> */}
      
 </div>
    // </div>
  );
};

export default AboutComponent;
