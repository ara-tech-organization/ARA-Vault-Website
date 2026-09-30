import { Link } from 'react-router-dom'
import { IconCheck, IconStar } from '../../../components/Icons'
import section from '../../../components/section.module.css'
import styles from './PricingCards.module.css'

const PLANS = [
  {
    name: 'Trial',
    price: 'Free',
    period: '7 days',
    desc: 'Try everything in Pro, free.',
    features: ['Everything in Pro', 'No card required'],
    cta: 'Start free trial',
    tinted: false,
  },
  {
    name: 'Lite',
    price: '₹99',
    period: 'per person / month',
    desc: 'A secure locker for a small team.',
    features: ['Up to 10 people', 'Teams & custom roles', 'Credential sharing', 'Two-step login'],
    cta: 'Choose Lite',
    tinted: true,
  },
  {
    name: 'Pro',
    price: '₹199',
    period: 'per person / month',
    desc: 'The full team tool: share, organise and manage.',
    features: [
      'Up to 50 people',
      'Unlimited vaults & credentials',
      'Admin password recovery',
      'Priority support',
    ],
    cta: 'Start with Pro',
    featured: true,
  },
  {
    name: 'Business',
    price: '₹299',
    period: 'per person / month',
    desc: 'Company-grade, with room to grow.',
    features: [
      'Unlimited people',
      'Dedicated support',
      'Coming soon: single sign-on, staff auto-onboarding, audit export',
    ],
    cta: 'Choose Business',
    tinted: false,
  },
]

function FeatureList({ features }) {
  return (
    <ul className={styles.features}>
      {features.map((feature) => (
        <li key={feature} className={styles.feature}>
          <IconCheck className={styles.featureIcon} width={18} height={18} />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  )
}

export default function PricingCards() {
  return (
    <section className={section.section} style={{ paddingBottom: 0 }}>
      <div className={`${section.inner} ${styles.section}`}>
        <div className={`${styles.grid} reveal-stagger`}>
          {PLANS.map((plan) =>
            plan.featured ? (
              <div key={plan.name} className={styles.col}>
                <div className={styles.badge}>
                  <span className={styles.badgeLabel}>Most popular</span>
                  <IconStar
                    width={13}
                    height={13}
                    fill="currentColor"
                    style={{ color: 'var(--text-brand)' }}
                  />
                </div>
                <div className={styles.cardFeatured}>
                  <div className={styles.cardFeaturedInner}>
                    <h3 className={styles.planName}>{plan.name}</h3>
                    <p className={styles.price}>{plan.price}</p>
                    <p className={styles.period}>{plan.period}</p>
                    <p className={styles.desc}>{plan.desc}</p>
                    <FeatureList features={plan.features} />
                    <div className={styles.spacer} />
                    <Link to="/contact" className={styles.ctaSolid}>
                      {plan.cta}
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div key={plan.name} className={styles.col}>
                <div className={styles.badgeSpacer} />
                <div className={plan.tinted ? styles.cardTinted : styles.card}>
                  <h3 className={styles.planName}>{plan.name}</h3>
                  <p className={styles.price}>{plan.price}</p>
                  <p className={styles.period}>{plan.period}</p>
                  <p className={styles.desc}>{plan.desc}</p>
                  <FeatureList features={plan.features} />
                  <div className={styles.spacer} />
                  <Link to="/contact" className={styles.ctaOutline}>
                    {plan.cta}
                  </Link>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  )
}
