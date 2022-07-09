import "./App.css";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Thingie from "./Pages/Thingie";
import Projects from "./Pages/Projects";
import Experience from "./Pages/Experience";
import ThisWebsite from "./Pages/ThisWebsite";
import AlCielo from "./Pages/AlCielo";
import GlowingAbyss from "./Pages/GlowingAbyss";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="App-page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Thingie" element={<Thingie />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Projects/This-Website" element={<ThisWebsite />} />
          <Route path="/Projects/Al-Cielo" element={<AlCielo />} />
          <Route path="/Projects/Glowing-Abyss" element={<GlowingAbyss />} />
        </Routes>
      </div>
    </Router>
  );
}

function getDevice() {
  let isMobileDevice = window.matchMedia(
    "only screen and (max-width: 760px)"
  ).matches;
  if (isMobileDevice) {
    console.log("Mobile Device");
  } else {
    console.log("Desktop");
  }
}

export default App;
