import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './Components/ClientSide/Header';
import Footer from './Components/ClientSide/Footer';
import BannerOverlay from './Components/ClientSide/BannerOverlay';
import Content from './Components/ClientSide/Content';
import CtaArea from './Components/ClientSide/CtaArea';
import Features from './Components/ClientSide/Features';
import Testimonial from './Components/ClientSide/Testimonial';
import FacebookFeed from './Components/ClientSide/FacebookFeed';
import Prices from './Components/ClientSide/Prices';
import Contact from './Components/ClientSide/Contact';
import About from './Components/ClientSide/About';
import BookOnline from './Components/ClientSide/BookOnline';
import Blog from './Components/ClientSide/Blog';
import Signup from './Components/Auth/Signup';
import Instructorlogin from './Components/Auth/InstructorLogin';
import Signin from './Components/ClientSide/Signin';
import SubOverlay from './Components/ClientSide/SubOverlay';
import AdminPanel from './Components/AdminSide/AdminPanel/AdminPanel';
import AdminHeader from './Components/AdminSide/AdminHeader/AdminHeader';
import Calendar from './Components/AdminSide/AdminPanel/Calendar';
import AllPupils from './Components/AdminSide/AdminPanel/AllPupils';

function App() {
  return (
    <Router>
      <div className="wrapper dark-wrapper fix">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <BannerOverlay />
                <Content />
                <Features />
                <Testimonial />
                <FacebookFeed />
                <CtaArea />
              </>
            }
          />
          <Route
            path="/prices"
            element={
              <>
                <Header />
                <SubOverlay headerName="Prices" />
                <Prices />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Header />
                <SubOverlay headerName="Contact" />
                <Contact />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Header />
                <SubOverlay headerName="About" />
                <About />
                <CtaArea />
              </>
            }
          />
          <Route
            path="/bookonline"
            element={
              <>
                <Header />
                <SubOverlay headerName="Book Online" />
                <BookOnline />
              </>
            }
          />
          <Route
            path="/blog"
            element={
              <>
                <Header />
                <SubOverlay headerName="Blog" />
                <Blog />
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                <Header />
                <SubOverlay headerName="Signup" />
                <Signup />
              </>
            }
          />
          <Route
            path="/signin"
            element={
              <>
                <Header />
                <SubOverlay headerName="Signin" />
                <Signin />
              </>
            }
          />
          <Route
            path="/instructorlogin"
            element={
              <>
                <Header />
                <SubOverlay headerName="Instructor Login" />
                <Instructorlogin />
              </>
            }
          />
          <Route
            path="/adminPanel"
            element={
              <>
                <AdminHeader />
                <SubOverlay headerName="Admin Panel" />
                <AdminPanel />
              </>
            }
          />
          <Route
            path="/calendar"
            element={
              <>
                <AdminHeader />
                <SubOverlay headerName="Calendar" />
                <Calendar />
              </>
            }
          />
          <Route
            path="/allpupils"
            element={
              <>
                <AdminHeader />
                <SubOverlay headerName="All pupils" />
                <AllPupils />
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
