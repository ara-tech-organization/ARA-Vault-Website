import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function useScrollReveal() {
  const { pathname } = useLocation()

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll('main section, main .reveal-stagger, footer.reveal-stagger'))
    if (targets.length === 0) return

    targets.forEach((el) => {
      if (el.tagName === 'SECTION') el.classList.add('reveal')
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px' },
    )

    const raf = requestAnimationFrame(() => {
      targets.forEach((section) => observer.observe(section))
    })

    return () => {
      cancelAnimationFrame(raf)
      observer.disconnect()
    }
  }, [pathname])
}
