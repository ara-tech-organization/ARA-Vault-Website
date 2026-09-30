import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import useScrollReveal from '../../hooks/useScrollReveal'
import styles from './Layout.module.css'

export default function Layout() {
  useScrollReveal()

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
