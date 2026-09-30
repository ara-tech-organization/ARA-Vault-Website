import PricingHero from './PricingHero/PricingHero'
import PricingCards from './PricingCards/PricingCards'
import PlanIncludes from './PlanIncludes/PlanIncludes'
import PlanFitTable from './PlanFitTable/PlanFitTable'
import PricingClosingCTA from './PricingClosingCTA/PricingClosingCTA'

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingCards />
      <PlanIncludes />
      <PlanFitTable />
      <PricingClosingCTA />
    </>
  )
}
