import React from 'react'
import { Link } from 'react-router-dom';

export default function BannerOverlay() {
  return (
    <div className="page-banner-area overlay overlay-black overlay-70">
      <div className="container">
        <div className="row">
          <div className="page-banner text-center col-12">
            <h1>Header Three</h1>
            <ul>
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <span>header Three</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
