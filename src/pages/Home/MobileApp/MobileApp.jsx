import { Link } from 'react-router-dom'
import DecorGlow from '../../../components/DecorGlow/DecorGlow'
import brandMark1 from '../../../assets/icons/brand-mark-1.svg'
import brandMark2 from '../../../assets/icons/brand-mark-2.svg'
import brandMark3 from '../../../assets/icons/brand-mark-3.svg'
import section from '../../../components/section.module.css'
import styles from './MobileApp.module.css'

export default function MobileApp() {
  return (
    <section className={section.section}>
      <DecorGlow top={-140} left="56.5%" size={620} color="#9500ff" opacity={0.1} blur={95} />
      <div className={`${section.inner} ${styles.split} reveal-stagger`}>
        <div className={`${styles.copy} reveal-stagger`}>
          <p className={styles.eyebrow}>Mobile app</p>
          <h2 className={styles.heading}>Everything in ARA Vault, now in your pocket</h2>
          <p className={styles.desc}>
            The mobile app isn&rsquo;t a lite version. Every vault, credential, document and
            admin control you have on the web works on your phone, with the same encryption
            and the same access rules. Add a server key at a site visit, share a client login
            from the airport, or offboard a leaver before you&rsquo;re back at your desk.
          </p>
          <div className={styles.actions}>
            <button type="button" className={styles.cta}>
              Get it on Google Play
            </button>
            <Link to="/mobile-app" className={styles.learnMore}>
              See the full mobile app &rarr;
            </Link>
          </div>
        </div>
        <div className={styles.phoneWrap}>
          <div className={styles.phone}>
            <div className={styles.phoneScreen}>
              <div className={styles.phoneMark}>
                <div className={styles.markShackle}>
                  <img src={brandMark1} alt="" />
                </div>
                <div className={styles.markBody}>
                  <img src={brandMark2} alt="" />
                </div>
                <div className={styles.markKeyhole}>
                  <img src={brandMark3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
