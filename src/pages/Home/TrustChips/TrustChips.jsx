import iconLock from '../../../assets/icons/icon-lock.svg'
import iconShield from '../../../assets/icons/icon-shield.svg'
import iconSmartphone from '../../../assets/icons/icon-smartphone.svg'
import iconClipboard from '../../../assets/icons/icon-clipboard.svg'
import styles from './TrustChips.module.css'

const CHIPS = [
  { icon: iconLock, label: 'Encrypted in your browser' },
  { icon: iconShield, label: "Zero-knowledge: we can't read your data" },
  { icon: iconSmartphone, label: 'Two-factor on every sign-in' },
  { icon: iconClipboard, label: 'Every action logged' },
]

export default function TrustChips() {
  return (
    <section className={styles.trustChips}>
      <div className={`${styles.chips} reveal-stagger`}>
        {CHIPS.map((chip) => (
          <div key={chip.label} className={styles.chip}>
            <img src={chip.icon} alt="" className={styles.chipIcon} />
            <p className={styles.chipLabel}>{chip.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
