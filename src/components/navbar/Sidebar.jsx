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

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const closeSidebar = () => {
    if (window.innerWidth < 768) {
    if (isOpen) {
      setIsOpen(false);
    }
  }
  };

  return (
    <div className={`app-container ${isOpen ? "sidebar-open" : ""}`}>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="bg-light py-3 border-end">
          <button className="sidebar-toggle mb-2 mt-2" onClick={toggleSidebar}>
            <FaBars className="sidebar-icon-bars" />
          </button>
          <a className="navbar-brand px-2" href="#">
            <img src="./src/Assets/logo-mini.svg" alt="logo" />
            <span className="px-2 text-decoration-none new-logo">Celestial</span>
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
          <li className="sidebar-item bg-dashboard">
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
      <div className={`main-content ${isOpen ? "open" : ""}`} onClick={closeSidebar}>
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
