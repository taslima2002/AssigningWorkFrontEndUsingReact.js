
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import EmployeeListComponent from './Components/EmployeeListComponent';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import Home from './Components/Home';
import LoginComponent from './Components/LoginComponent';
import AssignWorkComponent from './Components/AssignWorkComponent';
import SignUpComponent from './Components/SignUpComponent';
import AboutComponent from './Components/AboutComponent';
import ContactComponent from './Components/ContactComponent';
import GiveRatingComponent from './Components/GiveRatingComponent';
import AssignedWorkComponent from './Components/AssignedWorksComponent';
import Profile from './Components/Profile';


function App() {
  return (
  
    <Router>
        <Routes>
          <Route path="/" element={<LoginComponent />} />  
          <Route path="/signup" element={<SignUpComponent />} />
        </Routes>
      <div>      
        <Routes>
       
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/about" element={<AboutComponent />} />
          <Route path="/contact" element={<ContactComponent/>} />
          <Route path="/assignedWorks" element={<AssignedWorkComponent />}/>
          <Route path="/user" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/user/employeeList" element={<EmployeeListComponent />} />
          <Route path="/user/:empId/assignwork" element={<AssignWorkComponent />} />
          <Route path="/user/:empId/giverating" element={<GiveRatingComponent />} />
                </Routes>
        <FooterComponent />
      </div>
    </Router>
  )
}

export default App;
