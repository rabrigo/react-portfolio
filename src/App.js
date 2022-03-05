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
          <Link className="header-link" to="/react-portfolio/about">About</Link>
          <Link className="header-link" to="/react-portfolio/portfolio">Portfolio</Link>
          <Link className="header-link" to="/react-portfolio/contact">Contact</Link>
          <Link className="header-link" to="/react-portfolio/resume">Resume</Link>
        </div>
        <div className="navigation">
          <Routes>
            <Route path="/react-portfolio" element={<Home />} />
            <Route path="/react-portfolio/about" element={<About />} />
            <Route path="/react-portfolio/portfolio" element={<Portfolio />} />
            <Route path="/react-portfolio/contact" element={<Contact />} />
            <Route path="/react-portfolio/resume" element={<Resume />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
