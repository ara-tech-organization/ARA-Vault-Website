import DecorGlow from '../../../components/DecorGlow/DecorGlow'
import section from '../../../components/section.module.css'

export default function WithoutSpreadsheet() {
  return (
    <section className={section.section}>
      <DecorGlow top={-90} left="81.9%" size={300} ring opacity={0.35} borderColor="#d9b8ff" borderWidth={1.5} />
      <DecorGlow top={120} left="80.8%" size={380} color="#9500ff" opacity={0.07} blur={97.5} />
      <DecorGlow top={-120} left="-6.6%" size={420} color="#bb5cff" opacity={0.1} blur={97.5} />
      <div className={`${section.inner} reveal-stagger`} style={{ textAlign: 'center' }}>
        <h2 className={section.headingCenter}>
          Team password security, without the spreadsheet
        </h2>
        <p className={section.bodyCenter}>
          Spreadsheets, shared notes and chat threads were never built to hold secrets. ARA
          Vault gives every login, key and account a locked home. The right people can use
          it, and there&rsquo;s a record of who did what. Our servers store only scrambled
          data. The key that unlocks it never leaves your browser.
        </p>
      </div>
    </section>
  )
}
