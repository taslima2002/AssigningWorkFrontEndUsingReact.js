import axios from 'axios';

class EmployeeService{

    getAllEmployees(){
        return axios.get('http://localhost:8070/getallemployee');
    }
    searchEmployees(empExpertise){
        return axios.get('http://localhost:8070/searchemployees/'+empExpertise);
    }
  
}
export default new EmployeeService()