import React, { useEffect } from "react";
import "../../src/assets/css/styles.css";
import logo from "../assets/images/s Logo.png";

function NavBar() {
  useEffect(() => {
    const showMenu = (toggleId, navId) => {
      const toggle = document.getElementById(toggleId);
      const nav = document.getElementById(navId);

      const handleClick = () => {
        if (nav) {
          nav.classList.toggle("show-menu");
        }
        if (toggle) {
          toggle.classList.toggle("show-icon");
        }
      };

      if (toggle && nav) {
        toggle.addEventListener("click", handleClick);

        return () => {
          toggle.removeEventListener("click", handleClick);
        };
      }
    };

    showMenu("nav-toggle", "nav-menu");
  }, []);

  return (
    <div>
      <header className="header">
        <nav className="nav container">
          <div className="nav__data">
            <a href="/" className="nav__logo">
              <img src={logo} style={{ width: "140px", height: "50px" }}></img>
              {/* <i className="ri-planet-line"></i> INNOV8 FUSION */}
            </a>

            <div className="nav__toggle" id="nav-toggle">
              <i className="ri-menu-line nav__burger"></i>
              <i className="ri-close-line nav__close"></i>
            </div>
          </div>

          {/* <!--=============== NAV MENU ===============--> */}
          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li>
                <a href="/" className="nav__link">
                  Home
                </a>
              </li>

              {/* <!--=============== DROPDOWN 1 ===============--> */}
              <li className="dropdown__item">
                <div className="nav__link">
                  About <i className="ri-arrow-down-s-line dropdown__arrow"></i>
                </div>

                <ul className="dropdown__menu">
                  <li>
                    <a href="/About" className="dropdown__link">
                      <i className="ri-pie-chart-line"></i> Overview
                    </a>
                  </li>

                  <li>
                    <a href="/About" className="dropdown__link">
                      <i className="ri-arrow-up-down-line"></i> Leadership Team
                    </a>
                  </li>

                  <li>
                    <a href="/About" className="dropdown__link">
                      <i className="ri-arrow-up-down-line"></i> Our Team
                    </a>
                  </li>

                  <li>
                    <a href="/About" className="dropdown__link">
                      <i className="ri-arrow-up-down-line"></i> Company History
                    </a>
                  </li>

                  {/* <!--=============== DROPDOWN SUBMENU ===============--> */}
                  {/* <li className="dropdown__subitem">
                    <div className="dropdown__link">
                      <i className="ri-bar-chart-line"></i> Reports
                      <i className="ri-add-line dropdown__add"></i>
                    </div>

                    <ul className="dropdown__submenu">
                      <li>
                        <a href="#" className="dropdown__sublink">
                          <i className="ri-file-list-line"></i> Documents
                        </a>
                      </li>

                      <li>
                        <a href="#" className="dropdown__sublink">
                          <i className="ri-cash-line"></i> Payments
                        </a>
                      </li>

                      <li>
                        <a href="#" className="dropdown__sublink">
                          <i className="ri-refund-2-line"></i> Refunds
                        </a>
                      </li>
                    </ul>
                  </li> */}
                </ul>
              </li>

              <li>
                <a href="/Careers" className="nav__link">
                  Careers
                </a>
              </li>

              {/* <!--=============== DROPDOWN 2 ===============--> */}
              {/* <li className="dropdown__item">
                <div className="nav__link">
                  Users <i className="ri-arrow-down-s-line dropdown__arrow"></i>
                </div>

                <ul className="dropdown__menu">
                  <li>
                    <a href="#" className="dropdown__link">
                      <i className="ri-user-line"></i> Profiles
                    </a>
                  </li>

                  <li>
                    <a href="#" className="dropdown__link">
                      <i className="ri-lock-line"></i> Accounts
                    </a>
                  </li>

                  <li>
                    <a href="#" className="dropdown__link">
                      <i className="ri-message-3-line"></i> Messages
                    </a>
                  </li>
                </ul>
              </li> */}

              <li>
                <a href="/Blogs" className="nav__link">
                  Blog
                </a>
              </li>

              <li>
                <a href="/Contact" className="nav__link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
