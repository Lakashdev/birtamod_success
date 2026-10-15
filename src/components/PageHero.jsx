import ContentPanel from './ContentPanel'

export default function PageHero({ eyebrow, title, intro, imageLabel, imageVariant = 'world' }) {
  return (
    <section className="page-hero">
      <div className="shell page-hero__grid">
        <div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="lead">{intro}</p></div>
        {imageLabel && <ContentPanel label={imageLabel} variant={imageVariant} />}
      </div>
    </section>
  )
}
