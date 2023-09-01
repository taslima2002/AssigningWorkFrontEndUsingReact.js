
import React, { useEffect, useState } from 'react';
import WorkService from '../Service/WorkService';
import { useNavigate, useParams } from 'react-router-dom';
import HeaderComponent from './HeaderComponent';

const GiveRatingComponent = () => {
 const{empId}=useParams();
 const [workId, setWorkId] = useState('');
  const [ratings, setRatings] = useState(0);
  const [error, setError] = useState('');
  const [output, setOutput] = useState('');
  const navigate = useNavigate();
 
  useEffect(() => {
    
    WorkService.getWorkIdbyEmpId(empId)
    .then(res =>{
      console.log(res.data);
      setWorkId(res.data);
      
    })
    .catch(err =>{
      console.log(err.response.data.message);
      setError(err.response.data.message);
      
    })
  }, []);

  const handleRatingChange = (e) => {
    setRatings(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    WorkService.giveRatingsToEmployees(workId, ratings)
      .then(response => {
        console.log(response);
        setOutput(response);
      })
      .catch(error => {
        console.log(error);
        setError(error.response.data.message);
       setOutput(error.response.data.message);
      });
  };
  const back = () => {
    navigate('/user/employeeList');
  };
  return (
    <div>
      <HeaderComponent/>
    <div className= "text-center" style={{ fontStyle: 'italic', marginTop: '70px'}}>
      <h3>Give Rating</h3>
      {output == '' &&
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="workId">Work ID:</label>
            <input type="text" id="workId" value={workId} disabled />
          </div>
          <div>
            <label htmlFor="ratings">Rating:</label>
            <input type="number" id="rating" min="0" max="5" value={ratings} onChange={handleRatingChange} />
          </div>
          <button type="submit">Submit</button>
          <div>
          <button
            className="btn btn-info"
            onClick={back}
            style={{ marginLeft: '10px' }}> Back
          </button>
          </div>
        </form>
      }
<div>
  {
    output !='' && <div>
      <h2>{output.data}</h2>
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
  );
};

export default GiveRatingComponent;
