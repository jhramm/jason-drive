import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import BannerOverlay from './Components/BannerOverlay';
import Content from './Components/Content';
import CtaArea from './Components/CtaArea';
import Features from './Components/Features';
import Testimonial from './Components/Testimonial';
import FacebookFeed from './Components/FacebookFeed';
import Prices from './Components/Prices';
import Contact from './Components/Contact';
import About from './Components/About';
import BookOnline from './Components/BookOnline';
import Blog from './Components/Blog';
import Signup from './Components/Auth/Signup';

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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
