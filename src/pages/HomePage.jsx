import { Link } from 'react-router-dom'
import FaqList from '../components/FaqList'
import ContentPanel from '../components/ContentPanel'
import ProfileCard from '../components/ProfileCard'
import SectionHeading from '../components/SectionHeading'
import { destinations } from '../data/destinations'
import { faqs } from '../data/faqs'
import { homeContent, pageMeta, processSteps, whyChooseUs } from '../data/site'
import { leadership } from '../data/team'
import { usePageMeta } from '../hooks/usePageMeta'

export default function HomePage() {
  usePageMeta(...pageMeta.home)
  return (
    <main id="main-content">
      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">{homeContent.hero.eyebrow}</p>
            <h1>{homeContent.hero.title}</h1>
            {homeContent.hero.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <div className="button-row">
              <Link className="button button--primary" to="/contact#enquiry-form">{homeContent.hero.primary}</Link>
              <Link className="button button--secondary" to="/destinations">{homeContent.hero.secondary}</Link>
            </div>
          </div>
          <ContentPanel className="hero-image" label="Study planning overview" variant="journey" />
        </div>
      </section>

      <section className="section section--guidance">
        <div className="shell split-layout">
          <ContentPanel label="Personalised counselling overview" variant="counselling" />
          <div>
            <SectionHeading eyebrow={homeContent.guidance.eyebrow} title={homeContent.guidance.title} />
            {homeContent.guidance.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <Link className="text-link" to="/contact#enquiry-form">{homeContent.guidance.button} <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className="section section--soft" id="destinations">
        <div className="shell">
          <SectionHeading eyebrow={homeContent.destinations.eyebrow} title={homeContent.destinations.title} intro={homeContent.destinations.intro} />
          <div className="destination-grid">
            {destinations.map((destination, index) => (
              <article className="destination-card" key={destination.slug}>
                <span className="card-index">0{index + 1}</span>
                <h3>{destination.name}</h3><p>{destination.short}</p>
                <Link className="text-link" to={`/destinations#${destination.slug}`}>Explore {destination.name} <span aria-hidden="true">→</span></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading eyebrow={homeContent.why.eyebrow} title={homeContent.why.title} />
          <div className="benefit-grid">
            {whyChooseUs.map((item, index) => <article className="benefit-item" key={item.title}><span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span><div><h3>{item.title}</h3><p>{item.description}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="section section--navy">
        <div className="shell process-layout">
          <div className="process-intro"><SectionHeading eyebrow={homeContent.process.eyebrow} title={homeContent.process.title} /><p className="disclaimer">{homeContent.process.disclaimer}</p></div>
          <ol className="timeline">
            {processSteps.map((step, index) => <li key={step.title}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{step.title}</h3><p>{step.description}</p></div></li>)}
          </ol>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell split-layout">
          <ContentPanel label="Birtamode Success Hub Education office details" variant="office" />
          <div><SectionHeading eyebrow={homeContent.about.eyebrow} title={homeContent.about.title} />{homeContent.about.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<Link className="text-link" to="/about">{homeContent.about.button} <span aria-hidden="true">→</span></Link></div>
        </div>
      </section>

      <section className="section">
        <div className="shell"><SectionHeading eyebrow="Leadership" title="Meet the People Behind Success Hub" /><div className="profile-grid">{leadership.map((person) => <ProfileCard key={person.name} person={person} showDescription={false} />)}</div></div>
      </section>

      <section className="section section--soft">
        <div className="shell faq-layout"><SectionHeading eyebrow="Questions and answers" title="Frequently Asked Questions" intro="Clear answers can help you plan your next conversation." /><FaqList items={faqs.slice(0, 5)} /><Link className="text-link" to="/faqs">View all questions <span aria-hidden="true">→</span></Link></div>
      </section>

      <section className="closing-cta">
        <div className="shell"><h2>{homeContent.closing.title}</h2>{homeContent.closing.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<div className="button-row"><Link className="button button--light" to="/contact#enquiry-form">{homeContent.closing.primary}</Link><Link className="button button--outline-light" to="/contact">{homeContent.closing.secondary}</Link></div></div>
      </section>
    </main>
  )
}
