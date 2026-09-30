import { IconGlobe, IconCalendar, IconAlertCircle, IconServer } from '../../../components/Icons'
import section from '../../../components/section.module.css'
import styles from './StatsGrid.module.css'

const STATS = [
  {
    icon: IconGlobe,
    title: 'Total domains',
    desc: 'Every domain in the workspace, across every client you look after.',
  },
  {
    icon: IconCalendar,
    title: 'Expiring ≤ 30d',
    desc: 'The renewals that need attention this month, counted before you open the list.',
  },
  {
    icon: IconAlertCircle,
    title: 'Expired',
    desc: 'Domains past their renewal date, kept on the record rather than deleted.',
  },
  {
    icon: IconServer,
    title: 'Hosting providers',
    desc: 'How many separate places your sites are actually served from.',
  },
]

export default function StatsGrid() {
  return (
    <section className={section.section}>
      <div className={`${section.inner} reveal-stagger`}>
        <h2 className={section.headingCenter} style={{ textAlign: 'center', margin: '0 auto 20px' }}>
          The four numbers at the top of the page
        </h2>
        <p className={section.bodyCenter} style={{ margin: '0 auto 48px' }}>
          Open Domain Manager and the state of every domain you hold is the first thing you see.
        </p>

        <div className={`${styles.cards} reveal-stagger`}>
          {STATS.map(({ icon: Icon, title, desc }) => (
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
