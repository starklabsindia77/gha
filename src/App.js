import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
function App() {
  return (
    <Router>
      <div>
        <Routes>          
          <Route path="/contact"element={ <Contact /> } />{/* Contact Pages */}
          <Route path="/courses" element={ <Courses /> } />{/* Course Pages */}
          <Route path="/about" element={ <About /> } />{/* About Pages */}
          <Route path="/" element={ <Home />} />{/* Home Pages */}            
        </Routes>
      </div>
    </Router>
  );
}

export default App;
