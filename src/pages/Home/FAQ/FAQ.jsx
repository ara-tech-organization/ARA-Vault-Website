import { useState } from 'react'
import { IconChevronDown } from '../../../components/Icons'
import section from '../../../components/section.module.css'
import styles from './FAQ.module.css'

const QUESTIONS = [
  {
    q: 'Is ARA Vault really zero-knowledge?',
    a: 'Yes. Every password, key and sensitive field is encrypted in your browser before it ever reaches our servers. We only ever store scrambled data, so we have nothing readable to hand over even if asked.',
  },
  {
    q: 'What happens if I forget my password?',
    a: "Your backup codes let you regain access to your own account. Because we never hold your password, an admin can reset your sign-in but cannot recover data locked behind a vault password you've lost without one.",
  },
  {
    q: 'Can I use ARA Vault on mobile?',
    a: 'Yes, the mobile app has full feature parity with the web app, including admin controls, sharing and offboarding.',
  },
  {
    q: 'How is sharing different from just sending a password?',
    a: 'You share access, not the secret itself. The recipient can use the credential according to their role, and you can revoke that access at any time without changing the password.',
  },
  {
    q: 'What happens when someone leaves the team?',
    a: "Deactivating them signs them out everywhere and removes every vault, credential and team they had access to. We recommend rotating vault keys afterwards for a clean break.",
  },
  {
    q: 'How many people can be on a vault?',
    a: 'There is no hard limit. Vaults can be shared with individuals, roles or entire teams, and each person gets exactly the access their role allows.',
  },
  {
    q: 'Do you offer a free trial?',
    a: 'Yes, every new workspace starts with a free trial so your team can set up vaults and invite members before committing.',
  },
  {
    q: 'Can I export my data?',
    a: 'Yes. Activity logs and health reports can be exported as CSV at any time, and account admins can export a full workspace record.',
  },
  {
    q: 'Is there an API?',
    a: 'An API is on our roadmap for teams that want to integrate ARA Vault with their existing tooling. Reach out and we can share timelines.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className={section.section}>
      <div className={`${section.inner} reveal-stagger`}>
        <h2 className={section.headingCenter} style={{ textAlign: 'center', margin: '0 auto 48px' }}>
          Frequently Asked Questions (FAQ)
        </h2>

        <div className={`${styles.questions} reveal-stagger`}>
          {QUESTIONS.map((item, index) => {
            const open = openIndex === index
            return (
              <div key={item.q} className={styles.item}>
                <button
                  type="button"
                  className={`${styles.question} ${open ? styles.questionOpen : ''}`}
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? -1 : index)}
                >
                  <span>{item.q}</span>
                  <IconChevronDown
                    width={18}
                    height={18}
                    className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`}
                  />
                </button>
                {open && <p className={styles.answer}>{item.a}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
