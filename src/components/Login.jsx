import { Link } from 'react-router-dom'

export default function Login(){
  return (
    <section className="pt-28 pb-20 sm:pt-36">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-8 items-center">
        <div className="rounded-2xl p-6 bg-white/10 border border-white/20 backdrop-blur-xl order-2 lg:order-1">
          <h1 className="text-white text-2xl font-semibold">Welcome back</h1>
          <p className="text-white/70 text-sm">Sign in to continue</p>
          <form className="mt-6 space-y-4">
            <div>
              <label className="block text-white/70 text-sm mb-1">Email</label>
              <input type="email" placeholder="you@example.com" className="w-full px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30" />
            </div>
            <div>
              <label className="block text-white/70 text-sm mb-1">Password</label>
              <input type="password" placeholder="••••••••" className="w-full px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30" />
            </div>
            <div className="flex items-center justify-between text-sm">
              <Link to="#" className="text-white/60 hover:text-white">Forgot password?</Link>
            </div>
            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              <button type="button" className="px-4 py-2 rounded-xl bg-white text-slate-900 font-semibold">Login as Candidate</button>
              <button type="button" className="px-4 py-2 rounded-xl bg-white/10 text-white border border-white/20">Login as Recruiter</button>
            </div>
          </form>
        </div>
        <div className="order-1 lg:order-2">
          <div className="rounded-2xl p-8 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-sky-500/20 border border-white/20 text-white">
            <h2 className="text-3xl font-bold leading-tight">Secure sign-in with a minimal, focused UI</h2>
            <p className="mt-3 text-white/80">Use your email and password to access your personalized dashboard. Stay productive with a clean and distraction-free interface.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
