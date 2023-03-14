import React from "react";
import "../src/Login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <section>
      <div className="form-box">
        <div className="form-value">
          <form action="">
            <h2>Login</h2>
            <div className="inputbox">
              <ion-icon name="mail-outline"></ion-icon>
              <input type="email" required />
              <label htmlFor="">Email</label>
            </div>
            <div className="inputbox">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <input type="password" required />
              <label htmlFor="">Password</label>
            </div>
            <div className="forget">
              <label htmlFor="">
                <input name="myInput" type="checkbox" />
                Remeber Me
                <br />
                <a>Forgot Password?</a>
              </label>
            </div>
            <button>Log in</button>
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
