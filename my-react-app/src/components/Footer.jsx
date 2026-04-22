function Footer(){
    return(
        <footer className='Footer' style={{backgroundColor: '#B262D4', padding: '15px'}}>
            <nav className='navFoot' style={{display: 'flex', padding: '15px'}}>
                <a href="https://x.com/SunAfterTheBey" title="Visitez le compte X de SAtR" target="_blank">
                    <img src="/images/icones/X_logo_2023.svg.png" alt="icone X" width="50" height="50"/>
                </a> |
                <a href="https://www.twitch.tv/sunafterthereign" title="Visitez la chaine Twitch de SAtR" target="_blank">
                    <img src="/images/icones/Twitch_icon_2012.svg.png" alt="icone Twitch" width="50" height="50"/>
                </a> |
                <a href="https://www.youtube.com/channel/UCm3y-lCQUOM6Vj52LSoLTvA" title="Visitez la chaine YouTube de SAtR" target="_blank">
                    <img src="/images/icones/Youtube_logo.png" alt="icone YouTube" width="80" height="50"/>
                </a>
            </nav>
            <nav className='navFootlink' style={{padding: '15px'}}>
                <strong>Mentions légales</strong>|
                <strong>Politique de confidentialité</strong>|
                <strong>Charte graphique</strong>|
                <strong>Nous contacter</strong>|
                <strong>FAQ</strong>
            </nav>
            <p style={{textAlign: 'center'}}>Sun After the Reign © 2025-2026 - Tous Droits Réservés</p>
        </footer>
    );
}

export default Footer;