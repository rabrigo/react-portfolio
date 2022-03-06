import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.js"
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

function App() {
  return (
    <>
      <Router>
        <div className="header">
          <span className="ronnel">Ronnel Abrigo</span>
          <Link className="header-link" to="/about">About</Link>
          <Link className="header-link" to="/portfolio">Portfolio</Link>
          <Link className="header-link" to="/contact">Contact</Link>
          <Link className="header-link" to="/resume">Resume</Link>
        </div>
        <div className="navigation">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
