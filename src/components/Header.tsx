import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : ''
  }

  return (
    <header className="header">
      <div className="header-content">
        <h1>Timothy Flynn</h1>
        <button 
          className="hamburger-btn" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className="hamburger-icon">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <Link to="/" className={isActive('/')} onClick={closeMenu}>Home</Link>
        <Link to="/work-history" className={isActive('/work-history')} onClick={closeMenu}>Work History</Link>
        <Link to="/wildlife-photography" className={isActive('/wildlife-photography')} onClick={closeMenu}>Wildlife Photography</Link>
      </nav>
    </header>
  )
}
