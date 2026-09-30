import { Link } from 'react-router-dom'
import brandMark1 from '../../assets/icons/brand-mark-1.svg'
import brandMark2 from '../../assets/icons/brand-mark-2.svg'
import brandMark3 from '../../assets/icons/brand-mark-3.svg'
import styles from './Footer.module.css'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Domain Manager', to: '/domain-manager' },
  { label: 'Mobile App', to: '/mobile-app' },
  { label: 'About', to: '/about' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Contact', to: '/contact' },
]

export default function Footer() {
  return (
    <footer className={`${styles.footer} reveal-stagger`}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <div className={styles.brandMark}>
            <div className={styles.markShackle}>
              <img alt="" src={brandMark1} />
            </div>
            <div className={styles.markBody}>
              <img alt="" src={brandMark2} />
            </div>
            <div className={styles.markKeyhole}>
              <img alt="" src={brandMark3} />
            </div>
          </div>
          <div className={styles.wordmark}>
            <p className={styles.wordmarkTop}>ARA</p>
            <p className={styles.wordmarkBottom}>Vault</p>
          </div>
        </div>

        <nav className={styles.nav}>
          {NAV_LINKS.map((link) =>
            link.to === '#' ? (
              <a key={link.label} href="#" className={styles.navItem}>
                {link.label}
              </a>
            ) : (
              <Link key={link.label} to={link.to} className={styles.navItem}>
                {link.label}
              </Link>
            ),
          )}
        </nav>
      </div>

      <div className={styles.divider} />

      <p className={styles.bottom}>
        ARA Vault by ARA Discover Technologies · aravault.discovertechnologies.co
      </p>
    </footer>
  )
}
