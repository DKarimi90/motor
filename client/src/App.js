import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Navbar from "./pages/Navbar";
import Services from "./pages/Services";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="main">
      <Router>
        <Navbar />
        <Routes>
          <Route path ="/" element={<Landing />}  />
          <Route path ="signup" element = {<Signup/>} />
          <Route path ="login" element = {<Login/>} />
          <Route path ="contact" element = {<Contact/>} />
          <Route path="services" element ={<Services />}/>
          <Route path="about" element = {<About />}/>
        </Routes>
        <Footer />
      </Router>
  
    </div>
  );
}

export default App;
