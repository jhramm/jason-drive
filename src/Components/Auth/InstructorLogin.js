import React, { useState } from 'react'
import axios from 'axios';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import "react-notifications/lib/notifications.css";
import { useNavigate } from 'react-router-dom';

export default function InstructorLogin() {
   const [errors, setErrors] = useState({
    username: "",
    password: "",
   });
    const navigate = useNavigate();
    const login = (e) => {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        let errors = {};
        if (!username) {
            errors.username = "Username is required";    
        }
        if (!password) {
            errors.password = "Password is required";
        }

        setErrors(errors);

        if (Object.keys(errors).length > 0) {
            return;
        }
        const payload = {
            username,
            password
        }

        axios.post('https://drivinginstructorsdiary.com/app/api/auth', payload).then((res) => {
          NotificationManager.success("Login successful");
          navigate("/adminPanel", {state: {data: res.data.data.user}});
        }).catch((e) => {
          NotificationManager.error("Unable to login");
          console.log(e)
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
         <br></br>
         <form id="contact-form" method="post" onSubmit={login}>
         
           <div className="form-group">
             <input
               type="text"
               name="username"
               id="username"
               placeholder="USERNAME"
             />
            {errors.username && (
                <span className='error'>{errors.username}</span>
            )}
             <input
               type="password"
               name="password"
               id="password"
               placeholder="PASSWORD"
             />
             {errors.password && (
                <span className='error'>{errors.password}</span>
             )}
           </div>
         
           <div className="input input-submit">
             <input type="submit" value="Login" />
           </div>
         </form>
         <p className="form-messege"></p>
       </div>
     </div>
   </div>
 );
}
