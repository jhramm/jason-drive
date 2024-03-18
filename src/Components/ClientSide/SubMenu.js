import React from 'react'
import { Link } from 'react-router-dom';

export default function SubMenu(props) {
  return (
    <div class="container">
      <div class="row">
        <div class="page-banner text-center col-12">
          <h1>{props.headerName}</h1>
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <span>{props.headerName}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
