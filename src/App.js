import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.js"
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

function App() {
  return (
    <div className="main-display">
      <Router>
        <div className="header">
          <Link className="link-margin-right" to="/about">About</Link>
          <Link className="link-margin-right" to="/portfolio">Portfolio</Link>
          <Link className="link-margin-right" to="/contact">Contact</Link>
          <Link to="/resume">Resume</Link>
        </div>
        <div className="main-content">
          <Routes>
            <Route path="/react-portfolio" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
