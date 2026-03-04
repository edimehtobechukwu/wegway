import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "./pages/Home";
import { Booking } from "./pages/Booking";

function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace("#", ""));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Small delay to ensure content is rendered
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return null;
}

export default function App() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;700&display=swap');
        html { scroll-behavior: smooth; }
      `}</style>
      <Router>
        <ScrollToHash />
        <div className="font-sans antialiased bg-white w-full overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
