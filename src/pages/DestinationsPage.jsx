import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { destinations, policyNote } from '../data/destinations'
import { pageMeta } from '../data/site'
import { usePageMeta } from '../hooks/usePageMeta'

export default function DestinationsPage() {
  usePageMeta(...pageMeta.destinations)
  return <main id="main-content"><PageHero eyebrow="Study destinations" title="Explore the World of Education" intro="Every destination offers different academic opportunities, admission requirements, costs, and experiences. We help students compare their options and explore pathways that suit their qualifications, interests, budget, and long-term plans." imageLabel="Global study destination planning" imageVariant="world" />
    <nav className="anchor-nav" aria-label="Destination sections"><div className="shell">{destinations.map((destination) => <a href={`#${destination.slug}`} key={destination.slug}>{destination.name}</a>)}</div></nav>
    {destinations.map((destination, index) => <section className={index % 2 ? 'section section--soft destination-detail' : 'section destination-detail'} id={destination.slug} key={destination.slug}><div className="shell destination-detail__grid"><header><p className="eyebrow">{destination.name}</p><h2>{destination.title}</h2>{destination.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<Link className="button button--primary" to="/contact#enquiry-form">{destination.cta}</Link></header><div className="destination-facts">{destination.explore.length > 0 && <div><h3>What you can explore</h3><ul className="check-list">{destination.explore.map((item) => <li key={item}>{item}</li>)}</ul></div>}{destination.who && <div><h3>Who should consider {destination.name}?</h3><p>{destination.who}</p></div>}{destination.help && <div><h3>How we can help</h3><p>{destination.help}</p></div>}<p className="policy-note">{policyNote}</p></div></div></section>)}
  </main>
}
