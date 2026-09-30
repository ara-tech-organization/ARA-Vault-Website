import DecorGlow from '../../../components/DecorGlow/DecorGlow'
import styles from './OurMission.module.css'

export default function OurMission() {
  return (
    <section className={styles.section}>
      <DecorGlow left={1014} top={120} size={420} color="#BB5CFF" opacity={0.14} blur={95} />
      <DecorGlow left={48} top={-160} size={480} color="#9500FF" opacity={0.14} blur={95} />

      <div className={`${styles.inner} reveal-stagger`}>
        <p className={styles.eyebrow}>Our mission</p>
        <h2 className={styles.heading}>
          To give every team a simple, secure way to store and share its secrets, so the
          right people get exactly the access they need and nobody else gets any.
        </h2>
      </div>
    </section>
  )
}
