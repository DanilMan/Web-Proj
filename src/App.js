import "./App.css";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Thingie from "./Pages/Thingie";
import Experience from "./Pages/Experience";
import MyWebsite from "./Pages/MyWebsite";
import AlCielo from "./Pages/AlCielo";
import GlowingAbyss from "./Pages/GlowingAbyss/GlowingAbyss";

function App() {
  return (
    <Router>
      <NavBar topFunction={topFunction} />
      <div className="App-page">
        <Routes>
          <Route path="/" element={<Home topFunction={topFunction} />} />
          <Route path="/Thingie" element={<Thingie />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Projects/My-Website" element={<MyWebsite />} />
          <Route path="/Projects/Al-Cielo" element={<AlCielo />} />
          <Route path="/Projects/Glowing-Abyss" element={<GlowingAbyss />} />
        </Routes>
      </div>
    </Router>
  );
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// function getDevice() {
//   let isMobileDevice = window.matchMedia(
//     "only screen and (max-width: 760px)"
//   ).matches;
//   if (isMobileDevice) {
//     console.log("Mobile Device");
//   } else {
//     console.log("Desktop");
//   }
// }

export default App;
