import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
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
