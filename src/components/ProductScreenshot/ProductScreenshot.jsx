import styles from './ProductScreenshot.module.css'

export default function ProductScreenshot({
  url = 'aravault.discovertechnologies.co',
  compact = false,
  flush = false,
  children,
}) {
  return (
    <div className={`${styles.frame} ${compact ? styles.frameCompact : ''}`}>
      <div className={styles.container}>
        <div className={styles.chrome}>
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
          <div className={styles.url}>
            <span className={styles.urlText}>{url}</span>
          </div>
        </div>
        <div className={`${styles.body} ${flush ? styles.bodyFlush : ''}`}>{children}</div>
      </div>
    </div>
  )
}
