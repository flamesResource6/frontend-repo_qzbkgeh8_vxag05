import RecruiterDashboard from './RecruiterDashboard'

export default function RecruiterPage(){
  return (
    <main className="pt-20 sm:pt-24">
      <section className="pt-8">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-white text-3xl font-bold">Recruiter Dashboard</h1>
          <p className="text-white/70">Insights into candidates, results, and skill match</p>
        </div>
      </section>
      <RecruiterDashboard />
    </main>
  )
}
