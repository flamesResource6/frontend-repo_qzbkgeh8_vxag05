import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="absolute inset-0 opacity-60">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/60 to-slate-900 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="inline-flex items-center text-xs uppercase tracking-widest text-white/70 bg-white/10 border border-white/20 rounded-full px-3 py-1 backdrop-blur">
            AI-powered assessments
          </p>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Test Skills. Select Talent. Hire Smarter.
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl">
            AI-driven platform to evaluate skills and match the right candidate with the right company.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link to="/exam" className="px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold shadow-lg hover:opacity-90 transition">
              Take Test
            </Link>
            <Link to="/login" className="px-6 py-3 rounded-xl bg-white/10 text-white border border-white/20 hover:bg-white/20 transition">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
