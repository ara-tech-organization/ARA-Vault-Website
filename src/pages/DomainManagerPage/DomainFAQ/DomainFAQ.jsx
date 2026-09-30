import { useState } from 'react'
import { IconChevronDown } from '../../../components/Icons'
import section from '../../../components/section.module.css'
import styles from './DomainFAQ.module.css'

const QUESTIONS = [
  {
    q: 'Do I need a separate tool to manage domains?',
    a: 'No. Domain Manager sits in the same workspace as your vaults, under the same sign-in, the same two-factor and the same roles.',
  },
  {
    q: 'Can I keep client domains separate from our own?',
    a: 'Yes. Every domain carries a client, and the list can be searched by domain, client, registrar or hosting provider.',
  },
  {
    q: 'Does ARA Vault renew domains for me?',
    a: 'No. ARA Vault holds the record, the dates and the credentials. The renewal itself still happens at your registrar — this is what makes sure you see it coming.',
  },
  {
    q: 'What happens to a domain when it expires?',
    a: 'It moves into Expired Domains and stays on the record. Nothing is deleted, so you keep the history of what you held and what you let go.',
  },
  {
    q: 'Who can see a domain record?',
    a: 'The same people your roles and vault permissions already allow. Credentials attached to a domain follow the same read, add and edit rules as every other credential.',
  },
  {
    q: "What if I don't have all the details yet?",
    a: 'Add what you have. The record shows an empty field as empty — “No nameservers recorded” — so you can tell missing information from information that doesn’t apply.',
  },
]

export default function DomainFAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className={section.sectionAlt}>
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
