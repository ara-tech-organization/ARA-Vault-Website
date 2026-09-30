import DecorGlow from '../../../components/DecorGlow/DecorGlow'
import brandMark1 from '../../../assets/icons/brand-mark-1.svg'
import brandMark2 from '../../../assets/icons/brand-mark-2.svg'
import brandMark3 from '../../../assets/icons/brand-mark-3.svg'
import mobileAppScreenshot from '../../../assets/mobileapp.png'
import styles from './Hero.module.css'

function BrandMark({ className = '' }) {
  return (
    <div className={`${styles.brandMark} ${className}`}>
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
  )
}

export default function Hero() {
  return (
    <section className={styles.hero}>
      <DecorGlow
        top={-200}
        right={-60}
        size={460}
        style={{ opacity: 0.11, background: '#9500FF', filter: 'blur(105px)' }}
      />
      <DecorGlow
        top={-280}
        left={-44}
        size={520}
        style={{ opacity: 0.16, background: '#BB5CFF', filter: 'blur(105px)' }}
      />

      <div className={`${styles.content} reveal-stagger`}>
        <p className={styles.eyebrow}>ARA Vault Mobile App</p>
        <h1 className={styles.heading}>Your Vault, On Every Device</h1>
        <p className={styles.subtext}>
          Access your passwords, passkeys, cards, and secrets securely from anywhere with the
          ARA Vault mobile app. One vault, every device.
        </p>

        <div className={styles.actions}>
          <button type="button" className={styles.cta}>
            Get the mobile app
          </button>
        </div>

        <div className={styles.mockupCard}>
          <DecorGlow
            top="11%"
            left="61%"
            size={520}
            style={{ opacity: 0.26, background: '#9500FF', filter: 'blur(95px)' }}
          />
          <div className={styles.browserMockup}>
            <div className={styles.browserChrome}>
              <span className={styles.dot} />
              <span className={styles.dot} />
              <span className={styles.dot} />
              <div className={styles.browserUrl}>
                <span className={styles.browserUrlText}>
                  aravault.discovertechnologies.co
                </span>
              </div>
            </div>
            <div className={styles.browserBody}>
              <img
                src={mobileAppScreenshot}
                alt="ARA Vault dashboard"
                className={styles.browserScreenshot}
              />
            </div>
          </div>
          <div className={styles.phoneMockup}>
            <div className={styles.phoneScreen}>
              <BrandMark className={styles.mockBrandMark} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
