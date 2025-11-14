import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Interactive Dashboard',
    desc: 'A data-rich dashboard with real-time charts and delightful motion.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    link: '#',
  },
  {
    title: 'E‑commerce UI',
    desc: 'Elegant storefront with filters, cart, and checkout flow.',
    tags: ['React', 'Stripe', 'Radix UI'],
    link: '#',
  },
  {
    title: '3D Portfolio',
    desc: 'Playful hero powered by Spline with smooth interactions.',
    tags: ['Spline', 'React', 'Vite'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Selected projects</h2>
          <a href="#contact" className="hidden sm:inline-flex items-center rounded-full bg-gray-900 text-white px-4 py-2 text-sm hover:bg-gray-800">Work with me</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              href={p.link}
              key={p.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl border border-black/5 bg-white p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="aspect-video rounded-xl bg-gradient-to-br from-indigo-100 via-sky-100 to-purple-100 mb-4" />
              <h3 className="font-semibold text-lg mb-1">{p.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs rounded-full border border-black/10 px-2 py-1 bg-white">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
