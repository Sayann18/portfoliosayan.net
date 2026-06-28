import React from 'react'

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="section-label reveal">Experience</div>

        <div className="glass-card rounded-3xl p-6 sm:p-10 reveal">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left - Role Info */}
            <div className="lg:col-span-1">
              <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-1">AI Intern</h3>
              <p className="text-purple-700 font-medium mb-4">FlyRank</p>

              <div className="flex items-center gap-2 text-gray-500 mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-sm">2025</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {['AI/ML', 'Python', 'Collaboration', 'Software Engineering'].map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right - Description */}
            <div className="lg:col-span-2">
              <div className="relative">
                <svg className="absolute -top-2 -left-2 w-8 h-8 text-purple-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-600 leading-relaxed pl-6">
                  Worked as an AI Intern, gaining practical exposure to AI workflows, collaborative development, and modern software engineering practices. As a fresher, this experience marks the beginning of my professional journey while I continue expanding my expertise in AI, cybersecurity, and full-stack development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience