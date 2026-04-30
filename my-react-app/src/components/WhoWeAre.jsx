function WhoWeAre(){
    return(
        <main id="QuiSommesNous">
            <h1 id="FirstWho">QUI SOMMMES NOUS?</h1>
            <section id="Membre">
                <h1>Découvrez nos membres</h1>
                <article>
                    <h2>Fondateur 👔</h2>
                    <div className="FondaCEO">
                        <img className="imgFonda" src="./images/icones/ceo.png" alt="Shishi"/>
                        <img className="imgFonda" src="./images/icones/ceo.png" alt="Zeikuo"/>
                    </div>
                    <div className="FondanameCEO">
                        <strong>Shishi</strong>
                        <strong>Zeikuo</strong>
                    </div>
                </article>
                <article>
                    <h2>Division Parisienne 🗼</h2>
                    <div className="Fondamember">
                        <img className="imgParis" src="./images/icones/member.png" alt="Younsi"/>
                        <img className="imgParis" src="./images/icones/member.png" alt="Meiden"/>
                        <img className="imgParis" src="./images/icones/member.png" alt="Leirya"/>
                        <img className="imgParis" src="./images/icones/member.png" alt="Berserk"/>
                        <img className="imgParis" src="./images/icones/member.png" alt="NthanB"/>
                    </div>
                    <div className="Fondaname">
                        <strong>Leirya</strong>
                        <strong>Meiden</strong>
                        <strong>Younsi</strong>
                        <strong>Berserk</strong>
                        <strong>NthanB</strong>
                    </div>
                </article>
                <article>
                    <h2>Division Marseillaise 🌴</h2>
                    <div className="Fondamember">
                        <img className="imgMarseille" src="./images/icones/member.png" alt="Yeggron"/>
                        <img className="imgMarseille" src="./images/icones/member.png" alt="Xeco"/>
                        <img className="imgMarseille" src="./images/icones/member.png" alt="Samudec"/>
                    </div>
                    <div className="Fondaname">
                        <strong>Xeco</strong>
                        <strong>Yeggron</strong>
                        <strong>Samudec</strong>
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
        </main>
    );
}

export default WhoWeAre;