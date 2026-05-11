import { Link } from 'react-router-dom';
/*Fichier React s'occupant du Header. Il contient les liens pour acceder aux principales pages du site web
  Le logo de l'association, une fois cliquée dessus permettra de se redirigé vers la page d'accueil du site. */

function Header(){
    return(
        <header id="Header">
            <nav>
                <Link to="/">
                    <img src="./images/icones/SAtR11.png" alt="icone SAtR" width="100" height="50"/>
                </Link>
                <Link to="/WhoWeAre">Qui sommes-nous</Link>
                <Link to="/Evenements">Evenements</Link>  
                <strong className="LinkHead">Prochainement</strong>
                <strong className="LinkHead">Prochainement</strong>
            </nav>  
        </header>
    );
}

export default Header