import DomainHero from './DomainHero/DomainHero'
import StatsGrid from './StatsGrid/StatsGrid'
import FailQuote from './FailQuote/FailQuote'
import FeatureBlocks from './FeatureBlocks/FeatureBlocks'
import ReferenceTables from './ReferenceTables/ReferenceTables'
import SameProtection from './SameProtection/SameProtection'
import DomainFAQ from './DomainFAQ/DomainFAQ'
import ClosingCTA from '../Home/ClosingCTA/ClosingCTA'

export default function DomainManagerPage() {
  return (
    <>
      <DomainHero />
      <StatsGrid />
      <FailQuote />
      <FeatureBlocks />
      <ReferenceTables />
      <SameProtection />
      <DomainFAQ />
      <ClosingCTA />
    </>
  )
}
