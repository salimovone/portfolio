import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);


  return (
    <div className="App overflow-hidden w-screen flex justify-center max-sm:px-5 px-10">
      <div className="container w-full max-w-[1110px] h-screen overflow-auto pt-7">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
