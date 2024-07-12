import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './components/Landing';
import Instructions from './components/Instructions';
import Confidality from './components/Confidality';
import ErrorPage from './components/ErrorPage';
import CaptureDocument from './components/CaptureDocument';
import LiveDetection from './components/LiveDetection';
import ScanFacePage from './components/ScanFacePage';
import DataVerification from './components/Dataverification';
import ScanfaceRight from './components/ScanfaceRight';
import Scanficeleft from './components/ScanfaceLeft';
import ScanCrad from './components/ScanCard';
import Ending from './components/ending';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/scan" element={<ScanFacePage/>} />
          <Route path="/right" element={<ScanfaceRight/>} />
          <Route path="/left" element={<Scanficeleft/>} />
          <Route path="/card" element={<ScanCrad/>} />
          <Route path="/dataverfication" element={<DataVerification/>} />
          <Route path="/ending" element={<Ending/>} />
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/confidality" element={<Confidality />} />
          <Route path="/LiveDetection" element={<LiveDetection />} />
          <Route path="/verification" element={<CaptureDocument />} />
          <Route path="/error" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
