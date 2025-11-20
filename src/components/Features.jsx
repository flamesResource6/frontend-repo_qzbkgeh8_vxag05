import { Brain, MonitorSmartphone, LayoutDashboard, FileText } from 'lucide-react'

const Feature = ({ icon: Icon, title, desc }) => (
  <div className="rounded-2xl p-5 bg-white/10 border border-white/20 backdrop-blur-xl hover:bg-white/15 transition">
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 rounded-xl flex items-center justify-center bg-white/10 border border-white/20 text-white">
        <Icon size={20} />
      </div>
      <div>
        <p className="text-white font-semibold">{title}</p>
        <p className="text-white/70 text-sm">{desc}</p>
      </div>
    </div>
  </div>
)

export default function Features() {
  return (
    <section className="py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          <Feature icon={Brain} title="AI Skill Evaluation" desc="Assess candidates with adaptive, AI-driven scoring." />
          <Feature icon={MonitorSmartphone} title="Real-Time Test Monitoring" desc="Live proctoring insights and activity tracking." />
          <Feature icon={LayoutDashboard} title="Recruiter & Candidate Dashboards" desc="Purpose-built views for hiring and preparation." />
          <Feature icon={FileText} title="Resume-Based Profile Insights" desc="Parse resumes to extract skills and fit." />
        </div>
      </div>
    </section>
  )
}
