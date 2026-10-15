import FaqList from '../components/FaqList'
import PageHero from '../components/PageHero'
import { faqs } from '../data/faqs'
import { pageMeta } from '../data/site'
import { usePageMeta } from '../hooks/usePageMeta'

export default function FaqPage() {
  usePageMeta(...pageMeta.faqs)
  return <main id="main-content"><PageHero eyebrow="FAQs" title="Questions About Your Study Journey" intro="Find clear answers to common questions, then speak with our team about your individual circumstances." />
    <section className="section"><div className="shell faq-page"><FaqList items={faqs} /></div></section>
  </main>
}
