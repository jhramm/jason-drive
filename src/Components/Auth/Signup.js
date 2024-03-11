import React from "react";
import axios from "axios";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import * as Yup from "yup";

export default function Signup() {
  const signup = async (e) => {
    e.preventDefault();

    const schema = Yup.object().shape({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phoneNumber: Yup.string().required("Phone Number is required"),
      password: Yup.string().required("Password is required"),
      streetName: Yup.string().required("Street Name is required"),
      county: Yup.string().required("County is required"),
      city: Yup.string().required("City is required"),
      postcode: Yup.string().required("Postcode is required"),
    });

    const formData = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      phoneNumber: e.target.phoneNumber.value,
      password: e.target.password.value,
      streetName: e.target.streetName.value,
      county: e.target.county.value,
      city: e.target.city.value,
      postcode: e.target.postcode.value,
    };

    try {
      await schema.validate(formData, { abortEarly: false });

      // If validation passes, proceed with form submission
      axios
        .post("http://localhost:8080/signup", formData)
        .then(() => {
          NotificationManager.success("Signup successful");
        })
        .catch((error) => {
          console.error("Signup failed:", error);
          NotificationManager.error("Signup Failed");
        });
    } catch (error) {
      // If validation fails, display error messages
      const errorMessage = error.inner.map((err) => err.message).join("\n");
      NotificationManager.error(errorMessage);
    }
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
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Enter First Name"
              />
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Enter Last Name"
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter E-mail"
              />
              <input
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="Enter Phone Number"
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="streetName"
                id="streetName"
                placeholder="Enter Street Name"
              />
              <input
                type="text"
                name="county"
                id="county"
                placeholder="Enter County"
              />
              <input
                type="text"
                name="city"
                id="city"
                placeholder="Enter City"
              />
              <input
                type="text"
                name="postcode"
                id="postcode"
                placeholder="Enter Postcode"
              />
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
