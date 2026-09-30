import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import brandMark1 from '../../assets/icons/brand-mark-1.svg'
import brandMark2 from '../../assets/icons/brand-mark-2.svg'
import brandMark3 from '../../assets/icons/brand-mark-3.svg'
import styles from './Header.module.css'

const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'Domain Manager', to: '/domain-manager' },
  { label: 'Mobile App', to: '/mobile-app' },
  { label: 'About', to: '/about' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Contact', to: '/contact' },
]

function BrandMark() {
  return (
    <div className={styles.brandMark}>
      <div className={styles.brandMarkShackle}>
        <img alt="" src={brandMark1} />
      </div>
      <div className={styles.brandMarkBody}>
        <img alt="" src={brandMark2} />
      </div>
      <div className={styles.brandMarkKeyhole}>
        <img alt="" src={brandMark3} />
      </div>
    </div>
  )
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={`${styles.header} header-enter`}>
      <Link to="/" className={styles.brand}>
        <BrandMark />
        <div className={styles.wordmark}>
          <p className={styles.wordmarkTop}>ARA</p>
          <p className={styles.wordmarkBottom}>Vault</p>
        </div>
      </Link>

      <button
        type="button"
        className={styles.menuToggle}
        aria-expanded={menuOpen}
        aria-label="Toggle menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`${styles.right} ${menuOpen ? styles.rightOpen : ''}`}>
        <nav className={styles.nav}>
          {NAV_ITEMS.map((item) =>
            item.to === '#' ? (
              <a key={item.label} href="#" className={styles.navItem}>
                {item.label}
              </a>
            ) : (
              <NavLink
                key={item.label}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `${styles.navItem} ${isActive ? styles.navItemActive : ''}`
                }
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ),
          )}
        </nav>
        <div className={styles.actions}>
          <Link to="/contact" className={styles.ctaSecondary} onClick={() => setMenuOpen(false)}>
            Book a demo
          </Link>
          <Link to="/pricing" className={styles.ctaPrimary} onClick={() => setMenuOpen(false)}>
            Create your workspace
          </Link>
        </div>
      </div>
    </header>
  )
}
