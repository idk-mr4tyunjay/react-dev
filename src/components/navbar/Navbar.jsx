import React from "react";
import { RiMessage2Line } from "react-icons/ri";
import { TiBell } from "react-icons/ti";
import { FaRegUser } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="navbar-expand-lg bg-white w-100 py-3 d-flex justify-content-between">
     <div className="ps-5">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link px-5 " href="#">
              Calendar
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active px-5" aria-current="page" href="#">
              Statistics
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-5" href="#">
              Employee
            </a>
          </li>
        </ul>
     </div>
     <div className="">
        <ul className="navbar-nav ">
          <li className="nav-item d-none d-lg-flex mr-2">
            <a className="nav-link px-3" href="#">
              Help
            </a>
          </li>
          <li className="nav-item d-none d-lg-flex mr-2">
            <a className="nav-link px-3" href="#">
              <RiMessage2Line />
              <span className="badge badge-custom bg-success">2</span>

            </a>
          </li>
          <li className="nav-item d-none d-lg-flex mr-2">
            <a className="nav-link px-3" href="#">
              <TiBell />
              <span className="badge badge-custom bg-danger count">2</span>
            </a>
          </li>
          <li className="nav-item d-none d-lg-flex mr-2">
            <a className="nav-link px-3" href="#">
              <FaRegUser />
              <span>Evan Morales</span>
            </a>
          </li>
        </ul>
     </div>
    </nav>
  );
};

export default Navbar;
