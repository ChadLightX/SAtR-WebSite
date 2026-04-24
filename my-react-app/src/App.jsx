import Header from './components/Header.jsx';
import Body from './components/Body.jsx';
import Footer from './components/Footer.jsx';
import './App.css';
/*Fichier react coeur du site, il affichera les différentes pages du site web de l'association. */
function App() {
  return (
    <div id="App">
      <Header/>
      <Body/>
      <a href="#App">
        <img src="./images/icones/upbutton.png" id="fixedButton" alt="bouton du haut"/>
      </a>
      <Footer/>
    </div>
  );
}

export default App;