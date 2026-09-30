import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import MobileAppPage from './pages/MobileAppPage/MobileAppPage'
import DomainManagerPage from './pages/DomainManagerPage/DomainManagerPage'
import AboutPage from './pages/AboutPage/AboutPage'
import ContactPage from './pages/ContactPage/ContactPage'
import PricingPage from './pages/PricingPage/PricingPage'
import ThankYouPage from './pages/ThankYouPage/ThankYouPage'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="mobile-app" element={<MobileAppPage />} />
          <Route path="domain-manager" element={<DomainManagerPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="thankyou" element={<ThankYouPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
