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
          <Route path='/prices' element={
            <>
            <BannerOverlay />
            <Prices />
            </>
          }/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
