import { IconSearch, IconStar, IconFolder, IconMail, IconUsers, IconFile } from '../../../components/Icons'
import section from '../../../components/section.module.css'
import styles from './MoreInWorkspace.module.css'

const TILES = [
  { icon: IconSearch, title: 'Global search', desc: 'Find any credential, document or vault in seconds, across your whole workspace.' },
  { icon: IconStar, title: 'Starred items', desc: 'Pin the logins and documents you reach for daily so they are one click away.' },
  { icon: IconFolder, title: 'Nested folders', desc: 'Organise vaults the way your team already thinks about them.' },
  { icon: IconMail, title: 'Email alerts', desc: 'Get notified about expiring documents and access requests waiting on you.' },
  { icon: IconUsers, title: 'Custom roles', desc: 'Define exactly what each role can read, add or edit.' },
  { icon: IconFile, title: 'CSV export', desc: 'Pull activity logs and health reports for audits, in one click.' },
]

export default function MoreInWorkspace() {
  return (
    <section className={section.section}>
      <div className={`${section.inner} reveal-stagger`}>
        <h2 className={section.headingCenter} style={{ textAlign: 'center', margin: '0 auto 48px' }}>
          More in every workspace
        </h2>
        <div className={`${styles.tiles} reveal-stagger`}>
          {TILES.map(({ icon: Icon, title, desc }) => (
            <div key={title} className={styles.tile}>
              <div className={styles.iconTile}>
                <Icon width={22} height={22} />
              </div>
              <h3 className={styles.tileTitle}>{title}</h3>
              <p className={styles.tileDesc}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
