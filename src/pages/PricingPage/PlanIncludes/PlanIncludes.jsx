import DecorGlow from '../../../components/DecorGlow/DecorGlow'
import { IconLock, IconShield, IconSmartphone } from '../../../components/Icons'
import section from '../../../components/section.module.css'
import styles from './PlanIncludes.module.css'

const INCLUDED = [
  { icon: IconLock, label: 'Encrypted in your browser' },
  { icon: IconShield, label: "Zero-knowledge: we can't read your data" },
  { icon: IconSmartphone, label: 'Web and mobile app' },
]

export default function PlanIncludes() {
  return (
    <section className={section.section} style={{ background: 'var(--bg-lavender)' }}>
      <DecorGlow top={-180} left={400} size={640} color="#bb5cff" opacity={0.12} blur={100} />
      <div className={`${section.inner} reveal-stagger`}>
        <h2 className={section.headingCenter} style={{ textAlign: 'center', margin: '0 auto 36px' }}>
          Every plan includes
        </h2>
        <div className={`${styles.chips} reveal-stagger`}>
          {INCLUDED.map(({ icon: Icon, label }) => (
            <div key={label} className={styles.chip}>
              <Icon className={styles.chipIcon} width={18} height={18} />
              <span className={styles.chipLabel}>{label}</span>
            </div>
          ))}
        </div>
        <p className={styles.body}>
          Every plan gets the same security. Plans differ only in team size, tools and support.
        </p>
      </div>
    </section>
  )
}
