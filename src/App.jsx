import React from 'react';
import "flag-icons/css/flag-icons.min.css";
import SendOTP from "./components/Send/SendOTP";
import VerifyOTP from "./components/verify/VefiryOTP";
import Information from "./components/Information/InfoInput";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router basename="/Codavatar">
      <Routes>
        <Route path="/" element={<SendOTP />} />
        <Route path="/SendOTP" element={<SendOTP />} />
        <Route path="/VerifyOTP" element={<VerifyOTP />} />
        <Route path="/Information" element={<Information />} />
        {/* Fallback route */}
        <Route path="*" element={<SendOTP />} />
      </Routes>
    </Router>
  );
}

export default App;