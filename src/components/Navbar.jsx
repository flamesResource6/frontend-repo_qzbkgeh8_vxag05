import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItem = (to, label) => (
    <NavLink
      to={to}
      onClick={() => setOpen(false)}
      className={({ isActive }) => `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
        isActive ? 'text-white bg-white/10' : 'text-white/80 hover:text-white hover:bg-white/10'
      }`}
    >
      {label}
    </NavLink>
  )

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <Link to="/" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-sky-500 shadow-lg" />
              <span className="text-white font-semibold text-lg tracking-tight">SkillProof</span>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {navItem('/', 'Home')}
              {navItem('/login', 'Login')}
              {navItem('/resume', 'Resume Upload')}
              {navItem('/candidate', 'Candidate')}
              {navItem('/recruiter', 'Recruiter')}
              {navItem('/exam', 'Test')}
              {navItem('/result', 'Results')}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <Link to="/exam" className="px-4 py-2 rounded-xl bg-white text-slate-900 font-semibold hover:opacity-90 transition">Take Test</Link>
              <Link to="/login" className="px-4 py-2 rounded-xl bg-white/10 text-white border border-white/20 hover:bg-white/20 transition">Login</Link>
            </div>

            <button onClick={() => setOpen(!open)} className="md:hidden text-white/90">
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4 flex flex-col gap-2">
              {navItem('/', 'Home')}
              {navItem('/login', 'Login')}
              {navItem('/resume', 'Resume Upload')}
              {navItem('/candidate', 'Candidate')}
              {navItem('/recruiter', 'Recruiter')}
              {navItem('/exam', 'Test')}
              {navItem('/result', 'Results')}
              <div className="flex gap-2 pt-2">
                <Link to="/exam" className="flex-1 px-4 py-2 rounded-xl bg-white text-slate-900 font-semibold">Take Test</Link>
                <Link to="/login" className="flex-1 px-4 py-2 rounded-xl bg-white/10 text-white border border-white/20">Login</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
