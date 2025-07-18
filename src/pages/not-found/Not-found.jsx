import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center bg-gray-100 px-4">
      <h1 className="text-[140px] font-bold text-black">404</h1>
      <p className="text-2xl text-gray-700 mb-6">Oops! Page not found.</p>
      <Link
        to="/"
        className="px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition"
      >
        Go Home
      </Link>
    </div>
  )
}

export default NotFound
