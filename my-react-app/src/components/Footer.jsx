function Footer(){
    return(
        <footer className='Footer'>
            <div>
                <nav className='navFootlink'>
                    <strong>Mentions légales</strong>
                    <strong>Politique de confidentialité</strong>
                    <strong>Charte graphique</strong>
                    <strong>Nous contacter</strong>
                    <strong>FAQ</strong>
                </nav>
                <nav className='navFoot'>
                <a href="https://x.com/SunAfterTheBey" title="Visitez le compte X de SAtR" target="_blank">
                    <img className="Neticon" src="/images/icones/X_logo_2023.svg.png" alt="icone X" width="50" height="50"/>
                </a> 
                <a href="https://www.twitch.tv/sunafterthereign" title="Visitez la chaine Twitch de SAtR" target="_blank">
                    <img className="Neticon" src="/images/icones/Twitch_icon_2012.svg.png" alt="icone Twitch" width="50" height="50"/>
                </a> 
                <a href="https://www.youtube.com/channel/UCm3y-lCQUOM6Vj52LSoLTvA" title="Visitez la chaine YouTube de SAtR" target="_blank">
                    <img className="Neticon" src="/images/icones/Youtube_icon.png" alt="icone YouTube" width="50" height="50"/>
                </a>
                <a href="https://www.instagram.com/sunafterthereign/?hl=fr" title="Visitez le compte Instagram de SAtR" target="_blank">
                    <img className="Neticon" src="/images/icones/Icon-Instagram-PNG.png" alt="icone Instagram" width="50" height="50"/>
                </a>
                <a href="https://www.tiktok.com/@sunafterthereign?referer_url=localhost%3A5173%2F&refer=embed&embed_source=121374463%2C121468991%2C121439635%2C121749182%2C121433650%2C121404358%2C121497414%2C122221973%2C122122240%2C121351166%2C121811500%2C121960941%2C122122244%2C122122243%2C122122242%2C121487028%2C122258714%2C121331973%2C120811592%2C120810756%2C121885509%3Bnull%3Bembed_masking&referer_video_id=7630873571857861920" title="Visitez le compte Tiktok de SAtR" target="_blank">
                    <img className="Neticon" src="/images/icones/Tiktok_icon.png" alt="icone Tiktok" width="50" height="50"/>
                </a>
                </nav>
            </div>
            
            <p>Sun After the Reign © 2025-2026 - Tous Droits Réservés</p>
        </footer>
    );
}

export default Footer;