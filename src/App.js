import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./App.css";

import { Route, Routes } from "react-router-dom";

import Checkout from "./pages/Checkout/Checkout";
import Footer from "./layouts/Footer/Footer";
import Menu from "./pages/Menu/Menu";
import Navbar from "./layouts/Navbar/Navbar";
import { ScrollTop } from "primereact/scrolltop";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <ScrollTop />
      <div style={{ height: "100%" }}>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="shopping-cart" element={<ShoppingCart />} />
          <Route path="checkout" element={<Checkout />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
