import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {

  const navigate = useNavigate();

  // console.log(navigate);

  const goHome = () => navigate("/");

  return (
    <div>
      <h1>Oops, cette page n'existe pas !!!</h1>
      <button onClick={goHome}>Retour à l'accueil</button>
    </div>
  )
}
