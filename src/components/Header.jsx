import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { primaryNav } from '../data/nav'
import Logo from './Logo'

export default function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => setOpen(false), [location.pathname])
  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" to="/" aria-label="Birtamode Success Hub Education home">
          <Logo compact />
        </Link>
        <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen((value) => !value)}>
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <span aria-hidden="true" className={open ? 'menu-icon menu-icon--open' : 'menu-icon'} />
        </button>
        <nav id="primary-navigation" className={open ? 'primary-nav primary-nav--open' : 'primary-nav'} aria-label="Primary navigation">
          <ul>
            {primaryNav.map((item) => (
              <li key={item.to}><NavLink to={item.to}>{item.label}</NavLink></li>
            ))}
          </ul>
          <Link className="button button--primary header-cta" to="/contact#enquiry-form">Book a Consultation</Link>
        </nav>
      </div>
    </header>
  )
}
