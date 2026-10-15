import { contentPanels } from '../data/contentPanels'

export default function ContentPanel({ label, className = '', variant = 'journey' }) {
  const panel = contentPanels[variant] || contentPanels.journey
  return (
    <aside className={`content-panel ${className}`} aria-label={label}>
      <p className="content-panel__eyebrow">{panel.eyebrow}</p>
      <h2>{panel.title}</h2>
      <p>{panel.intro}</p>
      <ol className="content-panel__list">
        {panel.items.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, '0')}</span>{item}</li>)}
      </ol>
      <p className="content-panel__note">{panel.note}</p>
    </aside>
  )
}
