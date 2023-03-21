import axios from "axios";

export class UserService {
  static serverURL = `http://localhost:5001/api/User`;
  static serverURL1 = `http://localhost:5001/api/Authentication/Register`;
  static serverURL2 = `http://localhost:5001/api/Authentication/Login`;

  static getAllUsers() {
    let dataURL = `${this.serverURL}/users`;
    return axios.get(dataURL);
  }

  static getUser(userId) {
    let dataURL = `${this.serverURL}/${userId}`;
    return axios.get(dataURL);
  }

  static createUser(user) {
    let dataURL = `${this.serverURL}/create`;
    return axios.post(dataURL, user);
  }

  static updateUser(user, userId) {
    let dataURL = `${this.serverURL}`;
    return axios.put(dataURL, user);
  }

  static deleteUser(userId) {
    let dataURL = `${this.serverURL}/${userId}`;
    return axios.delete(dataURL);
  }
  static registration(user) {
    let dataURL = `${this.serverURL1}`;
    return axios.post(dataURL, user);
  }
  static login(user) {
    let dataURL = `${this.serverURL2}`;
    return axios.post(dataURL, user);
  }
}
