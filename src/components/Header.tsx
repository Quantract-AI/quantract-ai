"use client";

import { useState } from "react";
import Link from "next/link";
import "./Header.css";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="header-nav">
        <div className="header-content">
          {/* Logo */}
          <Link href="/" className="header-logo">
            {/* add logo SVG or image here */}
            <Image src="/images/quantractai.png" alt="QUANTRACT AI Logo" />

            <div className="header-logo-text">
              <h1>QUANTRACT AI</h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="header-desktop-nav">
            <Link href="/" className="header-nav-link">
              Home
            </Link>
            <Link href="/about" className="header-nav-link">
              About
            </Link>
            <Link href="/services" className="header-nav-link">
              Services
            </Link>
            <Link href="/contact" className="header-nav-link">
              Contact
            </Link>
            <Link href="/contact" className="header-cta-button">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`header-mobile-button ${isMenuOpen ? "open" : ""}`}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="header-mobile-menu">
            <div className="header-mobile-nav">
              <Link
                href="/"
                className="header-nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="header-nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className="header-nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="header-nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="header-cta-button"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
