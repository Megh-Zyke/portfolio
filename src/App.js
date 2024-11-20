import "./App.css";
import AllProjects from "./AllProjects";
import HomePage from "./HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<AllProjects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
