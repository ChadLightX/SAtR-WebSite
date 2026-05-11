import { HashRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import Header from './components/Header.jsx';
import Body from './components/Body.jsx';
import Footer from './components/Footer.jsx';
import WhoWeAre from './components/WhoWeAre.jsx';
import Evenements from './components/Evenements.jsx';
import CharteGraphique from './components/CharteGraphique.jsx';
import MentionsLegales from './components/MentionsLegales.jsx';
import Confidentialite from './components/Confidentialite.jsx';
import './App.css';
/*Fichier react coeur du site, il affichera les différentes pages du site web de l'association. */
function App() {
  return (
    <HashRouter>
    <ScrollToTop/>
      <div id="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/WhoWeAre" element={<WhoWeAre />} />
          <Route path='/Evenements' element={<Evenements/>}/>
          <Route path='/CharteGraphique' element={<CharteGraphique/>}/>
          <Route path='/MentionsLegales' element={<MentionsLegales/>}/>
          <Route path='/Confidentialite' element={<Confidentialite/>}/>
        </Routes>
        <a href="#App">
          <img src="./images/icones/upbutton.png" id="fixedButton" alt="bouton du haut"/>
        </a>
        <Footer/>
      </div>
    </HashRouter>
  );
}

export default App;