import { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
  faL,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import "./Register.css";
import { Link } from "react-router-dom";


//Validate The User
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
//Validate the Password
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = "/register";

const Register = () => {
  //User Input
  const userRef = useRef();
  //Handle Erros
  const errRef = useRef();

  //USER
  const [user, setUser] = useState("");
  //Is  the Name Valid?
  const [validName, setValidName] = useState(false);
  //When you are focusing to an Input Field
  const [userFocus, setUserFocus] = useState(false);

  //PASSWORD
  const [pwd, setPwd] = useState("");
  //Is  the Pasword Valid?
  const [validPwd, setValidPwd] = useState(false);
  //When you are focusing to an Input Field on Password
  const [pwdFocus, setPwdFocus] = useState(false);

  //PASSWORD MATCH
  const [matchPwd, setMatchPwd] = useState("");
  //Is  the Matching Pasword Valid?
  const [validMatch, setValidMatch] = useState(false);
  //When you are focusing to an Input Field on Password
  const [matchFocus, setMatchFocus] = useState(false);

  //POSSIBLE ERROR CASES
  const [errMsg, setErrMsg] = useState("");
  //Succes case
  const [success, setSuccess] = useState(false);

  //Setting the focus when the component loads
  useEffect(() => {
    //The foucus is in the username input
    userRef.current.focus();
  }, []);

  //Setting the focus on Validatin username
  useEffect(() => {
    //testing against the user
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
    //Optionally setValidName(USER_REGEX.test(user));
  }, [user]);

  //Setting the focus on Validatin Password
  useEffect(() => {
    //testing against the password
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, setPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  return (
    <div className="container">
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <h2 className="form-title">Register</h2>
      <form>
        <div className="main-user-info">
          <div className="user-input-box">
            <label htmlFor="fullName">
              UserName:
              <span className={validName ? "valid" : "hide"}>
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <span className={validName || !user ? "hide" : "invalid"}>
                <FontAwesomeIcon icon={faTimes} />
              </span>
            </label>
            <input
              type="text"
              id="username"
              name="fullName"
              //set focus on input
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              required
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
            />
            <p
              id="uidnote"
              className={
                userFocus && user && !validName ? "instructions" : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              4 to 24 characters.
              <br />
              Must begin with a letter.
              <br />
              Letters, numbers, underscores, hyphens allowed.
            </p>
            <label htmlFor="password">
              Password:
              <FontAwesomeIcon
                icon={faCheck}
                className={validPwd ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validPwd || !pwd ? "hide" : "invalid"}
              />
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />
            <p
              id="pwdnote"
              className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              8 to 24 characters.
              <br />
              Must include uppercase and lowercase letters, a number and a
              special character.
              <br />
              Allowed special characters:{" "}
              <span aria-label="exclamation mark">!</span>{" "}
              <span aria-label="at symbol">@</span>{" "}
              <span aria-label="hashtag">#</span>{" "}
              <span aria-label="dollar sign">$</span>{" "}
              <span aria-label="percent">%</span>
            </p>
            <label htmlFor="confirm_pwd">
              Confirm Password:
              <FontAwesomeIcon
                icon={faCheck}
                className={validMatch && matchPwd ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validMatch || !matchPwd ? "hide" : "invalid"}
              />
            </label>
            <input
              type="password"
              id="confirm_pwd"
              name="confirm_pwd"
              onChange={(e) => setMatchPwd(e.target.value)}
              value={matchPwd}
              required
              aria-invalid={validMatch ? "false" : "true"}
              aria-describedby="confirmnote"
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />
            <p
              id="confirmnote"
              className={
                matchFocus && !validMatch ? "instructions" : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              Must match the first password input field.
            </p>
            <button style={{ 
              backgroundColor: "green",
              width:570,
              height: 40,
              borderRadius:40,
              background:"white",
              border: "none",
              outline:"none",
            }}
              disabled={!validName || !validPwd || !validMatch ? true : false}
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>
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
  );
};

export default Register;
