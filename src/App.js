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

function App() {
  return (
    <Router>
      <div className="wrapper dark-wrapper fix">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
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
                <BannerOverlay />
                <Prices />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <BannerOverlay />
                <Contact />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <BannerOverlay />
                <About />
                <CtaArea />
              </>
            }
          />
          <Route
            path="/bookonline"
            element={
              <>
                <BannerOverlay />
                <BookOnline />
              </>
            }
          />
          <Route
            path="/blog"
            element={
              <>
                <BannerOverlay />
                <Blog />
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                <BannerOverlay />
                <Signup />
              </>
            }
          />
          <Route
            path="/signin"
            element={
              <>
                <BannerOverlay />
                <Signin />
              </>
            }
          />
          <Route
            path="/instructorlogin"
            element={
              <>
                <BannerOverlay />
                <Instructorlogin />
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
