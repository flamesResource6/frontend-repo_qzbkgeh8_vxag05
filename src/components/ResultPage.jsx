import { useLocation, Link } from 'react-router-dom'

export default function ResultPage() {
  const location = useLocation()
  const { questions = [], answers = [] } = location.state || {}

  const total = questions.length
  const correct = questions.reduce((acc, q, i) => acc + (answers[i] === q.answer ? 1 : 0), 0)
  const score = Math.round((correct / (total || 1)) * 100)

  return (
    <section className="pt-28 pb-14 sm:pt-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl p-6 bg-white/10 border border-white/20 backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-white text-2xl font-semibold">Results</h2>
              <p className="text-white/70">Score breakdown and analysis</p>
            </div>
            <a href="#" onClick={(e)=>e.preventDefault()} className="px-4 py-2 rounded-xl bg-white text-slate-900 font-semibold">Download Report</a>
          </div>

          <div className="mt-6 grid lg:grid-cols-3 gap-6">
            <div className="rounded-2xl p-5 bg-white/10 border border-white/20">
              <p className="text-white/70 text-sm mb-2">Overall Score</p>
              <p className="text-white text-4xl font-bold">{score}%</p>
              <div className="mt-4 w-full h-2 bg-white/10 rounded-full">
                <div className="h-2 rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-sky-400" style={{ width: `${score}%` }} />
              </div>
            </div>

            <div className="rounded-2xl p-5 bg-white/10 border border-white/20">
              <p className="text-white/70 text-sm mb-2">Correct vs Incorrect</p>
              <div className="flex items-end gap-4 h-32">
                <div className="flex-1 text-center">
                  <div className="mx-auto w-16 bg-white/60 rounded-t" style={{ height: `${(correct/(total||1))*100}%` }} />
                  <p className="mt-2 text-white/80 text-sm">Correct ({correct})</p>
                </div>
                <div className="flex-1 text-center">
                  <div className="mx-auto w-16 bg-white/20 rounded-t" style={{ height: `${((total-correct)/(total||1))*100}%` }} />
                  <p className="mt-2 text-white/80 text-sm">Incorrect ({total-correct})</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl p-5 bg-white/10 border border-white/20">
              <p className="text-white/70 text-sm mb-2">Skill Rating</p>
              <div className="space-y-3">
                {[['Frontend', 80], ['Backend', 70], ['Data', 65]].map(([label, val]) => (
                  <div key={label}>
                    <div className="flex items-center justify-between text-white/80 text-sm">
                      <span>{label}</span>
                      <span>{val}%</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full">
                      <div className="h-2 rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-sky-400" style={{ width: `${val}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl p-5 bg-white/5 border border-white/10">
            <p className="text-white font-semibold mb-3">Question Analysis</p>
            <div className="space-y-3">
              {questions.map((q, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-white/90">Q{i+1}. {q.q}</p>
                  <p className={`mt-1 text-sm ${answers[i]===q.answer? 'text-emerald-300' : 'text-rose-300'}`}>{answers[i]===q.answer? 'Correct' : 'Incorrect'}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-end">
              <Link to="/exam" className="px-4 py-2 rounded-xl bg-white text-slate-900 font-semibold">Retake Test</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
