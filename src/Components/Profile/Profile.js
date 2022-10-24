import React from 'react'
import { useParams } from 'react-router-dom'

export default function Profile() {
  // retour une objet qui va être dynamique
  // useParams & useLocation = outil d'aide qui nous aide à nous repérer où on est sur la page et ce qu'on a envie de faire
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h1>Bienvenue sur votre profil !</h1>
      <p>{params.id}</p>
    </div>
  )
}
