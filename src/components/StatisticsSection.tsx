import { Lightbulb, Users, Calendar, Rocket } from 'lucide-react'

const STATS = [
  { icon: Lightbulb, value: '100+', label: 'Student Innovators' },
  { icon: Users, value: '50+', label: 'Projects Developed' },
  { icon: Calendar, value: '20+', label: 'Workshops & Events' },
  { icon: Rocket, value: '10+', label: 'Startups Supported' },
]

export default function StatisticsSection() {
  return (
    <section className="bg-navy-950 py-14">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 divide-slate-700 px-6 sm:grid-cols-4 sm:divide-x">
        {STATS.map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-center sm:gap-3 sm:text-left">
            <Icon size={28} className="text-sky-300" />
            <div>
              <div className="text-2xl font-extrabold text-white">{value}</div>
              <div className="text-xs text-slate-300">{label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
