import { bbt, bbtm, collab } from './dataEvent.js';

function SAtREvents({ OuvrirModal }){
    const allEvents = [...bbt, ...bbtm, ...collab];
    const eventsInComing = allEvents.filter(evenement => evenement.estpasse === false);

    return(
        <div className="listEvents">
            {eventsInComing.map((event, index) => (
                <article key={index} className="event">
                    <h3>{event.nom}</h3>
                    <img src={event.affiche} alt={event.nom} width="200" />
                    <p><strong>Date :</strong> {event.date}</p>
                    <p><strong>Lieu :</strong> {event.lieu}</p>
                    <button id="ButtonEvent" onClick={() => OuvrirModal(event)}>
                        <strong>Voir les détails de l'évènement →</strong>
                    </button>
                </article>
            ))}
            
            {/* Message si la liste est vide */}
            {eventsInComing.length === 0 && (
                <h2>Aucun tournoi n'est annoncé pour le moment. Restez à l'affût !</h2>
            )}
        </div>
    );
}

export default SAtREvents;