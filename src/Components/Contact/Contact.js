import React from 'react'
import { useLocation } from 'react-router-dom'

// useLocation = comment passer du state à traver les liens et comment avoir plus d'infos sur la page sur laquelle on se trouve
// useParams & useLocation = outil d'aide qui nous aide à nous repérer où on est sur la page et ce qu'on a envie de faire

export default function Contact() {

  const location = useLocation();
  console.log(location);
  // results : 
  // hash: "" = hashtag pour se déplacer dans une page html, fait référence à un id
  // key: "4tipkz94" = permet de repérer et de différencier les différentes routes, 1 clé pour chaque route créée
  // pathname: "/contact" =  chemin
  // search: "" = si dans chemin on a un ? avec des requêtes de paramètres, par exemple à une API
  // state: "test" = prop qu'on passe où on peut aussi faire passer un objet ex: {fromHome: 'Hello World'}
  return (
    <div>
      <h1>Section Contact</h1>
    </div>
  )
}
