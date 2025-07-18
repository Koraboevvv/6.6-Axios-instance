import React from 'react'
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="mb-[30px] bg-amber-700 shadow-md ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[75px] flex items-center justify-between">
        
        <Link to="/" className="text-white text-2xl font-bold tracking-wide">Logoo</Link>

        <nav className="hidden md:flex gap-8 text-white text-lg font-medium">
          <Link to="/"className="">Home</Link>
          <Link to="/about"className="">About</Link>
          <Link to="/contact"className="">Contact</Link>
          <Link to="/help"className="">Help</Link>
          <Link to="/login"className="">Login</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
