import React from 'react'

const About = () => {
  const infoCards = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      label: 'Specialization',
      value: 'Cyber Security',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
      label: 'Institution',
      value: 'Haldia Institute of Technology',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      label: 'Current CGPA',
      value: '8.58 / 10',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Expected Graduation',
      value: '2028',
    },
  ]

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="section-label reveal">About Me</div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Text Content */}
          <div className="reveal">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Crafting digital experiences with{' '}
              <span className="gradient-text">curiosity</span> and{' '}
              <span className="gradient-text">precision</span>
            </h2>

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                I'm a passionate Computer Science & Engineering undergraduate at Haldia Institute of Technology, specializing in Cyber Security. I thrive on solving complex problems, building scalable applications, and exploring the intersection of AI and secure systems.
              </p>
              <p>
                My curiosity drives me to continuously learn and experiment with emerging technologies. From developing full-stack web applications to diving deep into machine learning models, I enjoy every aspect of the engineering journey.
              </p>
              <p>
                I believe in writing clean, maintainable code and creating systems that are not just functional but also secure, efficient, and user-friendly. My goal is to contribute to technology that makes a real impact.
              </p>
            </div>
          </div>

          {/* Right - Info Cards */}
          <div className="space-y-4">
            {infoCards.map((card, index) => (
              <div
                key={card.label}
                className="glass-card rounded-2xl p-6 reveal"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700">
                    {card.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{card.label}</p>
                    <p className="text-lg font-semibold text-gray-900">{card.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About