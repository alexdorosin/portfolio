import "./Header.css"

import { useState } from "react"

export const Header = () => {
  document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
      const header = document.querySelector(".header")

      if (window.scrollY >= 80) {
        header?.classList.add("scroll-header")
      } else {
        header?.classList.remove("scroll-header")
      }
    })
  })

  const [Toggle, showMenu] = useState(false)
  const [activeNav, setActiveNav] = useState("#home")

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Dorosin
        </a>

        <div className={`nav__menu ${Toggle && "show-menu"}`}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={`nav__link ${activeNav === "#home" && "active-link"}`}
              >
                <i className="uil uil-estate nav__icon" /> Home
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={`nav__link ${activeNav === "#about" && "active-link"}`}
              >
                <i className="uil uil-user nav__icon" /> About
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={`nav__link ${activeNav === "#skills" && "active-link"}`}
              >
                <i className="uil uil-file-alt nav__icon" /> Skills
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#services"
                onClick={() => setActiveNav("#services")}
                className={`nav__link ${activeNav === "#services" && "active-link"}`}
              >
                <i className="uil uil-briefcase-alt nav__icon" /> Services
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#portfolio"
                onClick={() => setActiveNav("#portfolio")}
                className={`nav__link ${activeNav === "#portfolio" && "active-link"}`}
              >
                <i className="uil uil-scenery nav__icon" /> Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={`nav__link ${activeNav === "#contact" && "active-link"}`}
              >
                <i className="uil uil-message nav__icon" /> Contact
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          />
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uit uil-apps" />
        </div>
      </nav>
    </header>
  )
}
