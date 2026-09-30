import { IconLock, IconPin, IconEyeOff, IconKey } from '../../../components/Icons'
import section from '../../../components/section.module.css'
import styles from './SameProtection.module.css'

const BADGES = [
  { icon: IconLock, label: 'End-to-end encrypted' },
  { icon: IconPin, label: 'Your data, your control' },
  { icon: IconEyeOff, label: 'Zero knowledge' },
  { icon: IconKey, label: 'Encrypted in this browser' },
]

export default function SameProtection() {
  return (
    <section className={section.section}>
      <div className={`${section.inner} reveal-stagger`} style={{ textAlign: 'center' }}>
        <h2 className={section.headingCenter} style={{ margin: '0 auto 16px' }}>
          The same protection as the rest of the vault
        </h2>
        <p className={section.bodyCenter} style={{ margin: '0 auto 32px' }}>
          Domain records aren&rsquo;t a separate tool bolted on. They live in your workspace,
          under the same sign-in, the same two-factor and the same roles &mdash; and every
          change is written to Activity Logs.
        </p>

        <div className={`${styles.badges} reveal-stagger`}>
          {BADGES.map(({ icon: Icon, label }) => (
            <div key={label} className={styles.badge}>
              <Icon width={16} height={16} className={styles.badgeIcon} />
              <span>{label}</span>
            </div>
          ))}
        </div>

        <div className={styles.callout}>
          <p>
            Your Master PIN never leaves this device. A domain record is stored the same way
            everything else in the vault is stored &mdash; scrambled before it is sent, with
            the key that opens it held only by you.
          </p>
        </div>
      </div>
    </section>
  )
}
