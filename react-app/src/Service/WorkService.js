import axios from 'axios';
class WorkService{
    assignWork(WorkModel){
        return axios.post('http://localhost:8070/assignwork',WorkModel);
    }
    giveRatingsToEmployees(work,rating){
        return axios.put('http://localhost:8070/giveratingstoemployee/'+work+'/'+rating);
    }
    getWorkIdbyEmpId(employeeId){
        return axios.get('http://localhost:8070/getworkidbyempid/'+employeeId);
    }
    getWorksByClientId(clientId){
        return axios.get('http://localhost:8070/getworksbyclientid/'+clientId);
    }
}
export default new  WorkService()