import "./Navbar.css";

import { Badge } from "primereact/badge";
import { Menubar } from "primereact/menubar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const shoppingCart = useSelector((state) => state.shoppingCart.value);

  const navigate = useNavigate();
  const items = [
    {
      icon: "pi pi-fw pi-book",
      label: "MENU",
      command: () => {
        navigate("/");
      },
      className: "navbar-menu-text",
    },
  ];

  const start = (
    <img
      src="/app-logo.png"
      alt="Food Order Logo"
      className="app-logo mr-3"
      onError={(e) =>
        (e.target.src =
          "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
      }
      onClick={() => {
        navigate("/");
      }}
    />
  );

  const end = (
    <i
      className="pi pi-shopping-cart p-overlay-badge navbar-shopping-card"
      style={{ fontSize: "1.6rem" }}
      onClick={() => {
        navigate("/shopping-cart");
      }}
    >
      <Badge value={shoppingCart.length.toString()}></Badge>
    </i>
  );

  return <Menubar className="navbar" start={start} end={end} model={items} />;
}

export default Navbar;
