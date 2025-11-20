import { useState } from 'react'

export default function ResumeUpload(){
  const [file, setFile] = useState(null)

  const onDrop = (e) => {
    e.preventDefault()
    const f = e.dataTransfer.files?.[0]
    if (f) setFile(f)
  }

  const onChange = (e) => {
    const f = e.target.files?.[0]
    if (f) setFile(f)
  }

  return (
    <section className="pt-28 pb-20 sm:pt-36">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-[280px_1fr] gap-8">
        <aside className="rounded-2xl p-6 bg-white/10 border border-white/20 backdrop-blur-xl h-max">
          <p className="text-white font-semibold">Resume Tips</p>
          <ul className="mt-3 list-disc list-inside text-white/70 text-sm space-y-1">
            <li>Keep it within 1-2 pages</li>
            <li>Highlight measurable impact</li>
            <li>Include key projects and skills</li>
            <li>Use consistent formatting</li>
          </ul>
          <div className="mt-4 rounded-xl p-4 bg-white/5 border border-white/10">
            <p className="text-white/80 text-sm">Sample Score Preview</p>
            <div className="mt-3 w-full h-2 bg-white/10 rounded-full">
              <div className="h-2 rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-sky-400" style={{ width: '78%' }} />
            </div>
            <p className="mt-1 text-white/70 text-xs">Estimated Fit: 78%</p>
          </div>
        </aside>

        <div className="rounded-2xl p-6 bg-white/10 border border-white/20 backdrop-blur-xl">
          <h1 className="text-white text-2xl font-semibold">Upload Your Resume</h1>
          <p className="text-white/70 text-sm">PDF or DOCX up to 5MB</p>
          <div
            onDrop={onDrop}
            onDragOver={(e)=> e.preventDefault()}
            className="mt-6 rounded-2xl border-2 border-dashed border-white/30 bg-white/5 p-8 text-center text-white/70"
          >
            <p>Drag & drop your file here</p>
            <p className="text-xs">or</p>
            <label className="inline-block mt-3 px-4 py-2 rounded-xl bg-white text-slate-900 font-semibold cursor-pointer">
              Browse
              <input type="file" accept=".pdf,.doc,.docx" onChange={onChange} className="hidden" />
            </label>
          </div>

          {file && (
            <div className="mt-4 rounded-xl p-4 bg-white/5 border border-white/10 text-white/80">
              <p className="text-white">Selected File</p>
              <p className="text-sm break-all">{file.name}</p>
              <button className="mt-3 px-4 py-2 rounded-xl bg-white text-slate-900 font-semibold">Upload</button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
