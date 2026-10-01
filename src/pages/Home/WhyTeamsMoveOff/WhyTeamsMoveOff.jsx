import { IconCheck, IconX } from '../../../components/Icons'
import section from '../../../components/section.module.css'
import styles from './WhyTeamsMoveOff.module.css'

const ROWS = [
  {
    label: 'Encrypted before it leaves your device',
    spreadsheet: false,
    chat: false,
    vault: { check: true },
  },
  {
    label: 'Control who sees which password',
    spreadsheet: 'Whole file or nothing',
    chat: 'Anyone in the thread',
    vault: { text: 'Person by person, by role or by team' },
  },
  {
    label: 'Titles visible, passwords hidden',
    spreadsheet: false,
    chat: false,
    vault: { check: true, text: 'List-only access' },
  },
  {
    label: 'Two-factor on every sign-in',
    spreadsheet: 'Depends on each account',
    chat: 'Depends on each account',
    vault: { check: true, text: 'Mandatory' },
  },
  {
    label: 'Record of who did what',
    spreadsheet: 'Limited',
    chat: false,
    vault: { check: true, text: 'Activity Logs + CSV' },
  },
  {
    label: 'Take access back when someone leaves',
    spreadsheet: 'Manual',
    chat: 'Messages stay forever',
    vault: { text: 'One step, plus key rotation' },
  },
  {
    label: 'Files stored encrypted',
    spreadsheet: false,
    chat: false,
    vault: { check: true, text: 'Up to 25 MB' },
  },
]

function PlainCell({ value }) {
  return value === false ? (
    <IconX width={16} height={16} className={styles.iconBad} />
  ) : (
    <span className={styles.cellText}>{value}</span>
  )
}

function VaultCell({ check, text }) {
  return (
    <span className={styles.vaultCell}>
      {check && <IconCheck width={16} height={16} className={styles.iconGood} />}
      {text && <span className={styles.cellText}>{text}</span>}
    </span>
  )
}

export default function WhyTeamsMoveOff() {
  return (
    <section className={section.sectionAlt}>
      <div className={`${section.inner} reveal-stagger`}>
        <h2 className={section.headingCenter} style={{ textAlign: 'center', margin: '0 auto 48px', maxWidth: 960 }}>
          Why teams move off spreadsheets and chat threads
        </h2>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>{''}</th>
                <th>Spreadsheet / shared doc</th>
                <th>Chat / email</th>
                <th className={styles.brandCol}>ARA Vault</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.label}>
                  <td className={styles.rowLabel}>{row.label}</td>
                  <td data-label="Spreadsheet / shared doc">
                    <PlainCell value={row.spreadsheet} />
                  </td>
                  <td data-label="Chat / email">
                    <PlainCell value={row.chat} />
                  </td>
                  <td className={styles.brandCol} data-label="ARA Vault">
                    <VaultCell {...row.vault} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
