import { Link } from 'react-router-dom'
import styles from './ClosingCTA.module.css'

export default function ClosingCTA() {
  return (
    <section className={styles.closing}>
      <span className={styles.glowLarge} />
      <span className={styles.glowSmallRight} />
      <span className={styles.glowSmallLeft} />
      <div className={`${styles.inner} reveal-stagger`}>
        <h2 className={styles.heading}>Share the access. Keep the secrets.</h2>
        <p className={styles.body}>
          Give every secret a locked home and every person exactly the access they need.
        </p>
        <div className={styles.actions}>
          <Link to="/pricing" className={styles.cta}>
            Create your workspace
          </Link>
        </div>
      </div>
    </section>
  )
}
