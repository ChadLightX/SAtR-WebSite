import SAtRPost from './SAtRPost';

function Body(){
    return(
        <main className="body-content">
            <section>
                <h1>Sun After the Reign</h1>
                <img src="/images/photos/42e84a6e-b04f-474a-b800-bf2ab5b3e09f.jpeg" alt="photo fin BBT" width="1920" height="1080"/>
                <h1>Plus qu'une passion, venez redécouvrir le combat de toupie</h1>
            </section>
            <div>
                <p><strong>Sun After the Reign</strong> est une association qui a pour but de promouvoir la marque <strong>Beyblade X</strong> 
                à travers ses évènements communautaire en région parisienne et marseillaise.</p>
                <img src="Wizard-Arrow-BX03-Beyblade-Shop_1200x1200.png" alt="WizardArrow" width="200" height="200"/>
                <a href="https://www.tiktok.com/@sunafterthereign?lang=fr" target="_blank">
                    <button><strong>Découvrez Sun After the Reign</strong></button>
                </a>
                <img src="BX-02-Hells-Scythe-Beyblade-Shop_jpg_1024x1024.png" alt="HellsScythe" width="200" height="200"/>
            </div>
            <div>
                <h1>Découvrez l'ambiance de nos évènements</h1>
                <img src="/images/photos/FTA00248.jpg" alt="BBT#15-27/07/25" width="870" height="1300"/>
                <img src="/images/photos/FTA00783.jpg" alt="BBT#20-25/01/26" width="870" height="1300"/>
                <img src="/images/photos/FTA09191.jpg" alt="UFA#25-14/09/25" width="870" height="1010"/>
                <img src="/images/photos/FTA08608.jpg" alt="BBT#17-20/07/25" width="870" height="1010"/>
                <img src="/images/photos/FTA08832.jpg" alt="BBT#18-23/11/25" width="1730" height="980"/>
                <img src="/images/photos/IMG_0949.jpg" alt="Podium BBTM #13" width="1730" height="980"/>
                <p>La probabilité que ce site a été généré par IA<br/> est tout simplement nulle.</p>
            </div>
            <div className="Discord" style={{backgroundColor: 'whitesmoke'}}>
                <h1>Rejoignez la communauté Discord</h1>
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
                <h1>Ne manquez pas nos prochains évènements</h1>
                <section className="event" style={{backgroundColor: '#F2B552'}}>
                    <h4>Beyblade Battle Tournament - All Star Edition Season 2</h4>
                    <img src="/images/posters/All star 2026.png" alt="All star 2026" width="350" height="350"/>
                    <button><strong>Voir les détails de l'évènement</strong></button>
                </section>
            </div>
            <SAtRPost/>
        </main>
    );
}

export default Body