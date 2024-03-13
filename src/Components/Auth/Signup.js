import React, { useState } from "react";
import axios from "axios";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";

export default function Signup() {
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    streetName: "",
    county: "",
    city: "",
    postcode: "",
  });

  const signup = (e) => {
    e.preventDefault();
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const password = document.getElementById("password").value;
    const streetName = document.getElementById("streetName").value;
    const county = document.getElementById("county").value;
    const city = document.getElementById("city").value;
    const postCode = document.getElementById("postcode").value;

    // Validation logic
    let errors = {};
    if (!firstName) {
      errors.firstName = "First Name is required";
    }
    if (!lastName) {
      errors.lastName = "Last Name is required";
    }
    if (!email) {
      errors.email = "Email is required";
    }
    if (!phoneNumber) {
        errors.phoneNumber = "Phone Number is required";
    }
    if (!password) {
        errors.password = "Password is required";
    }
    if (!streetName) {
        errors.streetName = "Street Name is required";
    }
    if (!county) {
        errors.county = "County is required";
    }
    if (!city) {
        errors.city = "City is required";
    }
    if (!postCode) {
        errors.postcode = "Postcode is required";
    }


    setErrors(errors);

    // If there are errors, prevent form submission
    if (Object.keys(errors).length > 0) {
      return;
    }

    const payload = {
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
      streetName,
      county,
      city,
      postCode,
    };

    axios
      .post("http://localhost:8080/signup", payload)
      .then(() => {
        NotificationManager.success("Signup successful");
      })
      .catch((error) => {
        console.error("Signup failed:", error);
        NotificationManager.error("Signup Failed");
      });
  };

  return (
    <div id="contact-area" className="contact-area bg-gray">
      <NotificationContainer />
      <div className="container pb-90 pt-90">
        <div className="row">
          <div className="section-title text-center col-12 mb-45">
            <h3 className="heading">SIGN UP</h3>
            <div className="excerpt">
              <p>Sign up for an account today!</p>
            </div>
            <i className="icofont icofont-traffic-light"></i>
          </div>
        </div>
        <div className="form text-center col-lg-12">
          <br></br>
          <form id="contact-form" method="post" onSubmit={signup}>
            <h5>Personal Details</h5>
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Enter First Name"
              />
              {errors.firstName && (
                <span className="error">{errors.firstName}</span>
              )}
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Enter Last Name"
              />
              {errors.lastName && (
                <span className="error">{errors.lastName}</span>
              )}
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter E-mail"
              />
              {errors.email && <span className="error">{errors.email}</span>}
              <input
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="Enter Phone Number"
              />
              {errors.phoneNumber && (
                <span className="error">{errors.phoneNumber}</span>
              )}
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password"
              />
              {errors.password && (
                <span className="error">{errors.password}</span>
              )}
            </div>
            <h5>Address Details</h5>
            <div className="form-group">
              <input
                type="text"
                name="streetName"
                id="streetName"
                placeholder="Enter Street Name"
              />
              {errors.streetName && (
                <span className="error">{errors.streetName}</span>
              )}
              <input
                type="text"
                name="county"
                id="county"
                placeholder="Enter County"
              />
              {errors.county && <span className="error">{errors.county}</span>}
              <input
                type="text"
                name="city"
                id="city"
                placeholder="Enter City"
              />
              {errors.city && <span className="error">{errors.city}</span>}
              <input
                type="text"
                name="postcode"
                id="postcode"
                placeholder="Enter Postcode"
              />
              {errors.postcode && (
                <span className="error">{errors.postcode}</span>
              )}
            </div>
            <div className="input input-submit">
              <input type="submit" value="Sign Up" />
            </div>
          </form>
          <p className="form-messege"></p>
        </div>
      </div>
    </div>
  );
}
