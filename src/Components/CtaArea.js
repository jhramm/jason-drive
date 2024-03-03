import React from 'react'
import {Link} from 'react-router-dom'

export default function CtaArea() {
  return (
    <div className="cta-area pb-40 pt-40">
      <div className="container">
        <div className="row">
          <div className="call-to-action text-left col-lg-10 col-12 mx-auto">
            <h3>try to get our amazing free lesson</h3>
            <Link to="#" className="btn transparent ">
              get lesson
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
