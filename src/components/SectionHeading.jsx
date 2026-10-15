export default function SectionHeading({ eyebrow, title, intro, align = 'left' }) {
  return (
    <header className={`section-heading section-heading--${align}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </header>
  )
}
