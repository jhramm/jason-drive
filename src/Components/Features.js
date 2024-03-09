import React from 'react'
import LearnerPupil from '../img/learner-pupil.jpeg';

export default function Features() {
  return (
    <div id="feature-area" className="feature-area bg-gray pt-90 pb-90">
      <div className="container">
        <div className="row">
          <div className="section-title text-center col-12 mb-45">
            <h3 className="heading">OUR SERVICE</h3>
            <div className="excerpt">
              <p>
                Services we offer at Only Essex Driving School
              </p>
            </div>
            <i className="icofont icofont-traffic-light"></i>
          </div>
        </div>
        <div className="row">
          <div className="feature-wrapper feature-left text-right col-lg-4 col-12">
            <div className="single-feature">
              <div className="icon">
                <i className="icofont icofont-file-spreadsheet"></i>
              </div>
              <div className="text fix">
                <h4>Professional Instruction</h4>
                <p>
                  Receive expert guidance from certified driving instructors.
                </p>
              </div>
            </div>
            <div className="single-feature">
              <div className="icon">
                <i className="icofont icofont-car-alt-4"></i>
              </div>
              <div className="text fix">
                <h4>Safety Focus</h4>
                <p>
                  Learn essential safety skills and defensive driving techniques
                  to navigate roads confidently.
                </p>
              </div>
            </div>
            <div className="single-feature">
              <div className="icon">
                <i className="icofont icofont-video-alt"></i>
              </div>
              <div className="text fix">
                <h4>Personalised Approach</h4>
                <p>
                  Tailored lessons to suit individual learning styles and
                  abilities for optimal progress.
                </p>
              </div>
            </div>
          </div>

          <div className="feature-image text-center col-lg-4 col-12">
            <img src={LearnerPupil} alt="feature" />
          </div>

          <div className="feature-wrapper feature-right text-left col-lg-4 col-12">
            <div className="single-feature">
              <div className="icon">
                <i className="icofont icofont-man-in-glasses"></i>
              </div>
              <div className="text fix">
                <h4>Practice Makes Perfect</h4>
                <p>
                  Gain valuable hands-on experience with plenty of supervised
                  driving practice sessions.
                </p>
              </div>
            </div>
            <div className="single-feature">
              <div className="icon">
                <i className="icofont icofont-clock-time"></i>
              </div>
              <div className="text fix">
                <h4>Preparation for Success</h4>
                <p>
                  Prepare thoroughly for the driving test with comprehensive
                  training and mock exams.
                </p>
              </div>
            </div>
            <div className="single-feature">
              <div className="icon">
                <i className="icofont icofont-direction-sign"></i>
              </div>
              <div className="text fix">
                <h4>Structured Learning</h4>
                <p>
                  Benefit from a carefully planned curriculum designed to cover
                  all aspects of driving.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
