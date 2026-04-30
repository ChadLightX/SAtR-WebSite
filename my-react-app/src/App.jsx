import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Body from './components/Body.jsx';
import Footer from './components/Footer.jsx';
import WhoWeAre from './components/WhoWeAre.jsx'
import './App.css';
/*Fichier react coeur du site, il affichera les différentes pages du site web de l'association. */
function App() {
  return (
    <BrowserRouter>
      <div id="App">
        <Header/>
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/WhoWeAre" element={<WhoWeAre />} />
          </Routes>
          <a href="#App">
            <img src="./images/icones/upbutton.png" id="fixedButton" alt="bouton du haut"/>
          </a>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;