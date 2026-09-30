import { useState } from 'react'
import { Link } from 'react-router-dom'
import ProductScreenshot from '../../../components/ProductScreenshot/ProductScreenshot'
import { IconLayers } from '../../../components/Icons'
import dashboardImg from '../../../assets/dashboard-overview.png'
import styles from './Hero.module.css'

const TABS = ['Dashboard', 'Vaults', 'Credentials', 'Documents', 'Teams', 'Activity Logs']

export default function Hero() {
  const [activeTab, setActiveTab] = useState('Dashboard')

  return (
    <section className={styles.hero}>
      <div className={styles.glowLarge} aria-hidden="true" />
      <div className={styles.glowMedium} aria-hidden="true" />
      <div className={styles.glowSmall} aria-hidden="true" />

      <div className={`${styles.content} reveal-stagger`}>
        <p className={styles.eyebrow}>ARA Vault by Discover Technologies</p>

        <h1 className={styles.heading}>The safest place for your team&rsquo;s</h1>
        <p className={styles.accentLine}>
          Logins / API keys / Server Access / Bank Details / Licence Keys / Wi-Fi passwords
        </p>

        <p className={styles.subtext}>
          One shared vault for every secret more than one person needs. You decide, person
          by person, who can see what. Everything is encrypted in your browser before it
          leaves your screen.
        </p>

        <div className={styles.actions}>
          <Link to="/pricing" className={styles.ctaPrimary}>
            Create your workspace
          </Link>
          <Link to="/contact" className={styles.ctaSecondary}>
            Book a demo
          </Link>
        </div>

        <p className={styles.caption}>Set up in about ten minutes.</p>

        <div className={styles.tabs} role="tablist">
          {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={activeTab === tab}
              className={`${styles.tab} ${activeTab === tab ? styles.tabActive : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className={styles.screenshotWrap}>
          {activeTab === 'Dashboard' ? (
            <ProductScreenshot flush>
              <img
                src={dashboardImg}
                alt="ARA Vault dashboard showing vaults, credentials, people and security score"
              />
            </ProductScreenshot>
          ) : (
            <ProductScreenshot>
              <div className={styles.iconTile}>
                <IconLayers width={26} height={26} />
              </div>
              <p className={styles.screenshotTitle}>{activeTab} view</p>
              <p className={styles.screenshotSubtitle}>
                Product screenshot area &mdash; reserved for the {activeTab.toLowerCase()} view
              </p>
            </ProductScreenshot>
          )}
        </div>
      </div>
    </section>
  )
}
