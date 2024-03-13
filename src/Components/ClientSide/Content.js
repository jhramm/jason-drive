import React from 'react'
import { Link } from 'react-router-dom';

export default function Content() {
  return (
    <div className="demo-content bg-white pt-70 pb-60">
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-12 mb-30">
            <p>
              At Only Essex Driving School, we truly empathize with the anxiety
              and nervousness often associated with learning to drive. We
              understand the significance of finding a trustworthy and reliable
              driving instructor who can not only teach you the rules of the
              road but also instill the confidence and skills necessary to pass
              your driving test with flying colors. With our comprehensive
              approach and a team of experienced instructors, we prioritize your
              comfort, safety, and success behind the wheel.
            </p>
          </div>
          <div className="col-sm-4 col-12 mb-30">
            <p>
              We firmly believe that driving lessons should not only be
              informative but also enjoyable and engaging. Our holistic teaching
              methodology focuses not just on passing the test, but on equipping
              you with the skills for a lifetime of safe and confident driving.
              At Only Essex Driving School, our exceptional pass rate, which
              exceeds the DVSA average by a remarkable 30%, is a testament to
              our unwavering commitment to helping you succeed on your journey
              to becoming a proficient and responsible driver.
            </p>
          </div>
          <div className="col-sm-4 col-12 mb-30">
            <p>
              Looking for quality, affordable driving tuition?{" "}
              <Link to="/prices">
                Your first ten hours start from just £300 with our special
                promotional offer!
              </Link>{" "}
              Our lessons include online Theory Test Training, comprehensive
              handouts, and a free Lesson Warranty for peace of mind. With
              friendly, professional instructors across Essex, kickstart your
              confident driving journey today. Call us or book online now!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
