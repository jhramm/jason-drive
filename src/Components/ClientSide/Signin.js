import React, { useState } from "react";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Signin() {

  const navigate = useNavigate();

    const [errors, setErrors] = useState({
      email: "",
      password: "",
    });

    const signin = (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      let errors= {};
      if (!email) {
        errors.email = "Email required"
      }
      if (!password) {
        errors.password = "Password required"
      }

      setErrors(errors);

      if (Object.keys(errors).length > 0) {
        return;
      }

      const payload = {
        email,
        password
      }
      axios.post("http://localhost:8080/login", payload).then((res) => {
      console.log(res);
      localStorage.setItem("signin", true);
      localStorage.setItem("firstName", res.data.firstName);
      localStorage.setItem("email", res.data.email);

      NotificationManager.success("Login successful");
      navigate("/");
      }).catch((e) => {
        NotificationManager.error("Login failed");
        console.log(e);
      })
    }

  return (
    <div id="contact-area" className="contact-area bg-gray">
      <NotificationContainer />
      <div className="container pb-90 pt-90">
        <div className="row">
          <div className="section-title text-center col-12 mb-45">
            <h3 className="heading">LOGIN</h3>
            <div className="excerpt">
              <p>Sign Into Your Account</p>
            </div>
            <i className="icofont icofont-traffic-light"></i>
          </div>
        </div>
        <div className="form text-center col-lg-12">
          <h3>Signin Credentials</h3>
          <br></br>
          <form id="contact-form" method="post" onSubmit={signin}>
            <div className="form-group">
              <input type="text" name="email" id="email" placeholder="EMAIL" />
              {errors.email && <span className="error">{errors.email}</span>}
              <input
                type="password"
                name="password"
                n
                id="password"
                placeholder="PASSWORD"
              />
              {errors.password && (
                <span className="error">{errors.password}</span>
              )}
            </div>

            <div className="input input-submit">
              <input type="submit" value="Login" />
            </div>
            <br />
            <br />
            <div className="input input-submit">
              <input type="submit" value="Forgot Password?" />
            </div>
          </form>
          <p className="form-messege"></p>
        </div>
      </div>
    </div>
  );
}
