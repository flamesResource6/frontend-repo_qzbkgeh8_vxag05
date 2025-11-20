import { Users, Filter, Percent } from 'lucide-react'

export default function RecruiterDashboard() {
  return (
    <section className="py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-white text-2xl font-semibold mb-6">Recruiter Dashboard</h2>
        <div className="grid lg:grid-cols-4 gap-5">
          <div className="lg:col-span-1 rounded-2xl p-5 bg-white/10 border border-white/20 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <Users className="text-white/90" />
              <div>
                <p className="text-white/70 text-sm">Total Candidates</p>
                <p className="text-white text-2xl font-bold">128</p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 text-white/70 text-sm"><Percent size={16} /> Avg Skill Match 76%</div>
          </div>
          <div className="lg:col-span-3 rounded-2xl p-5 bg-white/10 border border-white/20 backdrop-blur-xl overflow-x-auto">
            <div className="flex items-center justify-between mb-3">
              <p className="text-white font-semibold">Test Results</p>
              <div className="flex items-center gap-2 text-white/80">
                <Filter size={16} />
                <select className="bg-transparent border border-white/20 rounded-lg px-2 py-1 text-sm">
                  <option>Skill</option>
                  <option>Score</option>
                  <option>Experience</option>
                </select>
              </div>
            </div>
            <table className="min-w-[600px] w-full text-left text-white/90">
              <thead className="text-white/60 text-sm">
                <tr>
                  <th className="py-2">Candidate</th>
                  <th>Test</th>
                  <th>Score</th>
                  <th>Skill Match</th>
                  <th>Experience</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  {name:'Ava Carter', test:'Frontend', score:88, match:82, exp:'3y'},
                  {name:'Liam Patel', test:'DSA', score:79, match:74, exp:'2y'},
                  {name:'Maya Chen', test:'Backend', score:92, match:89, exp:'5y'},
                ].map((r) => (
                  <tr key={r.name} className="border-t border-white/10">
                    <td className="py-2">{r.name}</td>
                    <td>{r.test}</td>
                    <td>{r.score}%</td>
                    <td>
                      <div className="w-32 h-2 bg-white/10 rounded-full">
                        <div className="h-2 rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-sky-400" style={{ width: `${r.match}%` }} />
                      </div>
                    </td>
                    <td>{r.exp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {['Frontend Dev','Data Scientist','Backend Engineer'].map((role, i) => (
            <div key={role} className="rounded-2xl p-5 bg-white/10 border border-white/20 backdrop-blur-xl">
              <p className="text-white/80 text-sm">Candidate Profile</p>
              <p className="text-white text-lg font-semibold mt-1">{role}</p>
              <div className="mt-4 space-y-2 text-white/70 text-sm">
                <p>Top Skills: React, TypeScript, APIs</p>
                <p>Recent Score: {80 + i * 5}%</p>
                <p>Experience: {2 + i} years</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
