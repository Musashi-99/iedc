import { ArrowRight } from 'lucide-react'

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            — About IEDC Lab
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-navy-900 sm:text-4xl">
            Turning Ideas into
            <br />
            Innovations
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-slate-600">
            IEDC Lab is the innovation and entrepreneurship development cell of our college,
            dedicated to fostering creativity, problem-solving and startup culture among students.
            We provide a platform for ideation, mentorship, resources and real-world exposure to
            help young minds build innovative solutions for a better tomorrow.
          </p>
          <button className="mt-6 flex items-center gap-2 rounded-full border border-brand-blue px-6 py-3 text-sm font-semibold text-brand-blue hover:bg-brand-blue hover:text-white">
            Know More
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="relative">
          <div className="absolute -left-4 top-6 h-full w-full rounded-2xl bg-sky-100" />
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
            alt="Dream Build Grow workspace"
            className="relative h-80 w-full rounded-2xl object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  )
}
