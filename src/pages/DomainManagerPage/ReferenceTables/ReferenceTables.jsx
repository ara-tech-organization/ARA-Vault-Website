import DecorGlow from '../../../components/DecorGlow/DecorGlow'
import section from '../../../components/section.module.css'
import styles from './ReferenceTables.module.css'

const VIEW_ROWS = [
  { key: 'All Domains', value: 'Every domain in the workspace, whoever it belongs to' },
  { key: 'Active Domains', value: 'Live domains that are inside their renewal period' },
  { key: 'Expiring Soon', value: 'Anything due to renew within the next thirty days' },
  { key: 'Expired Domains', value: 'Domains that are past their renewal date' },
  { key: 'Domain Renewals', value: 'Domains with a renewal to action, and the ones already actioned' },
  { key: 'Dropped', value: 'Domains you chose not to renew, kept for the record' },
]

const RECORD_ROWS = [
  { key: 'Summary', value: 'Primary URL, status, client, hosting provider and renewal date' },
  {
    key: 'Registrar Details',
    value: 'Registrar or provider, registered email ID and the date it was registered',
  },
  { key: 'WHOIS / Ownership', value: 'Owner or organisation, and owner country' },
  {
    key: 'DNS Management',
    value: "Where the domain's DNS is handled, kept with the credentials that change it",
  },
  { key: 'Nameservers', value: 'The nameservers the domain is currently delegated to' },
  { key: 'SSL Status', value: 'Certificate issuer and expiry date, with the days remaining' },
  { key: 'Hosting Details', value: 'Hosting provider, associated email ID, plan, server IP and region' },
  { key: 'Renewal History', value: 'What was renewed and when, kept across registrar changes' },
  {
    key: 'Documents & Credentials',
    value: 'The logins and files that prove and control ownership',
  },
  {
    key: 'Notes & Activity',
    value: 'Context for the domain, and a record of every change made to it',
  },
]

function InfoTable({ leftHeading, rightHeading, rows }) {
  return (
    <div className={styles.table}>
      <div className={`${styles.row} ${styles.headRow}`}>
        <div className={styles.cellLeft}>{leftHeading}</div>
        <div className={styles.cellRight}>{rightHeading}</div>
      </div>
      {rows.map((row) => (
        <div key={row.key} className={styles.row}>
          <div className={styles.cellLeft}>{row.key}</div>
          <div className={styles.cellRight}>{row.value}</div>
        </div>
      ))}
    </div>
  )
}

export default function ReferenceTables() {
  return (
    <section className={styles.section}>
      <DecorGlow top={-120} right={-140} size={440} />
      <div className={`${section.inner} reveal-stagger`}>
        <h2 className={section.headingCenter} style={{ textAlign: 'center', margin: '0 auto 56px' }}>
          What&rsquo;s on the page, and what&rsquo;s on the record
        </h2>

        <h3 className={styles.tableHeading}>Six ways to filter the list</h3>
        <InfoTable leftHeading="View" rightHeading="What it shows" rows={VIEW_ROWS} />

        <h3 className={`${styles.tableHeading} ${styles.tableHeadingSpaced}`}>
          What one domain record holds
        </h3>
        <InfoTable leftHeading="Section" rightHeading="What it holds" rows={RECORD_ROWS} />
      </div>
    </section>
  )
}
