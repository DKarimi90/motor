import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
// import CarsList from "./pages/CarsList";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Navbar from "./pages/Navbar";
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
        </Routes>
        <Footer />
      </Router>
  
    </div>
  );
}

export default App;
