import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { pageMeta } from '../data/site'
import { services, servicesIntro } from '../data/services'
import { usePageMeta } from '../hooks/usePageMeta'

export default function ServicesPage() {
  usePageMeta(...pageMeta.services)
  return <main id="main-content"><PageHero {...servicesIntro} intro={servicesIntro.description} imageLabel="Student consultation and application planning" imageVariant="services" />
    <section className="section"><div className="shell service-list">{services.map((service, index) => <article key={service.title}><span>{String(index + 1).padStart(2, '0')}</span><div><h2>{service.title}</h2><p>{service.description}</p><Link className="text-link" to="/contact#enquiry-form">Book a Consultation <span aria-hidden="true">→</span></Link></div></article>)}</div></section>
  </main>
}
