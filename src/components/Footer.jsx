import React from 'react'

const Footer = () => {
  return (
    <footer className="relative py-8 px-4 sm:px-6 lg:px-8 border-t border-purple-100/50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Sayan Chakraborty. All rights reserved.
        </p>
        <p className="text-sm text-gray-400">
          Built with curiosity and precision
        </p>
      </div>
    </footer>
  )
}

export default Footer