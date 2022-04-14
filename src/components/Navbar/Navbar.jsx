import React from 'react'
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <div>
            <nav>
      <Link to="/">componentes</Link>
      <Link to="/blog">Blog</Link>
    </nav>
    </div>
  )
}
