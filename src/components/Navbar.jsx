import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid ">
            {/* hamburger */}
          <a className="navbar-brand" href="#">
          <img src="./public\logo-mini.svg" alt="logo"
          />
            Celestial
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* hambrger end */}

          {/* first section */}
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Calendar
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="Statistics">
                  Statistics
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Employee
                </a>
              </li>
              {/* first section end */}

              {/* second section */}
              <ul className="navbar-nav navbar-nav-right">
                <li className="nav-item d-none d-lg-flex  mr-2">
                  <a className="nav-link" href="#">
                    Help
                  </a>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
