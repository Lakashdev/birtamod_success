export default function ProfileCard({ person, showDescription = true }) {
  const initials = person.name.split(' ').map((part) => part[0]).join('')
  return (
    <article className="profile-card">
      <div className="profile-avatar" aria-label={`${person.name} photo placeholder`}><span>{initials}</span></div>
      <div><p className="profile-role">{person.role}</p><h3>{person.name}</h3>{showDescription && <p>{person.description}</p>}<a href={`tel:+977${person.phone}`}>{person.phoneDisplay}</a></div>
    </article>
  )
}
