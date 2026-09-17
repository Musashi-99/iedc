import { Lightbulb, Users, Rocket, ArrowRight } from 'lucide-react'
import LoginCard from './LoginCard'

const FEATURES = [
  { icon: Lightbulb, title: 'Learn', subtitle: 'Innovate' },
  { icon: Users, title: 'Collaborate', subtitle: 'Build' },
  { icon: Rocket, title: 'Create', subtitle: 'Impact' },
]

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-slate-50"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1600&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/30" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 lg:grid-cols-[1.3fr_0.9fr] lg:py-24">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            — Innovation | Entrepreneurship | Development
          </p>
          <h1 className="mt-4 text-5xl font-extrabold leading-tight text-navy-900 sm:text-6xl">
            Welcome to
            <br />
            <span className="text-brand-blue">IEDC Lab</span>
          </h1>
          <p className="mt-4 text-2xl font-semibold text-slate-700">Where Ideas Take Shape</p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-600">
            Innovation &amp; Entrepreneurship Developement Cell empowers students to think beyond
            boundaries, turn ideas into solutions and build a better tomorrow.
          </p>

          <div className="mt-8 flex flex-wrap gap-8">
            {FEATURES.map(({ icon: Icon, title, subtitle }) => (
              <div key={title} className="flex items-center gap-2">
                <Icon size={20} className="text-brand-blue" />
                <div className="text-sm font-medium text-slate-700 leading-tight">
                  <div>{title}</div>
                  <div>{subtitle}</div>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-8 flex items-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-blue/30 hover:bg-navy-800">
            Explore IEDC
            <ArrowRight size={16} />
          </button>

          <div className="relative mt-4 hidden max-w-md lg:block">
            <div className="relative mx-auto h-64 w-64">
              <img
                src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=500&q=80"
                alt="Growth"
                className="h-full w-full rounded-full object-cover opacity-90"
                style={{ clipPath: 'ellipse(45% 48% at 50% 50%)' }}
              />
              <span className="absolute -right-6 top-8 rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-md">
                Small Ideas
              </span>
              <span className="absolute -right-2 bottom-6 rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-md">
                Big Impact
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-start justify-center lg:justify-end">
          <LoginCard />
        </div>
      </div>
    </section>
  )
}
