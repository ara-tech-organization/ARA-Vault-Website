import styles from './PricingHero.module.css'

export default function PricingHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.glowRight} aria-hidden="true" />
      <div className={styles.glowLeft} aria-hidden="true" />
      <div className={`${styles.content} reveal-stagger`}>
        <h1 className={styles.heading}>Simple pricing. Serious security.</h1>
        <p className={styles.subtext}>
          Pay per person, from ₹99 a month. That&rsquo;s less than ₹3.30 a day to keep your
          team&rsquo;s passwords out of spreadsheets and chat threads.
        </p>
        <p className={styles.caption}>Try it free for 7 days. No card required.</p>
      </div>
    </section>
  )
}
