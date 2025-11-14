import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="rounded-2xl border border-black/5 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold tracking-tight mb-4">About me</h2>
          <p className="text-gray-700 leading-relaxed">
            I’m a frontend-focused engineer who loves crafting crisp, interactive web apps.
            My toolkit centers around React, Tailwind, Framer Motion, and modern design systems.
            I enjoy turning ideas into polished, performant user experiences.
          </p>
          <div className="mt-6 grid sm:grid-cols-3 gap-3">
            {['React', 'TypeScript', 'Node', 'Framer Motion', 'Spline', 'Tailwind'].map(s => (
              <span key={s} className="text-sm rounded-full border border-black/10 bg-gray-50 px-3 py-2 text-gray-800">{s}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
