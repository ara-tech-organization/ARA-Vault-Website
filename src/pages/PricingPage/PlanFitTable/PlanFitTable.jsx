import section from '../../../components/section.module.css'
import styles from './PlanFitTable.module.css'

const ROWS = [
  { team: 'Up to 10 people', fit: 'Lite', cost: '5 people = ₹495' },
  { team: 'Up to 50 people', fit: 'Pro', cost: '25 people = ₹4,975' },
  { team: '50+ people', fit: 'Business', cost: '75 people = ₹22,425' },
]

export default function PlanFitTable() {
  return (
    <section className={section.section}>
      <div className={`${section.inner} reveal-stagger`}>
        <h2 className={section.headingCenter} style={{ textAlign: 'center', margin: '0 auto 48px' }}>
          Which plan fits you?
        </h2>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col">Your team</th>
                <th scope="col">Best fit</th>
                <th scope="col">Example monthly cost</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.team}>
                  <td className={styles.teamCell}>{row.team}</td>
                  <td>{row.fit}</td>
                  <td>{row.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
