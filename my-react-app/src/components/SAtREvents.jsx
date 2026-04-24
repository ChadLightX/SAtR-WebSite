/*Fichier react qui s'occupe des évènements de l'association. */
/**Fonction SAtREvents qui aura pour but d'afficher les évènements dans un rectangle orange
 * Pour afficher un évènement, il faut l'ajouter dans le tableau events pour le moment
 * Les images des posters se trouvent dans /images/posters
 */
function SAtREvents(){
    let events=[ //tableau qui contient les informations des évènements dans un dictionnaire: l'id de l'évènement, son nom, son affiche, sa date et son lieu
        {nom: 'Beyblade Battle Tournament - All Star 2026 Edition', affiche: './images/posters/All star 2026.png',date: '19 Avril 2026',lieu: '150 Rue de Rivoli, 75001 Paris'},
        {nom: 'Beyblade Battle Tournament - All Star 2025 Edition', affiche: './images/posters/All star 2025.png',date: '20 Avril 2025',lieu: '150 Rue de Rivoli, 75001 Paris'}
    ]

    let eventPassed=[];
    let i;

    for(i = 0; i<events.length;i++){
        let newEvents = events[i];
        eventPassed.push(
            <article key={newEvents} className="event"> {/*l'id d'un evenement sera associé à un bloc <article>*/}
                <h3>{newEvents.nom}</h3> {/*Affichage du nom en h3 */}
                <img src={newEvents.affiche} alt={newEvents.nom} width="350" height="350"/> {/*La source de l'image correpondra au chemin de l'image dans la clé affiche et son alt sera son nom dans le dictionnaire */}
                <p>Date : {newEvents.date}</p> {/*Affichage de la date en p */}
                <p>Lieu : {newEvents.lieu}</p> {/*Affichage du lieu en p */}
                <button id="ButtonEvent"><strong>Voir les détails de l'évènement →</strong></button>
            </article>
        );
    }
    return( //renvoie une structure HTML contenant les informations de events
        <section id="listEvents">
            {eventPassed}
        </section>
    );
}

export default SAtREvents //exportation de la fonction SAtREvent pour l'utiliser dans d'autres fichiers .jsx