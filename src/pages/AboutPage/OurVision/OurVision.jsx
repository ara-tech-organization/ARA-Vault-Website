import DecorGlow from '../../../components/DecorGlow/DecorGlow'
import styles from './OurVision.module.css'

export default function OurVision() {
  return (
    <section className={styles.section}>
      <DecorGlow left={410} top={200} size={620} color="#BB5CFF" opacity={0.1} blur={105} />

      <div className={`${styles.inner} reveal-stagger`}>
        <p className={styles.eyebrow}>Our vision</p>
        <h2 className={styles.heading}>
          A workplace where no password is ever pasted into a chat, saved in a spreadsheet
          or lost when someone leaves, and where strong security is simple enough for every
          team to use every day.
        </h2>
      </div>
    </section>
  )
}
