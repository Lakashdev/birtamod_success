import { Link } from 'react-router-dom'
import { destinations } from '../data/destinations'
import { footerLinks } from '../data/nav'
import { leadership } from '../data/team'
import { site } from '../data/site'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Link to="/" aria-label={`${site.name} home`}><Logo /></Link>
          <p className="footer-tagline">{site.tagline}</p>
          <p>{site.description}</p>
        </div>
        <FooterColumn title="Quick Links">
          {footerLinks.map((link) => <Link key={link.to} to={link.to}>{link.label}</Link>)}
        </FooterColumn>
        <FooterColumn title="Study Destinations">
          {destinations.map((destination) => <Link key={destination.slug} to={`/destinations#${destination.slug}`}>{destination.name}</Link>)}
        </FooterColumn>
        <div className="footer-column">
          <h2>Contact Us</h2>
          <address>{site.address}</address>
          <a href={`tel:+977${site.phone}`}>{site.phoneDisplay}</a>
          <a href={`tel:${site.officePhone}`}>{site.officePhone}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <h2 className="footer-subheading">Leadership</h2>
          {leadership.map((person) => <p key={person.name}>{person.name} — {person.role}</p>)}
          <h2 className="footer-subheading">Connect With Us</h2>
          <a href={site.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
          {site.tiktok && <a href={site.tiktok} target="_blank" rel="noreferrer">TikTok</a>}
        </div>
      </div>
      <div className="shell footer-bottom"><p>© {site.copyrightYear} {site.name}. All rights reserved.</p></div>
    </footer>
  )
}

function FooterColumn({ title, children }) {
  return <div className="footer-column"><h2>{title}</h2>{children}</div>
}
