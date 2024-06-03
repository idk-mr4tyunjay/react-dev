import React, { useState } from "react";
import "./style2.css";
import { FaBars } from "react-icons/fa";
import { HiComputerDesktop } from "react-icons/hi2";
import { MdArrowForwardIos } from "react-icons/md";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { FaWpforms } from "react-icons/fa";
import { GrPieChart } from "react-icons/gr";
import { LiaTableSolid } from "react-icons/lia";
import { VscSearch } from "react-icons/vsc";
const Sidebar2 = () => {
  const [isSidebarExpanded, setSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setSidebarExpanded(!isSidebarExpanded);
  };
  return (
    <div className={`wrapper ${isSidebarExpanded ? "expand" : ""}`}>
      <aside id="sidebar">
        <div className="d-flex">
          <button className="toggle-btn" onClick={toggleSidebar}>
            <i className="lni lni-grid-alt"></i>
          </button>
          <div className="sidebar-logo">
            <a href="#">CodzSword</a>
          </div>
        </div>
        <ul className="sidebar-nav">
          
          <li className="sidebar-item">
            <a
              href="#"
              className="sidebar-link collapsed has-dropdown"
              data-bs-toggle="collapse"
              data-bs-target="#auth"
              aria-expanded="false"
              aria-controls="auth"
            >
              <i className="lni lni-protection"></i>
              <span>Auth</span>
            </a>
            <ul
              id="auth"
              className="sidebar-dropdown list-unstyled collapse"
              data-bs-parent="#sidebar"
            >
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                  Login
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                  Register
                </a>
              </li>
            </ul>
          </li>
          <li className="sidebar-item">
            <a
              href="#"
              className="sidebar-link collapsed has-dropdown"
              data-bs-toggle="collapse"
              data-bs-target="#multi"
              aria-expanded="false"
              aria-controls="multi"
            >
              <i className="lni lni-layout"></i>
              <span>Multi Level</span>
            </a>
            <ul
              id="multi"
              className="sidebar-dropdown list-unstyled collapse"
              data-bs-parent="#sidebar"
            >
              <li className="sidebar-item">
                <a
                  href="#"
                  className="sidebar-link collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#multi-two"
                  aria-expanded="false"
                  aria-controls="multi-two"
                >
                  Two Links
                </a>
                <ul
                  id="multi-two"
                  className="sidebar-dropdown list-unstyled collapse"
                >
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                      Link 1
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                      Link 2
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link text-primary">
              <HiComputerDesktop />
              <span className="sidebar-text px-1 fw-bold text-light">
                Dashboard
              </span>
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
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar2;
