import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useDispatch } from "react-redux";
import { setMobile } from "./redux/navbarSlice";

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const dispatch = useDispatch()

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    Aos.init();
    Aos.refresh();
    window.addEventListener("resize", handleResize);
    if (screenWidth > 1040){
      dispatch(setMobile(false))
    } {
      dispatch(setMobile(true))
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
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
