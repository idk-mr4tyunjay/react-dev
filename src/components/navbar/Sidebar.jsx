import React, { useState } from "react";
import "./Style.css";
import { FaBars } from "react-icons/fa";
import { HiComputerDesktop } from "react-icons/hi2";
import { MdArrowForwardIos } from "react-icons/md";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { FaWpforms } from "react-icons/fa";
import { GrPieChart } from "react-icons/gr";
import { LiaTableSolid } from "react-icons/lia";
import { VscSearch } from "react-icons/vsc";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`wrapper ${isOpen ? "expand" : ""}`}>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="bg-light py-3">
            <button className="sidebar-toggle mb-2 mt-2" onClick={toggleSidebar}>
              <FaBars className="sidebar-icon-bars" />
            </button>
            <a className="navbar-brand px-2" href="#">
              <img src="./public/logo-mini.svg" alt="logo" />
              Celestial
            </a>
        </div>
        <div className="container-fluid py-3">
          <form className="d-flex position-relative" role="search">
            <input
              className="form-control me-2 search-input"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="search-button" type="submit">
              <VscSearch className="search-icon" />
            </button>
          </form>
        </div>
        <span className="fw-lighter px-2">Dash Menu</span>
        <ul className="sidebar-menu">
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <HiComputerDesktop />
              <span className="sidebar-text px-1 fw-bold">Dashboard</span>
              <span className="new-label">NEW</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <PiSuitcaseSimpleBold />
              <span className="sidebar-text px-2 fw-light">UI Elements</span>
              <MdArrowForwardIos className="sidebar-icon-right" />
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <FaWpforms />
              <span className="sidebar-text px-2 fw-light">Form Elements</span>
              <MdArrowForwardIos className="sidebar-icon-right" />
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <GrPieChart />
              <span className="sidebar-text px-2 fw-light">Charts</span>
              <MdArrowForwardIos className="sidebar-icon-right" />
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <LiaTableSolid />
              <span className="sidebar-text px-2 fw-light">Tables</span>
              <MdArrowForwardIos className="sidebar-icon-right" />
            </a>
          </li>
        </ul>
      </div>
      <div className={`main ${isOpen ? "open" : ""}`}>
        {/* Your main content here */}
      </div>
    </div>
  );
};

export default Sidebar;
