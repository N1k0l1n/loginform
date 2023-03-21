import { useRef, useState, useEffect, SyntheticEvent } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import { UserService } from "../services/UserService";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    let navigate = useNavigate();
  
    let [state, setState] = useState({
      loading: false,
      user: {
        name: "",
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
  
    //User Creation
    let submitForm = async (event) => {
      event.preventDefault();
      try {
        let response = await UserService.registration(state.user);
        if (response) {
          navigate("/login", { replace: true });
        }
      } catch (error) {
        setState({ ...state, errorMessage: error.message });
        navigate("/register", { replace: false });
      }
    };
  
    let { loading, user, errorMessage } = state;
  return (
    <>
      <div className="encapsulate">
        <form onSubmit={submitForm}>
          <div className="registerContainer">
            <h2 className="form-title">Register</h2>
            <div className="main-user-info">
              <div className="user-input-box">
                <label htmlFor="fullName">
                  UserName:
                  <FontAwesomeIcon
                    icon={faCheck}
                  />
                  <FontAwesomeIcon
                    icon={faTimes}
                  />
                </label>
                <input
                  type="text"
                  id="username"
                  name="name"
                  value={user.name}
                  onChange={updateInput}
                  required
                />
                <label htmlFor="email">
                  Email:
                  <FontAwesomeIcon icon={faCheck} />
                  <FontAwesomeIcon icon={faTimes} />
                </label>
                <input
                   type="text"
                   id="email"
                   name="email"
                   value={user.email}
                   onChange={updateInput}
                   required
                />
                <p id="confirmnote">
                  <FontAwesomeIcon icon={faInfoCircle} />
                  Email must have the correct email format.
                </p>

                <label htmlFor="password">
                  Password:
                  <FontAwesomeIcon icon={faCheck} />
                  <FontAwesomeIcon icon={faTimes} />
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={user.password}
                  onChange={updateInput}
                />
                <p id="pwdnote">
                  <FontAwesomeIcon icon={faInfoCircle} />
                  8 to 24 characters.
                  <br />
                  Must include uppercase and lowercase letters, a number and a
                  special character.
                  <br />
                  Allowed special characters:
                  <span aria-label="exclamation mark">!</span>
                  <span aria-label="at symbol">@</span>
                  <span aria-label="hashtag">#</span>
                  <span aria-label="dollar sign">$</span>
                  <span aria-label="percent">%</span>
                </p>

                <button type="submit" className="rg-button">Sign Up</button>
              </div>
            </div>
            <p>
              Already registered?
              <br />
              <span className="form-submit-btn">
                <Link className="link" to="/login">
                  Login Now
                </Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
