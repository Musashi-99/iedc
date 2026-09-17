import { Globe, Linkedin } from 'lucide-react'
import iemLogo from '../assets/iem-logo.png'
import uemLogo from '../assets/uem-logo.png'
import iedcLogo from '../assets/iedc-logo.png'

export default function Footer() {
  return (
    <footer id="contact" className="bg-white py-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-center text-sm text-slate-600 sm:px-6 md:flex-row md:text-left">
        <div className="flex items-center gap-2">
          <img src={iemLogo} alt="IEM" className="h-8 w-auto object-contain sm:h-10" />
          <img src={uemLogo} alt="UEM" className="h-8 w-auto object-contain sm:h-10" />
          <img src={iedcLogo} alt="IEDC" className="h-10 w-auto object-contain sm:h-12" />
        </div>

        <div className="flex max-w-full flex-col items-center gap-2 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6">
          <a
            href="https://www.cst-iedc.uem.edu.in"
            className="flex min-h-11 items-center gap-2 break-all hover:text-brand-blue"
          >
            <Globe size={16} className="shrink-0" />
            <span className="break-all">www.cst-iedc.uem.edu.in</span>
          </a>
          <a
            href="https://linkedin.com/company/uemkcstcsit-iedc"
            className="flex min-h-11 items-center gap-2 break-all hover:text-brand-blue"
          >
            <Linkedin size={16} className="shrink-0" />
            <span className="break-all">linkedin.com/company/uemkcstcsit-iedc</span>
          </a>
        </div>

        <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
          <span>Innovate</span>
          <span className="text-slate-300">|</span>
          <span>Collaborate</span>
          <span className="text-slate-300">|</span>
          <span>Build</span>
        </div>
      </div>
    </footer>
  )
}
