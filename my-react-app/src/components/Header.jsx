/*Fichier React s'occupant du Header. Il contient les liens pour acceder aux principales pages du site web
  Le logo de l'association, une fois cliquée dessus permettra de se redirigé vers la page d'accueil du site. */

function Header(){
    return(
        <header id="Header">
            <nav>
                <a href={import.meta.env.BASE_URL}>
                    <img src="./images/icones/SAtR11.png" alt="icone SAtR" width="100" height="50"/>
                </a> 
                <strong className="LinkHead">Qui sommes-nous</strong> 
                <strong className="LinkHead">Prochainement</strong>
                <strong className="LinkHead">Prochainement</strong>
                <strong className="LinkHead">Prochainement</strong>
            </nav>  
        </header>
    );
}

export default Header