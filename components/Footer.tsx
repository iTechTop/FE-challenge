"use client";

import { useState, useEffect } from "react";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  DiscordIcon,
  StarRatingIcon,
  ExpandArrowIcon,
} from "./icons/Icons";
import {
  traditionalPaymentMethods,
  cryptocurrencyPaymentMethods,
  socialMediaPlatforms,
} from "../data/mockData";

const Footer = () => {
  const [expandedSections, setExpandedSections] = useState<{
    [key: string]: boolean;
  }>({});
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const checkScreenSize = () => {
    setIsSmallScreen(window.innerWidth <= 1024);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleSectionToggle = (sectionKey: string) => {
    if (isSmallScreen) {
      setExpandedSections((prevState) => ({
        ...prevState,
        [sectionKey]: !prevState[sectionKey],
      }));
    }
  };

  const socialPlatformIcons = [
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
    DiscordIcon,
  ];

  return (
    <footer className="page-bottom">
      {/* Payment Options Section */}
      <div className="payment-options">
        <div className="payment-grid">
          {traditionalPaymentMethods.map((payment, index) => (
            <div key={index} className="payment-method">
              <img
                src={payment.src || "/placeholder.svg"}
                alt={payment.alt}
                className={`payment-image ${payment.className}`}
              />
            </div>
          ))}
          <div className="payment-method crypto-section">
            <div className="crypto-grid">
              {cryptocurrencyPaymentMethods.map((crypto, index) => (
                <img
                  key={index}
                  src={crypto.src || "/placeholder.svg"}
                  alt={crypto.alt}
                  className={`crypto-image ${crypto.className}`}
                />
              ))}
            </div>
          </div>
          <span className="additional-text">and 50+ more</span>
        </div>
      </div>

      {/* Social Platforms Section */}
      <div className="social-platforms">
        {socialMediaPlatforms.map((platform, index) => {
          const IconComponent = socialPlatformIcons[index];
          return (
            <a
              key={index}
              href="#"
              className={`platform-link ${platform.className}`}
              aria-label={platform.label}
            >
              <IconComponent />
            </a>
          );
        })}
      </div>

      <div className="section-divider"></div>

      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="footer-grid">
          {/* Company Information */}
          <div className="footer-column company-details">
            <div className="company-logo">
              <img
                src="/chicks-logo.svg"
                alt="Chicks Gold"
                className="company-logo-image"
              />
            </div>
            <p className="company-email">support@chicksgold.com</p>
          </div>

          {/* Chicks Gold Links */}
          <div className="footer-column">
            <h3
              className="column-title"
              onClick={() => handleSectionToggle("chicksGold")}
            >
              Chicks Gold
              {isSmallScreen && (
                <ExpandArrowIcon isRotated={expandedSections["chicksGold"]} />
              )}
            </h3>
            <ul
              className={`column-links ${
                isSmallScreen && expandedSections["chicksGold"]
                  ? "expanded"
                  : ""
              }`}
            >
              <li>
                <a href="#">Games</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Sitemap</a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="footer-column">
            <h3
              className="column-title"
              onClick={() => handleSectionToggle("support")}
            >
              Support
              {isSmallScreen && (
                <ExpandArrowIcon isRotated={expandedSections["support"]} />
              )}
            </h3>
            <ul
              className={`column-links ${
                isSmallScreen && expandedSections["support"] ? "expanded" : ""
              }`}
            >
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="footer-column">
            <h3
              className="column-title"
              onClick={() => handleSectionToggle("legal")}
            >
              Legal
              {isSmallScreen && (
                <ExpandArrowIcon isRotated={expandedSections["legal"]} />
              )}
            </h3>
            <ul
              className={`column-links ${
                isSmallScreen && expandedSections["legal"] ? "expanded" : ""
              }`}
            >
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Copyright Policy</a>
              </li>
            </ul>
          </div>

          {/* Trust Rating Section */}
          <div className="footer-column trust-rating">
            <div className="rating-stars">
              {[...Array(5)].map((_, index) => (
                <div key={index} className="star-container">
                  <StarRatingIcon />
                </div>
              ))}
            </div>
            <p className="rating-text">Trustpilot Reviews</p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="copyright-section">
          <p className="copyright-notice">
            © 2017 - 2020 Chicksgold.com. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
