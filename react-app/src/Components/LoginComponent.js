import { useState } from "react";
import ClientService from "../Service/ClientService";
import { Link, useNavigate } from "react-router-dom";
import './Login.css';

const LoginComponent = ({  }) => {


  const navigate = useNavigate();
  const [clientId, setClientId] = useState(localStorage.getItem('clientId'))
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const handleClientIdChange = (e) => {
    setClientId(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      ClientService.loginClient(clientId, password)
      .then(res =>{
        console.log(res);
        console.log('User logged in: ', res.data.clientId);
        setClientId(res.data.clientId);
        localStorage.setItem('clientId', clientId);
        localStorage.setItem('clientName', res.data.clientName);
        setPassword('');
        localStorage.setItem('companyName',res.data.companyName);
        localStorage.setItem('location',res.data.location);
        navigate('/user');
      })
      .catch(err =>{
        setError('Invalid id or password'+err);
      })
      
    } catch (error) {
      console.error('Login failed:', error);
      setError('Login failed. Please try again.');
    }
  };
  const handleSignUp = () => {
    navigate("/signup");
  };
  return (
      <div style={{ backgroundImage: 'url("/draw2.webp")', backgroundSize:'cover', height: '100vh',   display: 'flex', textAlign: 'center',marginTop:'60px',justifyContent:'flex-end', flexDirection: "row",alignItems:'center', backgroundPosition:'center' }}>
    <div className="login-form" style={{ backgroundColor: "white", padding: "70px" ,marginRight:'50px'}}>
        <h1 style={{ marginBottom: '25px' }}>Login  </h1>
       
        <form onSubmit={handleSubmit} >
          {error && <div className="error">{error}</div>}
          <div className="fields" style={{ marginBottom: '15px' }}> 
            <div className="col-10 ">
              <label style={{ marginBottom: '9px' }} htmlFor="ClientId">LOGIN ID: </label>
              <input 
                type="clientId"
                id="clientId"
                value={clientId}
                onChange={handleClientIdChange}
                required />
            </div>
          </div>
          <div className="fields" style={{ marginBottom: '15px' }}>
            <div className="col-10  ">
              <label  style={{ marginBottom: '15px' }} htmlFor="password">PASSWORD:</label>
              <input type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange} required />
            </div>
          </div>
          <div className="mb-5" >
          <button class="btn btn-primary" type="submit"  >Login</button>
          </div>
          <div style={{ marginBottom: '5px' }}>
          <Link to="/signup" onClick={handleSignUp}>Don't have an account? Sign up</Link>
          </div>
        </form>
      </div>
      </div>
  );
};
export default LoginComponent;