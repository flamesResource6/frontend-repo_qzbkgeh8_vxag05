import { BarChart3, Clock, ClipboardCheck, Calendar } from 'lucide-react'

export default function CandidateDashboard() {
  return (
    <section className="py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-white text-2xl font-semibold mb-6">Candidate Dashboard</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          <div className="lg:col-span-1 rounded-2xl p-5 bg-white/10 border border-white/20 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <ClipboardCheck className="text-white/90" />
              <div>
                <p className="text-white/70 text-sm">Total Tests</p>
                <p className="text-white text-2xl font-bold">12</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1 rounded-2xl p-5 bg-white/10 border border-white/20 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <Clock className="text-white/90" />
              <div>
                <p className="text-white/70 text-sm">Pending Tests</p>
                <p className="text-white text-2xl font-bold">3</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1 rounded-2xl p-5 bg-white/10 border border-white/20 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <BarChart3 className="text-white/90" />
              <div>
                <p className="text-white/70 text-sm">Score Report</p>
                <p className="text-white text-2xl font-bold">86%</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 rounded-2xl p-5 bg-white/10 border border-white/20 backdrop-blur-xl">
            <p className="text-white/70 text-sm mb-2">Skill Analytics</p>
            <div className="h-32 w-full rounded-xl bg-gradient-to-tr from-indigo-500/30 via-purple-500/30 to-sky-500/30 border border-white/20 grid grid-cols-12 items-end gap-1 p-2">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="bg-white/60 rounded-t" style={{ height: `${30 + Math.random()*60}%` }} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-2xl p-5 bg-white/10 border border-white/20 backdrop-blur-xl">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="text-white/90" />
            <p className="text-white font-semibold">Upcoming Test Schedule</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {['Frontend Dev', 'Data Structures', 'SQL Basics'].map((t, i) => (
              <div key={t} className="rounded-xl p-4 bg-white/5 border border-white/10">
                <p className="text-white/90 font-medium">{t}</p>
                <p className="text-white/60 text-sm">{new Date(Date.now() + i*86400000).toDateString()} • 45 min</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
