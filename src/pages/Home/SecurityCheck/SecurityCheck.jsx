import DecorGlow from '../../../components/DecorGlow/DecorGlow'
import { IconEyeOff, IconLock, IconFile } from '../../../components/Icons'
import section from '../../../components/section.module.css'
import styles from './SecurityCheck.module.css'

const PILLARS = [
  {
    icon: IconEyeOff,
    title: 'Zero knowledge, by design',
    desc: "Your password is turned into keys inside your browser using Argon2id, a deliberately slow function. It never leaves your device. The people who run ARA Vault can't read your data, not because of a policy but because it isn't possible.",
  },
  {
    icon: IconLock,
    title: 'Two locks on top',
    desc: 'Authenticator-app 2FA is mandatory on every sign-in. Optional vault passwords add a second lock, with no reset and no back door.',
  },
  {
    icon: IconFile,
    title: 'Nothing hidden',
    desc: "We publish exactly what our servers can and can't see, including the settings your admin controls.",
  },
]

const READ_TABLE = [
  {
    hidden: 'Every password and sensitive field',
    visible: 'Your username, email and role',
  },
  {
    hidden: 'Credential titles, URLs and usernames',
    visible: "Which vaults exist and who's in them, but not what's inside",
  },
  {
    hidden: 'Vault and folder names and descriptions',
    visible: 'When things changed',
  },
  {
    hidden: 'Every file you upload',
    visible: 'Your authenticator secret, to check your code',
  },
]

export default function SecurityCheck() {
  return (
    <section className={styles.section}>
      <DecorGlow top={380} left={1007} size={520} />
      <DecorGlow top={-140} left={-64} size={560} />
      <div className={`${section.inner} reveal-stagger`}>
        <h2 className={section.headingCenter} style={{ textAlign: 'center', margin: '0 auto 48px', maxWidth: 960 }}>
          Security you can check, not just trust
        </h2>

        <div className={`${styles.pillars} reveal-stagger`}>
          {PILLARS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className={styles.pillar}>
              <div className={styles.iconTile}>
                <Icon width={24} height={24} />
              </div>
              <h3 className={styles.pillarTitle}>{title}</h3>
              <p className={styles.pillarDesc}>{desc}</p>
            </div>
          ))}
        </div>

        <p className={styles.tableIntro}>What the server can and can&rsquo;t read:</p>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Stays scrambled (we can&rsquo;t open it)</th>
                <th>Readable, because the service needs it</th>
              </tr>
            </thead>
            <tbody>
              {READ_TABLE.map((row) => (
                <tr key={row.hidden}>
                  <td className={styles.hiddenCol}>{row.hidden}</td>
                  <td className={styles.visibleCol}>{row.visible}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
