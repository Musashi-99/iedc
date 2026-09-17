import { useState } from 'react'
import { ChevronDown, Menu, User, X } from 'lucide-react'
import iemLogo from '../assets/iem-logo.png'
import uemLogo from '../assets/uem-logo.png'
import iedcLogo from '../assets/iedc-logo.png'

const NAV_LINKS = ['Home', 'About', 'Activities', 'Facilities', 'HoD', 'Contact']

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-2 sm:px-6">
        <div className="flex min-w-0 items-center gap-1 sm:gap-2">
          <img src={iemLogo} alt="IEM" className="h-8 w-auto object-contain sm:h-12" />
          <img src={uemLogo} alt="UEM" className="h-8 w-auto object-contain sm:h-12" />
          <div className="mx-0.5 h-8 w-px bg-slate-200 sm:mx-1 sm:h-10" />
          <img src={iedcLogo} alt="IEDC" className="h-10 w-auto object-contain sm:h-14" />
        </div>

        <nav className="hidden items-center gap-8 lg:flex">
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

        <div className="flex shrink-0 items-center gap-2">
          <button className="hidden min-h-11 items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:border-brand-blue hover:text-brand-blue sm:flex">
            <User size={16} />
            Login
            <ChevronDown size={14} />
          </button>
          <button
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-700 lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-100 bg-white px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className={`min-h-11 rounded-lg px-3 py-3 text-sm font-medium ${
                  link === 'Home' ? 'bg-sky-50 text-brand-blue' : 'text-slate-600'
                }`}
              >
                {link}
              </a>
            ))}
          </nav>
          <button className="mt-3 flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700">
            <User size={16} />
            Login
            <ChevronDown size={14} />
          </button>
        </div>
      )}
    </header>
  )
}
