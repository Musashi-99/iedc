import { ChevronDown, User } from 'lucide-react'

const NAV_LINKS = ['Home', 'About', 'Activities', 'Facilities', 'HoD', 'Contact']

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <div className="flex items-center gap-3">
          <img
            src="https://em-content.zobj.net/source/microsoft-teams/363/shield_1f6e1-fe0f.png"
            alt="IEM"
            className="h-9 w-9 object-contain"
          />
          <span className="text-sm font-bold tracking-tight text-slate-800">
            IEM
          </span>
          <img
            src="https://em-content.zobj.net/source/microsoft-teams/363/shield_1f6e1-fe0f.png"
            alt="UEM"
            className="h-9 w-9 object-contain"
          />
          <span className="text-sm font-bold tracking-tight text-slate-800">
            UEM
          </span>
          <div className="mx-2 h-8 w-px bg-slate-200" />
          <div className="flex items-center gap-2">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-brand-blue">
              <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.5.4.8 1 .8 1.6v.1h5.6v-.1c0-.6.3-1.2.8-1.6A6 6 0 0 0 12 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-lg font-extrabold leading-tight text-navy-900">
              IEDC<br />
              <span className="text-sm font-bold text-brand-blue">LAB</span>
            </span>
          </div>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`text-sm font-medium ${
                link === 'Home'
                  ? 'border-b-2 border-brand-blue pb-1 text-brand-blue'
                  : 'text-slate-600 hover:text-brand-blue'
              }`}
            >
              {link}
            </a>
          ))}
        </nav>

        <button className="flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:border-brand-blue hover:text-brand-blue">
          <User size={16} />
          Login
          <ChevronDown size={14} />
        </button>
      </div>
    </header>
  )
}
