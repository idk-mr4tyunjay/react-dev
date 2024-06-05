import React, { useState } from "react";
import { RiMessage2Line } from "react-icons/ri";
import { TiBell } from "react-icons/ti";
import { FaRegUser } from "react-icons/fa6";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg bg-white w-100 py-3 d-flex justify-content-between">
      <div className="ps-5">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row">
          <li className="nav-item d-none d-lg-block">
            <a className="nav-link px-5 my-link" href="#">
              Calendar
            </a>
          </li>
          <li className="nav-item d-none d-lg-block">
            <a className="nav-link fw-semibold px-5" aria-current="page" href="#">
              Statistics
              <div className="line"></div>
            </a>
          </li>
          <li className="nav-item d-none d-lg-block">
            <a className="nav-link px-5 my-link" href="#">
              Employee
            </a>
          </li>
        </ul>
      </div>
      <div className="d-flex align-items-center">
        <ul className="navbar-nav d-flex flex-row">
          <li className="nav-item mr-2">
            <a className="nav-link px-3 my-link" href="#">
              Help
            </a>
          </li>
          <li className="nav-item mr-2">
            <a className="nav-link px-3" href="#">
              <RiMessage2Line />
              <span className="badge badge-custom bg-success">2</span>
            </a>
          </li>
          <li className="nav-item mr-2">
            <a className="nav-link px-3" href="#">
              <TiBell />
              <span className="badge badge-custom bg-danger count">2</span>
            </a>
          </li>
          <li className="nav-item mr-2">
            <a className="nav-link px-3" href="#">
              <FaRegUser />
              <span className="px-2">Evan Morales</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
