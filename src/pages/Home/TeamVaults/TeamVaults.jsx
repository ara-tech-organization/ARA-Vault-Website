import DecorGlow from '../../../components/DecorGlow/DecorGlow'
import { IconKey, IconUsers, IconBriefcase, IconCode } from '../../../components/Icons'
import section from '../../../components/section.module.css'
import styles from './TeamVaults.module.css'

const CARDS = [
  {
    icon: IconKey,
    title: 'Founders & Admins',
    desc: 'Create the workspace, set the roles, and see the security of the whole company on one dashboard.',
  },
  {
    icon: IconUsers,
    title: 'Teams & Departments',
    desc: 'Engineering, Finance and Marketing each get their own vaults. Team leads add and remove their own people without needing an admin.',
  },
  {
    icon: IconBriefcase,
    title: 'Agencies & Client Work',
    desc: 'Create one vault per client. Share it with the people on the account and take it back when the work ends.',
  },
  {
    icon: IconCode,
    title: 'Developers & IT',
    desc: 'API keys, SSH keys, servers, databases, SSL certificates and domains, each with the fields it needs.',
  },
]

export default function TeamVaults() {
  return (
    <section className={section.section} style={{ background: 'var(--bg-lavender)' }}>
      <DecorGlow top={-220} left={340} size={760} color="#bb5cff" opacity={0.07} blur={120.5} />
      <div className={`${section.inner} reveal-stagger`}>
        <h2 className={section.headingCenter} style={{ textAlign: 'center', margin: '0 auto 48px' }}>
          One vault for every team that holds secrets
        </h2>
        <div className={`${styles.cards} reveal-stagger`}>
          {CARDS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className={styles.card}>
              <div className={styles.iconTile}>
                <Icon width={24} height={24} />
              </div>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardDesc}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
