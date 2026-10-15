import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import DestinationsPage from './pages/DestinationsPage'
import FaqPage from './pages/FaqPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import ServicesPage from './pages/ServicesPage'
import TeamPage from './pages/TeamPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/destinations" element={<DestinationsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/faqs" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
