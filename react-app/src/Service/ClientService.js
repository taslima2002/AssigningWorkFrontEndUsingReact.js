import axios from "axios";
class ClientService {

    signUp(client) {
        return axios.post('http://localhost:8070/signup',client)
    }
    loginClient(clientId,password){
        return axios.get('http://localhost:8070/login'+'/'+clientId+'/'+password);
    }
}
export default new ClientService() 