import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import Collection from "./pages/Collection/Collection";
import Shop from "./pages/Shop/Shop";
import About from "./pages/About/About";
import ShopNow from "./pages/ShopNow/ShopNow";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<ShopNow />} path="/"/>
        <Route element={<Main />} path="/Main" />
        <Route element={<About />} path="/About" />
        <Route element={<Collection />} path="/Collection" />
        <Route element={<Shop />} path="/Shop" />
      </Routes>
    </>
  );
}

export default App;
