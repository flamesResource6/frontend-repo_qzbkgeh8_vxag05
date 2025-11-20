import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

export default function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 relative">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl opacity-30 bg-gradient-to-br from-indigo-500 via-purple-500 to-sky-500" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full blur-3xl opacity-30 bg-gradient-to-tr from-sky-500 via-fuchsia-500 to-purple-500" />
      </div>
      <Navbar />
      <Outlet />
      <footer className="mt-8 py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center">
            <p className="text-white/70">© {new Date().getFullYear()} SkillProof • AI-powered skill assessment and recruitment</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
