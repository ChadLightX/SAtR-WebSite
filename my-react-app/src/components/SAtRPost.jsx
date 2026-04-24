import { XEmbed } from 'react-social-media-embed';
import { InstagramEmbed } from 'react-social-media-embed';
import { TikTokEmbed } from 'react-social-media-embed';

/*
    Fichier react permettant l'affichage des derniers posts des réseaux sociaux sur une petite fenêtre.
    Import de la bibliothèque react-social-media-embed pour l'affichage des réseaux sociaux.
*/ 

/**Fonction SATweetR qui aura pour but d'afficher le contenu d'un post X dans une fenêtre semblable à un iframe
 * utilisation de la fonction XEmbed pour l'affichage du post X
 */
function SATweetR(){
    return(
        <section>
            <h4 className='TitleNetwork'>X</h4>
            <div className="Network">
                <XEmbed url="https://x.com/SunAfterTheBey/status/2044436545898242151" width={323} captioned/>
            </div>
        </section>
    );
}

/**Fonction SAtRInsta qui aura pour but d'afficher le contenu d'un post Instagram dans une fenêtre semblable à un iframe
 * utilisation de la fonction InstagramEmbed pour l'affichage du post Instagram
 */
function SAtRInsta(){
    return(
        <section>
            <h4 className='TitleNetwork'>Instagram</h4>
            <div className="Network" >
                <InstagramEmbed url="https://www.instagram.com/p/DXE_ODlDK3a/" width={323} captioned />
            </div>
        </section>
    );
}

/**Fonction SAtikTokR qui aura pour but d'afficher le contenu d'un post Tiktok dans une fenêtre semblable à un iframe
 * utilisation de la fonction TikTokEmbed pour l'affichage du post Tiktok
 */
function SAtikTokR(){
    return(
        <section>
            <h4 className='TitleNetwork'>TikTok</h4>
            <div className="Network">
                <TikTokEmbed url="https://www.tiktok.com/@sunafterthereign/video/7630873571857861920?lang=fr" width={323} captioned/>
            </div>
        </section>
    );
}

function SAtRPost(){
    return(        
        <article id='postDiv'>
            <SATweetR/>
            <SAtRInsta/>
            <SAtikTokR/>
        </article>  
    );
}

export default SAtRPost