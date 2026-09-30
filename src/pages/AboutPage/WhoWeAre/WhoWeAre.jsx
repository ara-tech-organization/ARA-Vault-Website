import DecorGlow from '../../../components/DecorGlow/DecorGlow'
import { IconArrowRight } from '../../../components/Icons'
import brandMark1 from '../../../assets/icons/brand-mark-1.svg'
import brandMark2 from '../../../assets/icons/brand-mark-2.svg'
import brandMark3 from '../../../assets/icons/brand-mark-3.svg'
import styles from './WhoWeAre.module.css'

export default function WhoWeAre() {
  return (
    <section className={styles.section}>
      <DecorGlow left={370} top={-200} size={700} color="#BB5CFF" opacity={0.12} blur={105} />

      <div className={`${styles.grid} reveal-stagger`}>
        <h2 className={styles.heading}>Who we are</h2>
        <div className={styles.copy}>
          <p className={styles.paragraph}>
            ARA Discover Technologies is the technology division of the ARA group. We build
            practical software for businesses, including AraSchoolMate for schools, and now
            ARA Vault for any team that handles sensitive credentials.
          </p>
          <p className={styles.paragraph}>
            ARA Vault is built on one principle: the people who run the service should never
            be able to read what you store. Everything is encrypted in your browser before
            it&rsquo;s sent, and our servers never hold a key that could unlock it. That
            isn&rsquo;t a promise we ask you to trust. It&rsquo;s how the product is built.
          </p>
        </div>
      </div>

      <div className={`${styles.card} reveal-stagger`}>
        <div className={styles.parentTile}>
          <p className={styles.parentName}>ARA Discover Technologies</p>
        </div>

        <IconArrowRight className={styles.arrow} width={40} height={40} />

        <div className={styles.brandTile}>
          <div className={styles.brandMark}>
            <div className={styles.markShackle}>
              <img alt="" src={brandMark1} />
            </div>
            <div className={styles.markBody}>
              <img alt="" src={brandMark2} />
            </div>
            <div className={styles.markKeyhole}>
              <img alt="" src={brandMark3} />
            </div>
          </div>
          <div className={styles.wordmark}>
            <p className={styles.wordmarkTop}>ARA</p>
            <p className={styles.wordmarkBottom}>Vault</p>
          </div>
        </div>
      </div>
    </section>
  )
}
