import section from '../../../components/section.module.css'
import styles from './FeatureBlocks.module.css'
import ProductScreenshot from '../../../components/ProductScreenshot/ProductScreenshot'
import domainListScreenshot from '../../../assets/domain-manager-list.png'
import registrarScreenshot from '../../../assets/domain-detail-overview.png'
import nameserversScreenshot from '../../../assets/domain-nameservers-hosting.png'

function ScreenshotVisual({ src, alt }) {
  return (
    <div className={styles.visualBox}>
      <ProductScreenshot compact flush>
        <img src={src} alt={alt} />
      </ProductScreenshot>
    </div>
  )
}

const BLOCKS = [
  {
    eyebrow: 'See it all',
    title: 'One list, six ways to look at it',
    desc: 'All Domains is the full picture. Active Domains shows what’s live, Expiring Soon shows what renews next, Expired Domains shows what lapsed, Domain Renewals gathers the ones with a renewal to action, and Dropped keeps a record of what you chose to let go. Every view carries the same columns, so you never have to relearn the table.',
    visual: () => <ScreenshotVisual src={domainListScreenshot} alt="Domain Manager list with All, Active, Expiring soon, Expired, Renewals and Dropped view filters" />,
    reverse: false,
  },
  {
    eyebrow: 'Know who holds it',
    title: 'Registrar, owner and WHOIS on one record',
    desc: 'Each domain opens to a record, not a row. The summary line carries the primary URL, status, client, hosting and renewal date. Below it, Registrar & Ownership holds the registrar or provider, the email address the domain is registered to, the date it was registered, the owning organisation and the owner country.',
    visual: () => <ScreenshotVisual src={registrarScreenshot} alt="Domain record showing primary URL, status, client, hosting and renewal date, plus Registrar & Ownership details" />,
    reverse: true,
  },
  {
    eyebrow: 'DNS and delivery',
    title: 'Nameservers, certificate and hosting, side by side',
    desc: 'Nameservers & SSL holds the DNS delegation and the certificate securing the site — issuer and expiry, with the days remaining shown next to the date. Hosting Details holds the provider, the email the hosting account sits under, the plan, the server IP and the region. Where a field hasn’t been filled in, the record says so rather than leaving a blank.',
    visual: () => <ScreenshotVisual src={nameserversScreenshot} alt="Nameservers & SSL and Hosting Details sections of a domain record" />,
    reverse: false,
  },
  {
    eyebrow: 'Nothing lapses quietly',
    title: 'Renewal dates you can see coming',
    desc: 'Every domain carries its renewal date and the number of days left until it arrives. Expiring Soon collects anything inside the next thirty days, and the counter at the top of the page tells you how many there are before you open the list. Renewal History keeps what was renewed and when, so a domain that has changed registrar twice still reads as one story.',
    visual: null,
    reverse: false,
    full: true,
  },
  {
    eyebrow: 'The rest of the file',
    title: 'The logins and documents that belong to the domain, attached to it',
    desc: 'A domain is rarely just a name. Documents & Credentials links the registrar login, the hosting account, the DNS credentials and the files that prove ownership — invoices, transfer codes, certificates — each encrypted in your browser like everything else in the vault. Notes & Activity keeps the context: why the domain was bought, what it points at now, and a record of every change made to it.',
    visual: null,
    reverse: false,
    full: true,
  },
]

export default function FeatureBlocks() {
  return (
    <section className={section.section}>
      <div className={`${section.inner} reveal-stagger`}>
        <h2 className={styles.heading}>Built to hold everything a domain carries</h2>

        <div className={styles.blocks}>
          {BLOCKS.map((block) => {
            const Visual = block.visual
            return (
              <div
                key={block.title}
                className={`${styles.block} ${block.reverse ? styles.blockReverse : ''} ${block.full ? styles.blockFull : ''} reveal-stagger`}
              >
                <div className={styles.copy}>
                  <p className={styles.eyebrow}>{block.eyebrow}</p>
                  <h3 className={styles.title}>{block.title}</h3>
                  <p className={styles.desc}>{block.desc}</p>
                </div>
                {Visual && (
                  <div className={styles.visual}>
                    <Visual />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
