import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StaticDataComponent from './featureSection';
import GenerateChat from './GenerateChat';
import Navbar from './Navbar';
import AboutUs from './AboutUs';
import SignupPage from './SignUpPage';
import SigninPage from './SignIn';
import Sidebar from './SideNavbar.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<GenerateChat/>} />
        <Route path="/chat" element={<GenerateChat />} />
        <Route path="/features" element={<StaticDataComponent />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/sidenavbar" element={<Sidebar />} />

      </Routes>
    </Router>
  );
}

export default App;
