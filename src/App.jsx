import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Main from "./pages/Main/Main";
import Collection from "./pages/Collection/Collection";
import Shop from "./pages/Shop/Shop";
import Contact from "./pages/Contact/Contact";
import ShopNow from "./pages/ShopNow/ShopNow";

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/" && <Navbar />}
      <Routes>
        <Route element={<ShopNow />} path="/" />
        <Route element={<Main />} path="/Main" />
        <Route element={<Contact />} path="/Contact" />
        <Route element={<Collection />} path="/Collection" />
        <Route element={<Shop />} path="/Shop" />
      </Routes>
    </>
  );
}

export default App;
