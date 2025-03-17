"use client"

import { useState, useEffect } from "react"
import "./Header.css"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container header-container">
        <div className="logo">
          <h1>
            Lex<span>Firma</span>
          </h1>
        </div>
        <div className={`menu-toggle ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={`nav ${isMenuOpen ? "active" : ""}`}>
          <ul className="nav-list">
            <li>
              <a href="#home" onClick={() => setIsMenuOpen(false)}>
                Inicio
              </a>
            </li>
            <li>
              <a href="#services" onClick={() => setIsMenuOpen(false)}>
                Servicios
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setIsMenuOpen(false)}>
                Nosotros
              </a>
            </li>
            <li>
              <a href="#team" onClick={() => setIsMenuOpen(false)}>
                Equipo
              </a>
            </li>
            <li>
              <a href="#testimonials" onClick={() => setIsMenuOpen(false)}>
                Testimonios
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

