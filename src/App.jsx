import Navbar from "./Layers/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Main from "./pages/Main/Main";
import Collection from "./pages/Collection/Collection";
import Shop from "./pages/Shop/Shop";
import Contact from "./pages/Contact/Contact";
import ShopNow from "./pages/ShopNow/ShopNow";
import Description from "./pages/Description/Description";
// import Footer from "./Layers/Footer";
import { useCart } from "./context/useCart";
import { Toaster } from "@/components/ui/sonner";

function App() {
  const location = useLocation();
  const { state } = useCart();
  console.log(state);
  return (
    <>
      {location.pathname !== "/" && location.pathname !== "/Contact" && (
        <Navbar />
      )}
      <Routes>
        <Route element={<ShopNow />} path="/" />
        <Route element={<Main />} path="/Main" />
        <Route element={<Contact />} path="/Contact" />
        <Route element={<Collection />} path="/Collection" />
        <Route element={<Shop />} path="/Shop" />
        <Route element={<Description />} path="/Description/:id" />
      </Routes>
      {/* <Footer /> */}
      <Toaster />
    </>
  );
}

export default App;
