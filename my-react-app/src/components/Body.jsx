import SAtRPost from './SAtRPost';
import SAtREvents from './SAtREvents';
/*Fichier React qui s'occupe de l'affichage du contenu du corps de la page d'accueil du site, il contient une galerie, les fonctions d'évènements et de réseaux
 ainsi que des boutons accedant au serveur discord ou à d'autre pages du site. */
function Body(){
    return(
        <main className="body-content">
            <section id="FirstTitle">
                <img className='imgHorizontal' src="./images/photos/Page Accueil SAtR.png" alt="photo fin BBT"/>
            </section>

            <h1 className='TitleSection'>Qu'est-ce que Sun After the Reign?</h1>
            <div className='core'>
                <section>
                    <p><strong>Sun After the Reign</strong> est une association <br/>
                    qui a pour but de promouvoir la marque <strong>Beyblade X</strong><br/>
                    à travers ses évènements communautaires<br/>
                    en région parisienne et marseillaise.</p>
                </section>
                <section>
                    <img src="/images/toupies/BX-01-Dran-Sword-Beyblade-Shop_1200x1200.png" alt="DranSword" width="200" height="200"/>
                    <a href="https://www.tiktok.com/@sunafterthereign?lang=fr" target="_blank">
                        <button><strong>Découvrez Sun After the Reign</strong></button>
                    </a>
                    <img src="/images/toupies/BX-02-Hells-Scythe-Beyblade-Shop_jpg_1024x1024.png" alt="HellsScythe" width="200" height="200"/>
                </section>  
            </div>

            <div>
                <h1 className='TitleSection'>Ne manquez pas nos prochains évènements</h1>
                <SAtREvents/>
            </div>

            <h1 className='TitleSection'>Rejoignez la communauté Discord</h1>
            <div className="core">
                <section>
                    <p>Rejoignez notre serveur Discord pour discuter avec la communauté Sun After the Reign, <br/>
                    participer à nos événements et rester informé de toutes nos actualités en temps réel.</p>
                </section>
                <section>
                    <img src="/images/toupies/Knight-Shield-BX04-Beyblade-Shop_480x480.png" alt="KnightShield" width="200" height="200"/>
                    <a href="https://discord.com/invite/afEvCBF9XR" title="lien serveur discord Sun After the Reign" target="_blank">
                        <button id='discord'>
                            Rejoindre le serveur Discord
                            <img src="/images/icones/Discord_Logo_sans_texte.svg.png" alt="icone discord" width="25" height="25"/>
                        </button>
                    </a>
                    <img src="/images/toupies/Wizard-Arrow-BX03-Beyblade-Shop_1200x1200.png" alt="WizardArrow" width="200" height="200"/>
                </section>
            </div>

            <section>
                <h1 className='TitleSection'>Découvrez l'ambiance de nos évènements</h1>
                <div id="gallery">
                    <article><img className='imgVertical' src="/images/photos/FTA00248.jpg" alt="BBT#15-27/07/25"/></article>
                    <article><img className='imgVertical' src="/images/photos/FTA00783.jpg" alt="BBT#20-25/01/26" /></article>
                    <article><img className='imgVertical' src="/images/photos/FTA09191.jpg" alt="UFA#25-14/09/25"/></article>
                    <article><img className='imgVertical' src="/images/photos/FTA08608.jpg" alt="BBT#17-20/07/25"/></article>
                </div>
                <div>
                    <img className='imgHorizontal' src="/images/photos/FTA08832.jpg" alt="BBT#18-23/11/25"/>
                    <img className='imgHorizontal' src="/images/photos/IMG_0949.jpg" alt="Podium BBTM #13"/>
                </div>
            </section>
            
            <div>
                <h1 className='TitleSection'>Retrouvez nos derniers posts sur les réseaux</h1>
                <SAtRPost/>
            </div>
        </main>
    );
}

export default Body