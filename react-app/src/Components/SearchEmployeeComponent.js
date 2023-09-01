import React, { Component } from 'react'
import EmployeeService from '../Service/EmployeeService';
import HeaderComponent from './HeaderComponent';


class SearchEmployeeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees:[]
        }
        this.empExpertise=this.setEmpExpertise.bind(this);
        
}
setEmpExpertise=(event)=>{
    this.setState({empExpertise:event.target.value});
}
searchEmployees=(e)=>{
    e.preventDefault();
    EmployeeService.searchEmployees(this.state.empExpertise).then((res)=>{
        console.log(res.data);
        this.setState({employees:res.data});
})
.catch(error=>{
    this.setState({error:error});
})
}
render(){
     return(
    <div className="container">
      <HeaderComponent/>
   <br/> <br/>
           <h2 className="text-center">All the Employee</h2>
           <div className="row">
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Employee name</th>
                        <th> Employee Availability</th>
                         <th> Employee Dept</th>
                         <th>Employee Expertise</th>
                        <th>Employee Experience</th>
                        <th>Employee rating</th>
                         <th>Action</th> 
                    </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.employees.map(
                                employee =>
                                <tr key={employee.empId}>
                                    <td>{employee.empName}</td>
                                    <td>{employee.empAvailability}</td>
                                    <td>{employee.empDept}</td>
                                    <td>{employee.empExpertise}</td>
                                    <td>{employee.empExperience}</td>
                                    <td>{employee.ratings}</td>
                                    <td>
                                        <button onClick={assignWork} type='button'className="btn btn-info" > Asssign Work</button> 
                                        
                                        <button  style={{marginLeft: "10px"}} onClick={giveRating} type='button'className="btn btn-info" >Give Ratings</button> 
                                        </td>
                                </tr>
                            )
                        }
                    </tbody>
            </table>
           </div>
           
        </div>

     )
    }
}
export default SearchEmployeeComponent