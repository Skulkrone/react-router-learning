import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Services() {
  return (
    <div>
      <h1>Section Services</h1>
      <nav>
        <Link to="/services/developpement">Développement</Link>
        <Link to="/services/cybersecurite">Cyber sécurité</Link>
      </nav>
      {/* Outlet = Sortie de données/contenu 
      Où on veut afficher la sortie, le code des enfants */}
      <Outlet></Outlet>
    </div>
  )
}
