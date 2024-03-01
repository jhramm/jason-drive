import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import BannerOverlay from './Components/BannerOverlay';
import Content from './Components/Content';


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
