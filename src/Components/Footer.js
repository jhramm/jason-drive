import React from 'react';
import{ Link} from 'react-router-dom';
import Logo from '../img/logo.png';


export default function Footer() {
  return (
    <div className="footer-area overlay overlay-black overlay-70 pt-90">
      <div className="container">
        <div className="row">
          <div className="footer-widget text-left col-lg-3 col-md-6 col-12">
            <h4 className="widget-title">About Only Essex Driving</h4>
            <div className="about-widget">
              <p>
                It is a long established fact that is a reader will be
                distracted by the readable content of page when looking at its
                layout. it’s the more fact that is reader will be by the
                readable looking its layout.
              </p>
              <img src={Logo} alt='logo' />
            </div>
          </div>
          <div className="footer-widget text-left col-lg-3 col-md-6 col-12">
            <h4 className="widget-title">quick contact</h4>
            <div className="contact-widget">
              <p>
                Flor. 4, House. 15, Block-C. <br />
                Banasree Main Road, Dhaka.
              </p>
              <p>
                +880 1912 345 678 <br />
                +880 1912 345 678
              </p>
              <p>
                <Link to="#">driveonskill@email.com</Link>
                <Link to="#">www.driveon.com</Link>
              </p>
            </div>
          </div>
          <div className="footer-widget text-left col-lg-3 col-md-6 col-12">
            <h4 className="widget-title">Help & Support</h4>
            <div className="link-widget">
              <ul>
                <li>
                  <Link to="#">Faq</Link>
                </li>
                <li>
                  <Link to="#">Live Support</Link>
                </li>
                <li>
                  <Link to="#">Knowledge Base</Link>
                </li>
                <li>
                  <Link to="#">Customer Panel</Link>
                </li>
                <li>
                  <Link to="#">Submit Tickets</Link>
                </li>
                <li>
                  <Link to="#">Networks Status</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-widget text-left col-lg-3 col-md-6 col-12">
            <h4 className="widget-title">Opening Hour </h4>
            <div className="opening-hour-widget">
              <ul>
                <li>
                  <span className="float-left">Monday</span>
                  <span className="float-right">08:00-18:00</span>
                </li>
                <li>
                  <span className="float-left">Tuesday</span>
                  <span className="float-right">08:00-18:00</span>
                </li>
                <li>
                  <span className="float-left">Wednesday</span>
                  <span className="float-right">08:00-18:00</span>
                </li>
                <li>
                  <span className="float-left">Thursday</span>
                  <span className="float-right">08:00-18:00</span>
                </li>
                <li>
                  <span className="float-left">Friday</span>
                  <span className="float-right">08:00-18:00</span>
                </li>
                <li>
                  <span className="float-left">Saturday</span>
                  <span className="float-right">08:00-18:00</span>
                </li>
                <li>
                  <span className="float-left">Sunday</span>
                  <span className="float-right">Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="row">
            <div className="col-md-6 col-12 text-left">
              <p className="copyright">
                Copyright &copy; <Link to="#">Only Essex Driving</Link> ALL Right Reserved
              </p>
            </div>
            <div className="col-md-6 col-12 text-right">
              <div className="footer-3-social">
                <Link to="#">
                  <i className="icofont icofont-social-facebook"></i>
                </Link>
                <Link to="#">
                  <i className="icofont icofont-social-twitter"></i>
                </Link>
               
                <Link to="#">
                  <i className="icofont icofont-social-linkedin"></i>
                </Link>
               
                <Link to="#">
                  <i className="icofont icofont-social-instagram"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
