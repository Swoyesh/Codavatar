// Import styles and components
import "flag-icons/css/flag-icons.min.css";
import SendOTP from "./components/Send/SendOTP";
import VerifyOTP from "./components/verify/VefiryOTP";
import Information from "./components/Information/InfoInput";

// Importing React Router for routing functionality
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for SendOTP page */}
        <Route path="/" element={<SendOTP />} />
        
        {/* Route for SendOTP page */}
        <Route path="/SendOTP" element={<SendOTP />} />
        
        {/* Route for VerifyOTP page */}
        <Route path="/VerifyOTP" element={<VerifyOTP />} />
        
        {/* Route for Information page */}
        <Route path="/Information" element={<Information />} />
      </Routes>
    </Router>
  );
}

export default App;