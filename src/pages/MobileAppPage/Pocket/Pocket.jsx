import DecorGlow from '../../../components/DecorGlow/DecorGlow'
import styles from './Pocket.module.css'

export default function Pocket() {
  return (
    <section className={styles.section}>
      <DecorGlow
        top={-200}
        left="26%"
        size={680}
        style={{ opacity: 0.12, background: '#BB5CFF', filter: 'blur(105px)' }}
      />

      <div className={styles.content}>
        <h2 className={styles.heading}>Everything in ARA Vault, now in your pocket</h2>
        <p className={styles.body}>
          The mobile app isn&rsquo;t a lite version. Every vault, credential, document and
          admin control you have on the web works on your phone, with the same encryption
          and the same access rules. Add a server key at a site visit, share a client login
          from the airport, or offboard a leaver before you&rsquo;re back at your desk.
        </p>

        <div className={styles.actions}>
          <button type="button" className={styles.cta}>
            Get the mobile app
          </button>
        </div>
      </div>
    </section>
  )
}
