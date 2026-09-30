import DecorGlow from '../../../components/DecorGlow/DecorGlow'
import section from '../../../components/section.module.css'
import styles from './AccessLevels.module.css'

const ROWS = [
  { access: 'Read, add & edit', can: 'Use and update credentials', how: 'Server permission' },
  { access: 'Read', can: 'View and copy passwords', how: 'Server permission' },
  { access: 'List only', can: 'See titles and usernames, never passwords', how: 'Key-enforced' },
]

export default function AccessLevels() {
  return (
    <section className={section.section}>
      <DecorGlow top={60} left={-140} size={440} />
      <div className={`${section.inner} reveal-stagger`}>
        <h2 className={section.headingCenter} style={{ textAlign: 'center', margin: '0 auto 48px', maxWidth: 960 }}>
          Three levels of access, and one of them holds even if our server fails
        </h2>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Access</th>
                <th>What they can do</th>
                <th>How it&rsquo;s enforced</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.access}>
                  <td data-label="Access">{row.access}</td>
                  <td data-label="What they can do">{row.can}</td>
                  <td data-label="How it's enforced">{row.how}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.supportingLine}>
          <span className={styles.accent} aria-hidden="true" />
          <p>
            List only isn&rsquo;t a rule the server checks. The key that opens passwords is
            simply never given to that person, so no bug and no compromised server can hand
            them what they never received.
          </p>
        </div>
      </div>
    </section>
  )
}
