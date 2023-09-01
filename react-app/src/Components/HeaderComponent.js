import React from 'react';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
  return (
    <header style={{ position: 'fixed', top: 0, width: '100%', zIndex: 999 }}>
      <div className="container-fluid px-0">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className='px-4'>
            <Link to="/user/employeeList" className="navbar-brand"  style={{ fontSize: '22px',color:'green ',fontWeight: 'bold',fontFamily: 'fjalla'}}>
              Assign Work
            </Link>
          </div>

          <div className="collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link className="nav-link px-4" to="/user"  style={{ fontSize: '20px' }}>
                  Home
                </Link>
              </li>
            
            <li className="nav-item">
                <Link className="nav-link px-4" to="/assignedWorks"  style={{ fontSize: '20px' }}>
                  Assigned Works
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-4" to="/about"  style={{ fontSize: '20px' }} >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-4" to="/contact"  style={{ fontSize: '20px' }} >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-4" to="/profile"  style={{ fontSize: '20px' }} >
                  Profile
                </Link>
              </li>
             
            </ul>
            <div className='px-2'>
              <Link type="button" className="btn btn-light" to="/"  style={{ fontSize: '20px' }}>
                Log Out
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default HeaderComponent;
