import React from 'react'
import { Link} from 'react-router-dom';
// import GoogleMapReact from "google-map-react";

export default function Contact() {
  return (
    <div id="contact-area" className="contact-area bg-gray">
      <div className="container pb-90 pt-90">
        <div className="row">
          <div className="section-title text-center col-12 mb-45">
            <h3 className="heading">Contact Only Essex Driving</h3>
            <div className="excerpt">
              <p>We love to hear from you send us a message today.</p>
            </div>
            <i className="icofont icofont-traffic-light"></i>
          </div>
        </div>
        <div className="row">
          <div className="contact-info col-lg-4 col-sm-5 col-12">
            <div className="single-info text-left fix">
              <div className="icon">
                <i className="icofont icofont-phone"></i>
              </div>
              <div className="content fix">
                <h5>call us</h5>
                <p>
                  0330 0883 795 <br />
                  0784 1646 842
                </p>
              </div>
            </div>
            <div className="single-info text-left fix">
              <div className="icon">
                <i className="icofont icofont-envelope"></i>
              </div>
              <div className="content fix">
                <h5>your message</h5>
                <p>
                  <Link to="mailto:admin@onlyessexdriving.co.uk">
                    admin@onlyessexdriving.co.uk
                  </Link>
                  <Link to="https://onlyessexdriving.co.uk">
                    onlyessexdriving.co.uk
                  </Link>
                </p>
              </div>
            </div>
            <div className="single-info text-left fix">
              <div className="icon">
                <i className="icofont icofont-location-pin"></i>
              </div>
              <div className="content fix">
                <h5>our location</h5>
                <p>
                  Moor Lane, Upminster <br />
                  Essex, RM14 1EU.
                </p>
              </div>
            </div>
          </div>

          <div className="contact-form form text-left col-lg-8 col-sm-7 col-12">
            <form id="contact-form" action="mail.php" method="post">
              <div className="input-2">
                <div className="input">
                  <input type="text" name="name" placeholder="Name" />
                </div>
                <div className="input">
                  <input type="email" name="email" placeholder="E-mail" />
                </div>
              </div>
              <div className="input">
                <input type="text" name="subject" placeholder="Subject" />
              </div>
              <div className="input textarea">
                <textarea name="message" placeholder="Message"></textarea>
              </div>
              <div className="input input-submit">
                <input type="submit" value="send message" />
              </div>
            </form>
            <p className="form-messege"></p>
          </div>
        </div>
      </div>
      {/* <div id="contact-map"></div> */}
    </div>
  );
}
