import { Link } from 'react-router-dom'

export default function NotFound(){
  return (
    <section className="pt-28 pb-20 sm:pt-36 text-center">
      <div className="mx-auto max-w-2xl px-6">
        <h1 className="text-5xl font-bold text-white">404</h1>
        <p className="mt-2 text-white/70">The page you are looking for does not exist.</p>
        <Link to="/" className="mt-6 inline-block px-4 py-2 rounded-xl bg-white text-slate-900 font-semibold">Go Home</Link>
      </div>
    </section>
  )
}
