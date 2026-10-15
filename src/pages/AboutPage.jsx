import PageHero from '../components/PageHero'
import ProfileCard from '../components/ProfileCard'
import SectionHeading from '../components/SectionHeading'
import { aboutContent, pageMeta, values } from '../data/site'
import { leadership } from '../data/team'
import { usePageMeta } from '../hooks/usePageMeta'

export default function AboutPage() {
  usePageMeta(...pageMeta.about)
  return <main id="main-content"><PageHero {...aboutContent.hero} imageLabel="Success Hub office and student counselling" imageVariant="counselling" />
    <section className="section"><div className="shell narrow-copy">{aboutContent.story.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></section>
    <section className="section section--soft"><div className="shell mission-grid">{[aboutContent.mission, aboutContent.vision].map((item) => <article className="statement-card" key={item.title}><h2>{item.title}</h2>{item.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</article>)}</div></section>
    <section className="section"><div className="shell"><SectionHeading eyebrow="What guides us" title="Our Core Values" /><div className="values-grid">{values.map((value, index) => <article key={value.title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{value.title}</h3><p>{value.description}</p></article>)}</div></div></section>
    <section className="section section--soft"><div className="shell split-layout"><div><SectionHeading title={aboutContent.commitment.title} />{aboutContent.commitment.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<p className="pull-quote">{aboutContent.commitment.closing}</p></div><div><SectionHeading eyebrow="Leadership" title="Meet the People Behind Success Hub" /><div className="profile-stack">{leadership.map((person) => <ProfileCard key={person.name} person={person} />)}</div></div></div></section>
  </main>
}
