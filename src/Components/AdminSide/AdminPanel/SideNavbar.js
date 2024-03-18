import React from 'react'
import { Link } from 'react-router-dom';

export default function SideNavbar() {
  return (
    
          <div className="side-menu">
            <nav>
              <ul>
                <li>
                  <Link>Admin Panel</Link>
                </li>
                <li
                 
                >
                  <Link to="/calendar">My Diary</Link>
                </li>
                <li>
                  <Link>
                    services
                  </Link>
                </li>
                <li>
                  <Link to="/blog">
                    blog
                  </Link>
                </li>
                <li
                 
                >
                  <Link to="/contact">contact</Link>
                </li>
                <li>
                  <Link>
                    Location list
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
       
  );
}
