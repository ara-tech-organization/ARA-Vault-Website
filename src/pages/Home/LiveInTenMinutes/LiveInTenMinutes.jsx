import { Link } from 'react-router-dom'
import DecorGlow from '../../../components/DecorGlow/DecorGlow'
import section from '../../../components/section.module.css'
import styles from './LiveInTenMinutes.module.css'

const STEPS = [
  { n: 1, title: 'Create your workspace.', desc: 'Enter a name, a username and your email.' },
  {
    n: 2,
    title: 'Secure your sign-in.',
    desc: 'Choose a strong password, scan the QR code with your authenticator app, and save your backup codes.',
  },
  { n: 3, title: 'Build your first vault.', desc: 'Add credentials and folders.' },
  {
    n: 4,
    title: 'Invite and share.',
    desc: 'Send invitations, then share vaults by person, role or team.',
  },
]

export default function LiveInTenMinutes() {
  return (
    <section className={styles.section}>
      <DecorGlow top={-160} left={370} size={700} />
      <div className={`${section.inner} reveal-stagger`}>
        <h2 className={section.headingCenter} style={{ textAlign: 'center', margin: '0 auto 56px' }}>
          Live in about ten minutes
        </h2>

        <div className={`${styles.steps} reveal-stagger`}>
          <span className={styles.connector} aria-hidden="true" />
          {STEPS.map((step) => (
            <div key={step.n} className={styles.step}>
              <div className={styles.number}>{step.n}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.actions}>
          <Link to="/pricing" className={styles.cta}>
            Create your workspace
          </Link>
        </div>
      </div>
    </section>
  )
}
