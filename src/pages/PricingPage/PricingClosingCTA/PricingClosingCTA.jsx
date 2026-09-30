import { Link } from 'react-router-dom'
import styles from './PricingClosingCTA.module.css'

export default function PricingClosingCTA() {
  return (
    <section className={styles.closing}>
      <span className={styles.glowLarge} />
      <span className={styles.glowSmallRight} />
      <span className={styles.glowSmallLeft} />
      <div className={`${styles.inner} reveal-stagger`}>
        <h2 className={styles.heading}>Your passwords deserve better than a spreadsheet.</h2>
        <p className={styles.body}>Start free for 7 days. No card, no commitment.</p>
        <div className={styles.actions}>
          <Link to="/contact" className={styles.ctaPrimary}>
            Start free trial
          </Link>
          <Link to="/contact" className={styles.ctaSecondary}>
            Talk to sales
          </Link>
        </div>
      </div>
    </section>
  )
}
