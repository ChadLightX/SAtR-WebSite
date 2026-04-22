import SAtRPost from './SAtRPost';

function Body(){
    return(
        <main className="body-content">
            <h1 className='TitleSection'>Sun After the Reign</h1>
            <section>
                <img className='imgHorizontal' src="/images/photos/42e84a6e-b04f-474a-b800-bf2ab5b3e09f.jpeg" alt="photo fin BBT"/>
            </section>
            <h1 className='TitleSection'>Plus qu'une passion, venez redécouvrir le combat de toupie</h1>

            <div id='core'>
                <section>
                    <p><strong>Sun After the Reign</strong> est une association <br/>
                    qui a pour but de promouvoir la marque <strong>Beyblade X</strong><br/>
                    à travers ses évènements communautaires<br/>
                    en région parisienne et marseillaise.</p>
                </section>
                <section>
                    <img src="/images/toupies/Wizard-Arrow-BX03-Beyblade-Shop_1200x1200.png" alt="WizardArrow" width="200" height="200"/>
                    <a href="https://www.tiktok.com/@sunafterthereign?lang=fr" target="_blank">
                        <button id="SAtRButton"><strong>Découvrez Sun After the Reign</strong></button>
                    </a>
                    <img src="/images/toupies/BX-02-Hells-Scythe-Beyblade-Shop_jpg_1024x1024.png" alt="HellsScythe" width="200" height="200"/>
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
            
            <div className="Discord" style={{backgroundColor: 'whitesmoke'}}>
                <h1 className='TitleSection'>Rejoignez la communauté Discord</h1>
                <p>Rejoignez notre serveur Discord pour discuter avec la communauté Sun After the Reign, <br/>
                participer à nos événements et rester informé de toutes nos actualités en temps réel.</p>
                <a href="https://discord.com/invite/afEvCBF9XR" title="lien serveur discord Sun After the Reign" target="_blank">
                    <button>
                        Rejoindre le serveur Discord
                        <img src="/images/icones/Discord_Logo_sans_texte.svg.png" alt="icone discord" width="25" height="25"/>
                    </button>
                </a>
            </div>
            <div>
                <h1 className='TitleSection'>Ne manquez pas nos prochains évènements</h1>
                <section className="event" style={{backgroundColor: '#F2B552'}}>
                    <h4>Beyblade Battle Tournament - All Star Edition Season 2</h4>
                    <img src="/images/posters/All star 2026.png" alt="All star 2026" width="350" height="350"/>
                    <button><strong>Voir les détails de l'évènement</strong></button>
                </section>
            </div>
            <h1 className='TitleSection'>Retrouvez nos derniers posts sur les réseaux</h1>
            <SAtRPost/>
        </main>
    );
}

export default Body