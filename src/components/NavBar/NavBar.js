import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

// const linkStyles = {
//   width: "100px",
//   padding: "12px",
//   margin: "0 6px 6px",
//   background: "blue",
//   textDecoration: "none",
//   color: "white",
// };

function NavBar() {
  return (
    <div className="row">
     <nav className="py-2 bg-light">
      <div className="container d-flex flex-wrap">
        <ul className="nav me-auto">

                <li className="nav-item"><NavLink 
                  to="/" 
                  exact 
                  className="nav-link h4 link-dark px-2 active" 
                  aria-current="page"
                >Home</NavLink></li>
                <li className="nav-item"><NavLink to="/quality" exact className="nav-link h4 link-dark px-2">Quality</NavLink></li>
                <li className="nav-item"><NavLink to="/quantity" exact className="nav-link h4 link-dark px-2">Quantity</NavLink></li>

          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;

/*

        <div className="col">
          <NavLink
            to="/"
            exact 
            style={linkStyles}
            activeStyle={{
              background: "darkblue",
            }}
          >
            Home
          </NavLink>
        </div>
          
        <div className="col">
          <NavLink
            to="/quality"
            exact
            style={linkStyles}
            activeStyle={{
              background: "darkblue",
            }}
          >
            Quality
          </NavLink>
        </div>

        <div className="col">
          <NavLink
            to="/quantity"
            exact
            style={linkStyles}
            activeStyle={{
              background: "darkblue",
            }}
          >
            Quantity
          </NavLink>
        </div>


/* */