import { Link } from 'react-router-dom'
import DecorGlow from '../../components/DecorGlow/DecorGlow'
import { IconCheck } from '../../components/Icons'
import styles from './ThankYouPage.module.css'

export default function ThankYouPage() {
  return (
    <section className={styles.section}>
      <DecorGlow top={-220} left="50%" size={640} style={{ opacity: 0.14, background: '#BB5CFF', filter: 'blur(110px)' }} />

      <div className={styles.content}>
        <div className={styles.iconTile}>
          <IconCheck width={28} height={28} />
        </div>

        <h1 className={styles.heading}>Message sent</h1>
        <p className={styles.body}>
          Thanks for reaching out. Someone from the ARA Vault team will get back to you within
          one business day.
        </p>

        <Link to="/" className={styles.cta}>
          Back to home
        </Link>
      </div>
    </section>
  )
}
