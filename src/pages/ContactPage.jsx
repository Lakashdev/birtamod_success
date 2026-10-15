import ConsultationForm from '../components/ConsultationForm'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { contactContent, pageMeta, site } from '../data/site'
import { leadership, team } from '../data/team'
import { usePageMeta } from '../hooks/usePageMeta'

export default function ContactPage() {
  usePageMeta(...pageMeta.contact)
  return <main id="main-content"><PageHero eyebrow={contactContent.eyebrow} title={contactContent.title} intro={contactContent.intro} imageLabel="Success Hub office reception" imageVariant="contact" />
    <section className="section"><div className="shell contact-grid"><div className="contact-details"><p className="lead">{contactContent.body}</p><div className="contact-card"><h2>{contactContent.officeTitle}</h2><address>{site.name}<br />{site.address}</address><a className="text-link" href={site.mapsUrl} target="_blank" rel="noreferrer">Open in Google Maps <span aria-hidden="true">↗</span></a></div><div className="contact-card"><h2>{contactContent.contactTitle}</h2><p>General Enquiries: <a href={`tel:+977${site.phone}`}>{site.phoneDisplay}</a></p><p>Office Telephone: <a href={`tel:${site.officePhone}`}>{site.officePhone}</a></p><p>Email: <a href={`mailto:${site.email}`}>{site.email}</a></p><a className="button button--whatsapp" href={site.whatsapp} target="_blank" rel="noreferrer">Chat on WhatsApp</a></div><div className="contact-card"><h2>{contactContent.teamTitle}</h2>{[...leadership, ...team.slice(0, 2)].map((person) => <p key={person.name}>{person.name} — {person.role}<br /><a href={`tel:+977${person.phone}`}>{person.phoneDisplay}</a></p>)}</div><div className="map-placeholder"><span>Map</span><p>{site.address}</p><a href={site.mapsUrl} target="_blank" rel="noreferrer">Open in Google Maps</a></div></div><div className="form-panel" id="enquiry-form"><SectionHeading title={contactContent.formTitle} intro={contactContent.formIntro} /><ConsultationForm /></div></div></section>
  </main>
}
