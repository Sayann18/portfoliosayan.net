import React from 'react'

const Certifications = () => {
  const certifications = [
    {
      title: 'Google Cloud',
      date: 'May 2026',
      description: '5 Certifications & Skill Badges covering Cloud Computing, Networking, Compute Engine, and Kubernetes.',
    },
    {
      title: 'Oracle Cloud Infrastructure 2025 AI Foundations Associate',
      date: 'Apr 2026',
      description: 'Industry certification validating foundational knowledge of AI, Machine Learning, Generative AI, and Oracle Cloud Infrastructure.',
    },
    {
      title: 'Tata Cybersecurity Analyst Job Simulation',
      date: 'Apr 2026',
      description: 'Hands-on experience in cybersecurity, threat analysis, and risk assessment.',
    },
    {
      title: 'Deloitte Australia Cyber Job Simulation',
      date: 'Apr 2026',
      description: 'Practical simulation focused on incident response, cyber risk, and security consulting.',
    },
    {
      title: 'Basics of Data Analytics – PW',
      date: 'Apr 2025',
      description: 'Foundation in data analytics, visualization, and statistical analysis.',
    },
  ]

  return (
    <section id="certifications" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="section-label reveal">Certifications</div>

        <div className="relative reveal">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 to-purple-200" />

          <div className="space-y-8">
            {certifications.map((cert) => (
              <div key={cert.title} className="relative pl-12 sm:pl-20">
                {/* Timeline dot */}
                <div className="absolute left-2 sm:left-6 top-1 w-5 h-5 rounded-full bg-white border-2 border-purple-400 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-purple-500" />
                </div>

                <div className="glass-card rounded-2xl p-6 hover:border-purple-200 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{cert.title}</h3>
                    <span className="text-sm text-purple-600 font-medium">{cert.date}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications
