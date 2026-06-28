import React from 'react'

const TechStack = () => {
  const categories = [
    {
      title: 'Languages',
      skills: [
        { name: 'C++' },
        { name: 'Java' },
        { name: 'JavaScript' },
        { name: 'TypeScript' },
        { name: 'SQL' },
      ],
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'React.js' },
        { name: 'Next.js' },
        { name: 'Tailwind CSS' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js' },
        { name: 'Express.js' },
        { name: 'REST APIs' },
        { name: 'GraphQL' },
      ],
    },
    {
      title: 'Database',
      skills: [
        { name: 'MongoDB' },
        { name: 'MySQL' },
      ],
    },
    {
      title: 'Developer Tools',
      skills: [
        { name: 'Git' },
        { name: 'GitHub' },
        { name: 'Docker' },
        { name: 'Linux' },
        { name: 'VS Code' },
        { name: 'Figma' },
      ],
    },
  ]

  return (
    <section id="tech-stack" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="section-label reveal">Tech Stack</div>

        <div className="mb-12 reveal">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl">
            Technologies, languages, frameworks, tools, and platforms I use to build modern, scalable, and secure applications.
          </p>
        </div>

        <div className="space-y-10">
          {categories.map((category, catIndex) => (
            <div key={category.title} className="reveal" style={{ transitionDelay: `${catIndex * 0.1}s` }}>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="glass-card px-4 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:border-purple-300 hover:shadow-purple-100/50 transition-all duration-300 cursor-default"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack