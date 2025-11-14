import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    // In a real project, this would call the backend API
    await new Promise(r => setTimeout(r, 900))
    setStatus('Thanks! I will get back to you soon.')
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-t from-white to-gray-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-black/5 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Let’s build something</h2>
          <p className="text-gray-600 mb-6">Tell me about your project and timeline.</p>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <input required name="name" placeholder="Your name" className="rounded-lg border border-black/10 px-4 py-3 outline-none focus:ring-2 focus:ring-gray-900/10" />
            <input required type="email" name="email" placeholder="Email" className="rounded-lg border border-black/10 px-4 py-3 outline-none focus:ring-2 focus:ring-gray-900/10" />
            <textarea required name="message" rows="5" placeholder="Project details" className="rounded-lg border border-black/10 px-4 py-3 outline-none focus:ring-2 focus:ring-gray-900/10" />
            <div className="flex items-center gap-4">
              <button className="inline-flex items-center rounded-full bg-gray-900 text-white px-5 py-2.5 text-sm hover:bg-gray-800">Send message</button>
              <span className="text-sm text-gray-600">{status}</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
