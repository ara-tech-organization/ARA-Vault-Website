import styles from './ProductionNote.module.css'

export default function ProductionNote() {
  return (
    <section className={styles.section}>
      <div className={styles.note}>
        <div className={styles.bar} />
        <div className={styles.copy}>
          <p className={styles.heading}>Production note — not part of the published page</p>
          <p className={styles.body}>
            The content document supplies only a meta title, meta description and URL slug for
            /mobile-app. The hero uses those meta fields; the section above reuses the mobile
            copy from the Home page. No mobile screenshots were supplied, so the phone screen
            shows the ARA Vault mark rather than invented app UI. Delete this note once the page
            copy and mobile screens arrive.
          </p>
        </div>
      </div>
    </section>
  )
}
