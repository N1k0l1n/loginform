import React from "react";
import '../src/Register.css'

export default function Register() {
  return (
    <section>
      <div className="form-box">
        <div className="form-value">
          <form action="">
            <h2>Register</h2>
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
                <a href="#">Forgot Password?</a>
              </label>
            </div>
            <button>Log in</button>
            <div className="register">
              <p>
                Dont have an account?<a href="#">Register</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
