import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function TestPage() {
  const [time, setTime] = useState(45 * 60)
  const [current, setCurrent] = useState(0)
  const questions = [
    { q: 'What is the output of 2 + "2" in JavaScript?', options: ['4', '22', 'NaN', 'Error'], answer: 1 },
    { q: 'Which HTTP method is idempotent?', options: ['POST', 'PUT', 'PATCH', 'CONNECT'], answer: 1 },
    { q: 'What does CSS flex-grow control?', options: ['Spacing', 'Width', 'Expansion ratio', 'Order'], answer: 2 },
    { q: 'Which database is NoSQL?', options: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite'], answer: 2 },
  ]
  const [answers, setAnswers] = useState(Array(questions.length).fill(null))

  useEffect(() => {
    const id = setInterval(() => setTime((t) => (t > 0 ? t - 1 : 0)), 1000)
    return () => clearInterval(id)
  }, [])

  const percent = Math.round(((current + (answers[current] !== null ? 1 : 0)) / questions.length) * 100)

  return (
    <section className="pt-28 pb-10 sm:pt-36">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-[1fr_320px] gap-6">
        <div className="rounded-2xl p-6 bg-white/10 border border-white/20 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <h2 className="text-white text-xl font-semibold">Question {current + 1} / {questions.length}</h2>
            <div className="px-3 py-1 rounded-lg bg-white/10 text-white">⏱ {Math.floor(time/60)}:{String(time%60).padStart(2,'0')}</div>
          </div>

          <p className="mt-4 text-white/90 text-lg">{questions[current].q}</p>
          <div className="mt-4 grid gap-3">
            {questions[current].options.map((opt, idx) => (
              <button key={opt} onClick={() => setAnswers(a=>{const n=[...a]; n[current]=idx; return n})}
                className={`text-left px-4 py-3 rounded-xl border transition ${answers[current]===idx? 'bg-white text-slate-900 border-white' : 'bg-white/5 text-white border-white/10 hover:bg-white/10'}`}
              >
                {opt}
              </button>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between">
            <button onClick={()=> setCurrent(c=> Math.max(0,c-1))} className="px-4 py-2 rounded-xl bg-white/10 text-white border border-white/20 disabled:opacity-40" disabled={current===0}>Previous</button>
            {current < questions.length-1 ? (
              <button onClick={()=> setCurrent(c=> Math.min(questions.length-1,c+1))} className="px-4 py-2 rounded-xl bg-white text-slate-900 font-semibold">Next</button>
            ) : (
              <Link to="/result" state={{ questions, answers }} className="px-4 py-2 rounded-xl bg-white text-slate-900 font-semibold">Submit</Link>
            )}
          </div>
        </div>

        <aside className="rounded-2xl p-6 bg-white/10 border border-white/20 backdrop-blur-xl">
          <p className="text-white/70 text-sm mb-2">Progress</p>
          <div className="w-full h-2 bg-white/10 rounded-full">
            <div className="h-2 rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-sky-400" style={{ width: `${percent}%` }} />
          </div>
          <div className="mt-4 grid grid-cols-5 gap-2">
            {questions.map((_, i)=>(
              <button key={i} onClick={()=> setCurrent(i)} className={`h-10 rounded-lg border ${answers[i]!==null? 'bg-white text-slate-900 border-white' : i===current? 'bg-white/20 text-white border-white/20' : 'bg-white/5 text-white/80 border-white/10'}`}>{i+1}</button>
            ))}
          </div>
        </aside>
      </div>
    </section>
  )
}
