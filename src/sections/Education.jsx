import React from 'react'

const Education = () => {
  const highlights = [
    { label: 'WBJEE 2024 Merit Admission' },
    { label: 'Tuition Fee Waiver (TFW) Scholar' },
    { label: 'HPF 2025 Scholar' },
    { label: 'Consistent Academic Excellence' },
  ]

  return (
    <section id="education" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="section-label reveal">Education</div>

        <div className="relative reveal">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 to-purple-200" />

          {/* Timeline item */}
          <div className="relative pl-12 sm:pl-20">
            {/* Timeline dot */}
            <div className="absolute left-2 sm:left-6 top-0 w-6 h-6 rounded-full bg-white border-2 border-purple-500 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-purple-600" />
            </div>

            {/* Card */}
            <div className="glass-card rounded-3xl p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    Bachelor of Technology
                  </h3>
                  <p className="text-lg text-gray-600 mb-1">Computer Science & Engineering</p>
                  <p className="text-purple-700 font-medium">Specialization: Cyber Security</p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-purple-50 text-purple-700 text-sm font-medium mb-1">
                    2024 – 2028
                  </span>
                  <p className="text-sm text-gray-500">Pursuing</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-gray-500 mb-6">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span>Haldia Institute of Technology · Haldia, West Bengal</span>
              </div>

              {/* Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-purple-50/50 border border-purple-100"
                  >
                    <svg className="w-5 h-5 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700 font-medium">{item.label}</span>
                  </div>
                ))}
              </div>

              {/* CGPA Bar */}
              <div className="glass-card rounded-2xl p-5 flex items-center justify-between bg-gradient-to-r from-purple-50/80 to-purple-100/50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Current CGPA</p>
                    <p className="text-2xl font-bold text-gray-900">8.58 / 10</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Expected</p>
                  <p className="text-xl font-bold text-gray-700">2028</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education