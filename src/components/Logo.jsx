import logo from '../assets/logo.webp'
import { site } from '../data/site'

export default function Logo({ compact = false }) {
  return <img className={compact ? 'logo logo--compact' : 'logo'} src={logo} alt={site.logoName} width="420" height="140" />
}
