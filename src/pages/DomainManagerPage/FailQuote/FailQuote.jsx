import DecorGlow from '../../../components/DecorGlow/DecorGlow'
import section from '../../../components/section.module.css'
import styles from './FailQuote.module.css'

export default function FailQuote() {
  return (
    <section className={styles.section}>
      <DecorGlow top={60} right={-110} size={420} />
      <DecorGlow top={-140} left={-110} size={460} />
      <div className={`${section.inner} reveal-stagger`} style={{ textAlign: 'center' }}>
        <h2 className={section.headingCenter}>
          A domain doesn&rsquo;t fail loudly. It just stops renewing.
        </h2>
        <p className={section.bodyCenter}>
          Domains sit in one person&rsquo;s registrar account, the renewal notice goes to an
          inbox nobody reads, and the card on file belongs to someone who left. ARA Vault
          gives every domain a record: who registered it, where it&rsquo;s hosted, when it
          renews and which login opens the account. That record lives beside your vaults,
          with the same encryption and the same access rules.
        </p>
      </div>
    </section>
  )
}
