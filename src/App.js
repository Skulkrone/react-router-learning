import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Profile from './Components/Profile/Profile';
import NotFound from './Components/NotFound/NotFound';
import Navbar from './Components/Navbar/Navbar';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
import Developpement from './Components/Services/Developpement/Developpement';
import CyberSecurity from './Components/Services/CyberSecurity/CyberSecurity';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      {/* Avant version 6 du router, on utilisait des swith maintenant c'est une route entourée par des routeS */}
        <Routes>
          {/* Ici la page d'accueil n'affichera que le composant Home */}
          <Route path="/" element={<Home />}></Route>
          <Route path="/services" element={<Services />}>
            <Route path="/services/developpement" element={<Developpement />}></Route>
            <Route path="/services/cybersecurite" element={<CyberSecurity />}></Route>
          </Route>
          <Route path="/contact" element={<Contact />}></Route>
          {/* CHEMIN DYNAMIQUE :
          Ici la page Profil n'affichera que le composant Profil correspondant à l'id */}
          {/* * = cette route va repésenter une infinité de routes 
           comme si on fait /profil/* = ça va montrer toutes les pages dans sous-dossiers de Profile
          */}
          <Route path="/profil/:id" element={<Profile />}></Route>
          {/* Gestion des pages notfound erreur 404 */}
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
    </div>
  );
}

export default App;
