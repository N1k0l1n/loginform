import axios from "axios"

export class UserService{
    static serverURL = `https://localhost:7030/api/User`;

    static getAllUsers(){
        let dataURL =`${this.serverURL}/users`;
        return axios.get(dataURL);
    }

    static getUser(userId){
        let dataURL = `${this.serverURL}/${userId}`;
        return axios.get(dataURL);
    }

    static createUser(user){
        let dataURL =`${this.serverURL}/create`;
        return axios.post(dataURL, user);
    }
}