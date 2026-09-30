import DecorGlow from '../../../components/DecorGlow/DecorGlow'
import styles from './AboutHero.module.css'

export default function AboutHero() {
  return (
    <section className={styles.hero}>
      <DecorGlow left={-118} top={160} size={380} color="#9500FF" opacity={0.1} blur={90} />
      <DecorGlow left={921} top={-200} size={520} color="#BB5CFF" opacity={0.16} blur={100} />

      <div className={`${styles.content} reveal-stagger`}>
        <p className={styles.eyebrow}>About ARA Vault</p>
        <h1 className={styles.heading}>Built for the secrets teams share</h1>
        <p className={styles.body}>
          ARA Vault is a shared password safe for teams, built by ARA Discover Technologies
          in Thanjavur, Tamil Nadu. We built it because we saw the same problem in every
          growing business: passwords in spreadsheets, API keys in chat threads, bank logins
          passed around by word of mouth. ARA Vault gives every one of those secrets a locked
          home and lets teams decide, person by person, who can see what.
        </p>
      </div>
    </section>
  )
}
