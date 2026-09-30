import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IconMapPin, IconPhone, IconMail, IconLogin, IconLock } from '../../../components/Icons'
import Dropdown from '../../../components/Dropdown/Dropdown'
import styles from './ContactHero.module.css'

const CONTACT_ROWS = [
  {
    icon: IconMapPin,
    label: 'Office',
    value: (
      <>
        ARA Discover Technologies
        <br />
        67A, Giri Road, Srinivasapuram, Balaganapathy Nagar,
        <br />
        Thanjavur, Tamil Nadu 613009
      </>
    ),
  },
  { icon: IconPhone, label: 'Phone', value: '+91 81100 15152' },
  { icon: IconMail, label: 'Email', value: 'aradiscovertechnologies@gmail.com' },
  { icon: IconLogin, label: 'Sign in', value: 'aravault.discovertechnologies.co' },
]

const TEAM_SIZES = ['1–10', '11–50', '51–200', '200+']
const HELP_REASONS = ['Book a demo', 'Pricing', 'Support', 'Partnership', 'Other']

const INITIAL_FORM = {
  fullName: '',
  workEmail: '',
  phone: '',
  company: '',
  teamSize: '',
  reason: '',
  message: '',
}

function ContactInfo() {
  return (
    <div className={styles.infoCard}>
      <h2 className={styles.infoTitle}>Reach us directly</h2>
      <div className={styles.infoRows}>
        {CONTACT_ROWS.map(({ icon: Icon, label, value }) => (
          <div key={label} className={styles.infoRow}>
            <div className={styles.infoIconTile}>
              <Icon width={18} height={18} />
            </div>
            <div className={styles.infoText}>
              <p className={styles.infoLabel}>{label}</p>
              <p className={styles.infoValue}>{value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ContactForm() {
  const [form, setForm] = useState(INITIAL_FORM)
  const navigate = useNavigate()

  function update(field) {
    return (event) => setForm((prev) => ({ ...prev, [field]: event.target.value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    navigate('/thankyou')
  }

  return (
    <form className={styles.formCard} onSubmit={handleSubmit}>
      <div className={styles.formRow}>
        <label className={styles.field}>
          <span className={styles.fieldLabel}>Full name</span>
          <input
            className={styles.input}
            type="text"
            placeholder="Your full name"
            value={form.fullName}
            onChange={update('fullName')}
            required
          />
        </label>
        <label className={styles.field}>
          <span className={styles.fieldLabel}>Work email</span>
          <input
            className={styles.input}
            type="email"
            placeholder="you@company.com"
            value={form.workEmail}
            onChange={update('workEmail')}
            required
          />
        </label>
      </div>

      <div className={styles.formRow}>
        <label className={styles.field}>
          <span className={styles.fieldLabel}>Phone</span>
          <input
            className={styles.input}
            type="tel"
            placeholder="+91"
            value={form.phone}
            onChange={update('phone')}
          />
        </label>
        <label className={styles.field}>
          <span className={styles.fieldLabel}>Company name</span>
          <input
            className={styles.input}
            type="text"
            placeholder="Your company"
            value={form.company}
            onChange={update('company')}
          />
        </label>
      </div>

      <div className={styles.field}>
        <span className={styles.fieldLabel}>Team size</span>
        <Dropdown
          name="teamSize"
          options={TEAM_SIZES}
          value={form.teamSize}
          onChange={(size) => setForm((prev) => ({ ...prev, teamSize: size }))}
          placeholder="1–10 / 11–50 / 51–200 / 200+"
        />
      </div>

      <div className={styles.field}>
        <span className={styles.fieldLabel}>How can we help?</span>
        <Dropdown
          name="reason"
          options={HELP_REASONS}
          value={form.reason}
          onChange={(reason) => setForm((prev) => ({ ...prev, reason }))}
          placeholder="Book a demo / Pricing / Support / Partnership / Other"
        />
      </div>

      <label className={styles.field}>
        <span className={styles.fieldLabel}>Message</span>
        <textarea
          className={styles.textarea}
          placeholder="Tell us what you're protecting…"
          value={form.message}
          onChange={update('message')}
          required
        />
      </label>

      <button type="submit" className={styles.submit}>
        Send message
      </button>

      <p className={styles.disclaimer}>
        <IconLock width={16} height={16} className={styles.disclaimerIcon} />
        Never send passwords or credentials through this form.
      </p>
    </form>
  )
}

export default function ContactHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.glowRight} aria-hidden="true" />
      <div className={styles.glowLeft} aria-hidden="true" />

      <div className={`${styles.grid} reveal-stagger`}>
        <div className={styles.copy}>
          <h1 className={styles.heading}>Let&apos;s talk</h1>
          <p className={styles.subtext}>
            Got credentials scattered across spreadsheets, browsers, and group chats? Tell us
            what you&apos;re protecting — a team, a client base, a codebase — and we&apos;ll show
            you exactly how it locks down.
          </p>
          <ContactInfo />
        </div>

        <ContactForm />
      </div>
    </section>
  )
}
