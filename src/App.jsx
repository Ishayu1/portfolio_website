import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Technologies from "./components/Technologies";
import CounterGame from "./components/CounterGame"; 
import { HashRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";

const App = () => {
  return (
    <Router>
      <MainApp />
    </Router>
  );
};

const MainApp = () => {
  const location = useLocation(); // ✅ Correctly use `useLocation()`

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased 
    selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto px-8">
        <NavBar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Experiences />
              <Projects/>
              <Technologies />
              <div className="absolute inset-x-0 text-center pb-4">
                  <Link to="/CounterGame" className="text-cyan-400 hover:underline mt-5 inline-block text-4xl cursor-pointer">
                    Counter Game
                  </Link>
              </div>
            </>
          } />
          <Route path="/CounterGame" element={<CounterGame />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
