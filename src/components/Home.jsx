import Hero from './Hero'
import Features from './Features'
import CandidateDashboard from './CandidateDashboard'
import RecruiterDashboard from './RecruiterDashboard'

export default function Home(){
  return (
    <main>
      <Hero />
      <Features />
      <CandidateDashboard />
      <RecruiterDashboard />
    </main>
  )
}
