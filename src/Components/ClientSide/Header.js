import React from 'react';
import NavBar from "./NavBar";


export default function Header() {
  return (
    <div className="header-area header-absolute header-transparent header-full-width">
      <div className="header-top d-none d-md-block">
        <div className="container">
          <div className="header-top-wrapper row">
            <div className="header-top-left text-left col-md-6 col-12">
              <p>
                <i className="icofont icofont-envelope"></i>
                <span>admin@onlyessexdriving.co.uk</span>
              </p>
              <p>
                <i className="icofont icofont-ui-call"></i>
                <span>0330 0883 795</span>
              </p>
            </div>
            <div className="header-top-right text-right col-md-6 col-12">
              <p>
                <i className="icofont icofont-clock-time"></i>
                <span>Mon - Sat : 8am - 9pm</span>
              </p>
            </div>
          </div>
        </div>
      </div>
     <NavBar/>
    </div>
  );
}
