import { Outlet } from 'react-router-dom'
import { site } from '../data/site'
import { useScrollTop } from '../hooks/useScrollTop'
import Footer from './Footer'
import Header from './Header'

export default function Layout() {
  useScrollTop()
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <a className="whatsapp-float" href={site.whatsapp} target="_blank" rel="noreferrer" aria-label="Chat with Success Hub on WhatsApp">WhatsApp</a>
    </>
  )
}
