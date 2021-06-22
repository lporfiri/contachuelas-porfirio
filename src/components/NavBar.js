import React from "react";
import CartWidget from "./CartWidget";

function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href=".\">
              CONTACHUELAS<span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="Ropa">
              Ropa
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="Calzado">
              Calzado
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="Accesorio">
              Accesorio
            </a>
          </li>
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;
