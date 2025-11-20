import CandidateDashboard from './CandidateDashboard'

export default function CandidatePage(){
  return (
    <main className="pt-20 sm:pt-24">
      <section className="pt-8">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-white text-3xl font-bold">Candidate Dashboard</h1>
          <p className="text-white/70">Overview of your tests, progress and upcoming schedule</p>
        </div>
      </section>
      <CandidateDashboard />
    </main>
  )
}
