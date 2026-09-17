export default function HodSection() {
  return (
    <section id="hod" className="bg-sky-50 py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-[0.7fr_1fr_0.7fr]">
        <div className="relative">
          <div className="absolute -left-3 -top-3 h-full w-full rounded-2xl bg-sky-100" />
          <img
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80"
            alt="Prof. (Dr.) Maumita Chakraborty"
            className="relative h-72 w-full rounded-2xl object-cover shadow-xl"
          />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            — From HoD's Desk
          </p>
          <h3 className="mt-3 text-2xl font-extrabold text-navy-900">
            Prof. (Dr.) Maumita Chakraborty
          </h3>
          <p className="mt-1 text-sm font-medium text-slate-500">Head of the Department &amp; IEDC</p>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            With a strong academic background and a vision for innovation, Prof. (Dr.) Maumita
            Chakraborty leads the department and IEDC with a focus on academic excellence,
            research, and student empowerment. Her guidance continues to inspire and shape the
            next generation of innovators and leaders.
          </p>
        </div>

        <div className="text-slate-400">
          <span className="text-5xl font-serif text-brand-blue">&ldquo;</span>
          <p className="-mt-4 text-sm italic leading-relaxed text-slate-600">
            Innovation is not just about creating new things, but about creating better
            tomorrows.
          </p>
          <p className="mt-3 text-right text-xs font-semibold text-slate-500">
            — Prof. (Dr.) Maumita Chakraborty
          </p>
        </div>
      </div>
    </section>
  )
}
