import { useState } from 'react';
import { membreData } from './membreData';
import PageMembre from './PageMembre';

function WhoWeAre(){
    const [membreActif, setMembreActif] = useState(null);
    return(
        <main id="QuiSommesNous">
            <h1 id="FirstWho">QUI SOMMES NOUS?</h1>
            <section id="Membre">
                <h1>Découvrez nos membres</h1>
                
                <article>
                    <h2>Fondateur 👔</h2>
                    <div className="FondaCEO">
                        <div className="membre-card">
                            <img className="imgFonda" src="./images/icones/ceo.png" alt="Shishi" onClick={() => setMembreActif(membreData.shishi)}/>
                            <strong>Shishi</strong>
                        </div>
                        <div className="membre-card">
                            <img className="imgFonda" src="./images/icones/ceo.png" alt="Zeikuo" onClick={() => setMembreActif(membreData.zeikuo)}/>
                            <strong>Zeikuo</strong>
                        </div>
                    </div>
                </article>

                <article>
                    <h2>Division Parisienne 🗼</h2>
                    <div className="Fondamember">
                        <div className="membre-card">
                            <img className="imgParis" src="./images/icones/member.png" alt="Meiden" onClick={() => setMembreActif(membreData.meiden)}/>
                            <strong>Meiden</strong>
                        </div>
                        <div className="membre-card">
                            <img className="imgParis" src="./images/icones/member.png" alt="Leirya" onClick={() => setMembreActif(membreData.leirya)}/>
                            <strong>Leirya</strong>
                        </div>
                        <div className="membre-card">
                            <img className="imgParis" src="./images/icones/member.png" alt="Younsi" onClick={() => setMembreActif(membreData.younsi)}/>
                            <strong>Younsi</strong>
                        </div>
                        <div className="membre-card">
                            <img className="imgParis" src="./images/icones/member.png" alt="Berserk" onClick={() => setMembreActif(membreData.berserk)}/>
                            <strong>Berserk</strong>
                        </div>
                        <div className="membre-card">
                            <img className="imgParis" src="./images/icones/member.png" alt="NthanB" onClick={() => setMembreActif(membreData.nthanb)}/>
                            <strong>NthanB</strong>
                        </div>
                    </div>
                </article>

                <article>
                    <h2>Division Marseillaise 🌴</h2>
                    <div className="Fondamember">
                        <div className="membre-card">
                            <img className="imgMarseille" src="./images/icones/member.png" alt="Xeco" onClick={() => setMembreActif(membreData.xeco)}/>
                            <strong>Xeco</strong>
                        </div>
                        <div className="membre-card">
                            <img className="imgMarseille" src="./images/icones/member.png" alt="Yeggron" onClick={() => setMembreActif(membreData.yeggron)}/>
                            <strong>Yeggron</strong>
                        </div>
                        <div className="membre-card">
                            <img className="imgMarseille" src="./images/icones/member.png" alt="Samudec" onClick={() => setMembreActif(membreData.samudec)}/>
                            <strong>Samudec</strong>
                        </div>
                    </div>
                </article>
            </section>

            <section>
                <h1>SAtR c'est:</h1>
                <div id="Stats">
                    <p><span className="gros-titre">L'association de combat de toupie la plus influente de France</span></p> 
                    <p><span className="gros-titre">+40</span> évènements sur Paris et sur Marseille</p>
                    <p><span className="gros-titre">+1300</span> participants à nos évènements</p>
                    <p><span className="gros-titre">+900</span> personnes qui font partie de la communauté Sun After the Reign sur notre serveur Discord</p>
                    <p><span className="gros-titre">+100</span> participants à nos tournois mensuels le Beyblade Battle Tournament sur Paris</p>
                    <p><span className="gros-titre">+30</span> participants à nos tournois mensuels le Beyblade Battle Tournament sur Marseille</p>
                    <p><span className="gros-titre">De nombreuses collaborations</span> avec plusieurs acteurs de l’évènementiel comme L’Ultimate Fighting Arena (UFA) ou le Royaume du TCG</p>
                </div>
            </section>
            
            <PageMembre 
               donneesDuMembre={membreActif} 
               fermerModal={() => setMembreActif(null)}
            />
        </main>
    );
}

export default WhoWeAre;