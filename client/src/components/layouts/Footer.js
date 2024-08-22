import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div class="card text-center">
    <div class="card-header">
      Featured
    </div>
    <div class="card-body">
      <h5 class="card-title">Special title treatment</h5>
      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    <div class="card-footer text-body-secondary">
      This is footer of Furniture Shopping E-Commerce 
      <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
    </div>
  </div>

  )
}

export default Footer
