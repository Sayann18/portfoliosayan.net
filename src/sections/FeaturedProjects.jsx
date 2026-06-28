import React from 'react'

const FeaturedProjects = () => {
  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="section-label reveal">Projects</div>

        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto reveal">
          <div className="glass-card rounded-3xl p-8 sm:p-12 text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-purple-100 flex items-center justify-center">
              <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">🚀 Projects Coming Soon</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              I'm currently building real-world projects. They will be uploaded and available here soon. Stay tuned for exciting updates!
            </p>

            <div className="flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
              <span className="text-sm text-gray-500 font-medium">In Progress</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects