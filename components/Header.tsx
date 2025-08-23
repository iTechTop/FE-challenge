"use client";

import type React from "react";
import { useState, useEffect } from "react";
import {
  ChevronDownIcon,
  ShoppingCartIcon,
  UserProfileIcon,
  HamburgerIcon,
  CloseIcon,
} from "./icons/Icons";
import { navigationMenuItems, getDropdownOptions } from "../data/mockData";

const Header = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleWindowResize = () => {
    if (window.innerWidth > 1024 && mobileMenuVisible) {
      setMobileMenuVisible(false);
    }
  };

  const preventBodyScroll = () => {
    if (mobileMenuVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [mobileMenuVisible]);

  useEffect(preventBodyScroll, [mobileMenuVisible]);

  const toggleMobileMenu = () => setMobileMenuVisible(!mobileMenuVisible);
  const hideMobileMenu = () => setMobileMenuVisible(false);
  const handleNavigationClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      hideMobileMenu();
    }
  };

  return (
    <header className="top-nav-wrapper">
      <div className="nav-container">
        <button
          className={`hamburger-toggle ${mobileMenuVisible ? "active" : ""}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuVisible}
        >
          {mobileMenuVisible ? <CloseIcon /> : <HamburgerIcon />}
        </button>

        <div className="brand-logo">
          <img
            src="/chicks-logo.svg"
            alt="Chicks Gold"
            className="brand-image"
          />
        </div>

        <div className="divider-line"></div>

        <nav
          className={`main-nav ${mobileMenuVisible ? "nav-expanded" : ""}`}
          onClick={handleNavigationClick}
        >
          <ul className="nav-menu">
            {navigationMenuItems.map((item) => (
              <li
                key={item}
                className="menu-item"
                onMouseEnter={() => setActiveDropdown(item)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a href="#" className="menu-link" onClick={hideMobileMenu}>
                  {item}
                  <ChevronDownIcon />
                </a>
                {activeDropdown === item && (
                  <div className="dropdown-menu">
                    {getDropdownOptions(item).map((option, index) => (
                      <a key={index} href="#" className="dropdown-item">
                        {option}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="mobile-currency-dropdown" onClick={hideMobileMenu}>
            <div className="currency-label">
              <span>Currency</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span>USD</span>
              <ChevronDownIcon />
            </div>
          </div>
        </nav>

        <div className="nav-actions">
          <div
            className="currency-dropdown"
            onMouseEnter={() => setActiveDropdown("currency")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <span>USD</span>
            <ChevronDownIcon />
            {activeDropdown === "currency" && (
              <div className="dropdown-menu currency-dropdown-menu">
                {["USD", "EUR", "GBP", "CAD", "AUD"].map((currency, index) => (
                  <a key={index} href="#" className="dropdown-item">
                    {currency}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="shopping-cart">
            <ShoppingCartIcon />
            <span className="cart-label">CART (5)</span>
          </div>

          <button className="login-button">
            SIGN IN
            <UserProfileIcon />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
