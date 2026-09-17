import { Globe, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="bg-white py-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-600 sm:flex-row">
        <div className="text-center font-semibold text-navy-900 sm:text-left">
          CST / CSIT / CSE(CS) / CSE(NW)
          <br />
          IEDC Lab
        </div>

        <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-6">
          <a href="https://www.cst-iedc.uem.edu.in" className="flex items-center gap-2 hover:text-brand-blue">
            <Globe size={16} />
            www.cst-iedc.uem.edu.in
          </a>
          <a
            href="https://linkedin.com/company/uemkcstcsit-iedc"
            className="flex items-center gap-2 hover:text-brand-blue"
          >
            <Linkedin size={16} />
            linkedin.com/company/uemkcstcsit-iedc
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
