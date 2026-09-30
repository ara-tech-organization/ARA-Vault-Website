import { Link } from 'react-router-dom'
import ProductScreenshot from '../../../components/ProductScreenshot/ProductScreenshot'
import domainListScreenshot from '../../../assets/domain-manager-list.png'
import styles from './DomainHero.module.css'

export default function DomainHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.glowRight} aria-hidden="true" />
      <div className={styles.glowLeft} aria-hidden="true" />

      <div className={`${styles.content} reveal-stagger`}>
        <p className={styles.eyebrow}>Domain Manager</p>

        <h1 className={styles.heading}>
          Every domain you own, and everything that keeps it alive
        </h1>

        <p className={styles.subtext}>
          Manage domains, renewals, DNS, ownership and related credentials in one place.
          Registrar, nameservers, SSL, hosting and the logins that open each account all sit
          on the same record, in the same workspace as your vaults.
        </p>

        <div className={styles.actions}>
          <Link to="/pricing" className={styles.ctaPrimary}>
            Create your workspace
          </Link>
          <Link to="/contact" className={styles.ctaSecondary}>
            Book a demo
          </Link>
        </div>

        <p className={styles.caption}>Domains sits in the sidebar, next to Documents and Vaults.</p>

        <div className={styles.screenshotWrap}>
          <ProductScreenshot flush>
            <img
              src={domainListScreenshot}
              alt="Domain Manager dashboard showing total domains, expiring and expired counts, hosting providers, and the domain list with view filters"
            />
          </ProductScreenshot>
        </div>
      </div>
    </section>
  )
}
