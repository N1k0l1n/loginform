import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserService } from "../services/UserService";
import Swal from "sweetalert2"
import "./Login.css";

export default function Login() {
  let navigate = useNavigate();

  let [state, setState] = useState({
    loading: false,
    user: {
      email: "",
      password: ""
    },
    errorMessage: "",
  });

  //Data Binding
  let updateInput = (event) => {
    setState({
      ...state,
      user: {
        ...state.user,
        [event.target.name]: event.target.value,
      },
    });
  };

  //User Login
  let submitForm = async (event) => {
    event.preventDefault();
    try {
      let response = await UserService.login(state.user);
      if (response) {
          localStorage.setItem('user','test')
        navigate("/dashboard", { replace: true });
      }
    } catch (error) {
      Swal.fire("Error");
      setState({ ...state, errorMessage: error.message });
      navigate("/register", { replace: false });
    }
  };

  let { user } = state;

  return (
    <section>
      <div className="form-box">
        <div className="form-value">
          <form onSubmit={submitForm}>
            <h2>Login</h2>
            <div className="inputbox">
              <ion-icon name="mail-outline"></ion-icon>
              <input 
              name="email"
              value={user.email}
              onChange={updateInput} 
              type="email"
               required  />
              <label htmlFor="">Email</label>
            </div>
            <div className="inputbox">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <input 
              name="password"
              value={user.password}
              onChange={updateInput} 
              type="password"
               required 
               />
              <label htmlFor="">Password</label>
            </div>
            <div className="forget">
              <label htmlFor="">
                <input
                 name="myInput" 
                 type="checkbox" 
                 />
                Remeber Me
                <br />
                <p>Forgot Password?</p>
              </label>
            </div>
            <button
              type="submit"
              className="lg-button"
              style={{ background: "#007500" }}
            >
              Log in
            </button>
            <div className="register">
              Dont have an account?
              <Link className="link" to="/register">
                Register Now
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
