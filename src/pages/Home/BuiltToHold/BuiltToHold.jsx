import section from '../../../components/section.module.css'
import styles from './BuiltToHold.module.css'
import ProductScreenshot from '../../../components/ProductScreenshot/ProductScreenshot'
import { IconLayers } from '../../../components/Icons'
import rolesPermissionsImg from '../../../assets/roles-permissions.png'
import newVaultModalImg from '../../../assets/new-vault-modal.png'
import documentsEmptyImg from '../../../assets/documents-empty.png'
import dashboardHealthImg from '../../../assets/dashboard-health.png'

function DemoVisual() {
  return (
    <div className={styles.demoOuter}>
      <div className={styles.demoInner}>
        <div className={styles.demoChrome}>
          <span className={styles.demoDot} />
          <span className={styles.demoDot} />
          <span className={styles.demoDot} />
          <div className={styles.demoUrl}>aravault.discovertechnologies.co</div>
        </div>
        <div className={styles.demoBody}>
          <div className={styles.demoIconTile}>
            <IconLayers width={26} height={26} />
          </div>
          <p className={styles.demoTitle}>Add Item picker &mdash; all 16 credential types</p>
          <p className={styles.demoSubtitle}>
            Product demo area &mdash; reserved for the screen recording
          </p>
        </div>
      </div>
    </div>
  )
}

function ScreenshotVisual({ src, alt }) {
  return (
    <div className={styles.visualBox}>
      <ProductScreenshot flush>
        <img src={src} alt={alt} />
      </ProductScreenshot>
    </div>
  )
}

function PasswordPromptVisual() {
  return (
    <div className={styles.passwordOuter}>
      <img
        src={newVaultModalImg}
        alt="New vault creation modal showing vault name, description and vault password fields"
        className={styles.passwordImage}
      />
    </div>
  )
}

const BLOCKS = [
  {
    eyebrow: 'Store it properly',
    title: 'Sixteen kinds of secret, each with the right fields',
    desc: "You can store logins, API keys, servers, databases, bank accounts, email and cloud accounts, software licences, Wi-Fi, domains, SSL certificates, SSH keys, social media, subscriptions, 2FA recovery codes and secure notes. Organise them in nested folders, tag them, and star what matters. Passwords, private keys and card numbers are sealed separately, so people can see a title without seeing the password.",
    visual: DemoVisual,
    reverse: false,
  },
  {
    eyebrow: 'Share it precisely',
    title: 'Share with a person, a role or a whole team',
    desc: "Pick people by name, share with everyone who holds a role, or give a vault to a team like DevOps or Finance. If someone needs one login rather than a whole vault, share just that credential. Each person gets exactly what their role allows, so there's no manual permission juggling.",
    visual: () => (
      <ScreenshotVisual
        src={rolesPermissionsImg}
        alt="Roles and Permissions page showing Member and Administrator roles with their access levels"
      />
    ),
    reverse: true,
  },
  {
    eyebrow: 'Lock it at the source',
    title: "Encrypted before it's sent, locked when you walk away",
    desc: 'Everything is encrypted in your browser before it travels. Every sign-in needs your password plus a code from your authenticator app. You can add a vault password as a second lock on sensitive vaults. Vaults also re-lock on their own after a period of inactivity or when you switch tabs.',
    visual: PasswordPromptVisual,
    reverse: false,
  },
  {
    eyebrow: 'Keep the files too',
    title: 'Contracts, certificates and scans, kept as safely as passwords',
    desc: 'Upload contracts, invoices, IDs and recovery kits up to 25 MB each. Every file is encrypted in your browser and opens right in the page for members who have access. Files are flagged when their expiry or due date is within 30 days.',
    visual: () => (
      <ScreenshotVisual
        src={documentsEmptyImg}
        alt="Documents page for creating an encrypted document vault"
      />
    ),
    reverse: true,
  },
  {
    eyebrow: 'Offboard cleanly',
    title: "When someone leaves, their access leaves with them",
    desc: "Deactivate a person and they're signed out on every device. They lose every vault, shared credential and team at once. Then rotate the vault's keys so any copy of the old keys opens nothing, and change the passwords they could see.",
    visual: null,
    reverse: false,
    full: true,
  },
  {
    eyebrow: 'See everything',
    title: 'Know who did what, and what to fix first',
    desc: 'The dashboard scores password health across everything you can see. The Security page scores the workspace itself: two-factor, backup codes, lockouts and vault passwords. Activity Logs record every action, with filters and CSV export for audits. Notifications flag expiring documents, low backup codes and access waiting to be completed.',
    visual: () => (
      <ScreenshotVisual
        src={dashboardHealthImg}
        alt="Dashboard showing workspace stats, password health and item counts by type"
      />
    ),
    reverse: true,
  },
]

export default function BuiltToHold() {
  return (
    <section className={section.section}>
      <div className={`${section.inner} reveal-stagger`}>
        <h2 className={styles.heading}>Built to hold everything your team can&rsquo;t afford to lose</h2>

        <div className={styles.blocks}>
          {BLOCKS.map((block) => {
            const Visual = block.visual
            return (
              <div
                key={block.title}
                className={`${styles.block} ${block.reverse ? styles.blockReverse : ''} ${block.full ? styles.blockFull : ''} reveal-stagger`}
                style={block.full ? { gridTemplateColumns: '1fr' } : undefined}
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
