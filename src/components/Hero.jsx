import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative pointer-events-none">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center min-h-[70vh]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <span className="inline-flex items-center rounded-full border border-black/10 bg-white/80 px-3 py-1 text-xs font-medium backdrop-blur">
                Open to work — Frontend & Full‑stack
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Building playful, modern web experiences.
              </h1>
              <p className="text-gray-600 text-base sm:text-lg max-w-xl">
                I craft responsive apps with React, motion, and clean design.
                Explore my latest projects and get in touch.
              </p>
              <div className="flex gap-3 pointer-events-auto">
                <a href="#projects" className="inline-flex items-center rounded-full bg-gray-900 text-white px-5 py-2.5 text-sm hover:bg-gray-800 transition-colors">View projects</a>
                <a href="#contact" className="inline-flex items-center rounded-full bg-white text-gray-900 px-5 py-2.5 text-sm border border-black/10 hover:bg-gray-50 transition-colors">Contact</a>
              </div>
            </motion.div>
            <div className="hidden lg:block" />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white" />
    </section>
  )
}
