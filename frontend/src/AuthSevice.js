//make the http request
import axios  from "axios";
// connect to the api
const API_BASE_URL="http://localhost:8080/api";
class AuthService{
    register(utilisateur){
        return axios.post(`${API_BASE_URL}/register`,utilisateur);

    }
    authentifiation(credentails){
        return axios.post(`${API_BASE_URL}/authentification`,credentails)
    }
}export default  AuthService;