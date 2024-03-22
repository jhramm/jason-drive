import React from 'react'
import { Link } from 'react-router-dom';

export default function SideNavbar() {
  return (
    
          <div className="side-menu">
            <nav>
              <ul>
                <li>
                  <Link to="/adminPanel">Admin Panel</Link>
                </li>
                <li
                 
                >
                  <Link to="/calendar">My Diary</Link>
                </li>
                <li>
                  <Link to="/allpupils">
                    All pupils
                  </Link>
                </li>
                <li>
                  <Link to="/transactionList">
                   Transactions List
                  </Link>
                </li>
                <li
                 
                >
                  <Link to="/bookings">Bookings</Link>
                </li>
                <li>
                  <Link to="/allmessages">
                    All Messages
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
       
  );
}
