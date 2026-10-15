import PageHero from '../components/PageHero'
import ProfileCard from '../components/ProfileCard'
import SectionHeading from '../components/SectionHeading'
import { pageMeta } from '../data/site'
import { growingTeam, team, teamIntro } from '../data/team'
import { usePageMeta } from '../hooks/usePageMeta'

export default function TeamPage() {
  usePageMeta(...pageMeta.team)
  return <main id="main-content"><PageHero eyebrow={teamIntro.eyebrow} title={teamIntro.title} intro={teamIntro.body[0]} imageLabel="Success Hub team" imageVariant="team" />
    <section className="section"><div className="shell"><p className="lead narrow-copy">{teamIntro.body[1]}</p><div className="profile-grid profile-grid--three">{team.map((person) => <ProfileCard key={person.name} person={person} />)}</div></div></section>
    <section className="section section--soft"><div className="shell quiet-section"><SectionHeading title={growingTeam.title} />{growingTeam.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></section>
  </main>
}
