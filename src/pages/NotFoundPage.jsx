import { Link } from 'react-router-dom'
import { pageMeta } from '../data/site'
import { usePageMeta } from '../hooks/usePageMeta'

export default function NotFoundPage() {
  usePageMeta(...pageMeta.notFound)
  return <main id="main-content" className="not-found"><div className="shell"><p className="eyebrow">404</p><h1>Page Not Found</h1><p className="lead">The page you are looking for may have moved or does not exist.</p><Link className="button button--primary" to="/">Return Home</Link></div></main>
}
