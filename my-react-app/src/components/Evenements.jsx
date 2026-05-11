import { useState } from 'react';
import { bbt, bbtm, collab } from './dataEvent.js';
import { YouTubeEmbed } from 'react-social-media-embed';
import SAtREvents from './SAtREvents.jsx';
import PageEvents from './PageEvents.jsx';


function Evenements(){
    const [filtreActif, setFiltreActif] = useState('paris');
    const [eventsActif, setEventsActif] = useState(null);

    const allEvents = [...bbt, ...bbtm, ...collab];
    const eventsInComing = allEvents.filter(evenement => evenement.estpasse === false);
    const bbtPassed = bbt.filter(e => e.estpasse === true);
    const bbtmPassed = bbtm.filter(e => e.estpasse === true);
    const collabPassed = collab.filter(e => e.estpasse === true);

    let listToShow = [];
    if (filtreActif === 'paris') listToShow = bbtPassed;
    if (filtreActif === 'marseille') listToShow = bbtmPassed;
    if (filtreActif === 'collab') listToShow = collabPassed;

    return(
        <main id='mainEvent'>
            <h1>Evenements</h1>
            <section>
                <h2>Inscrivez vous à nos prochains évènements!!!</h2>
                <SAtREvents OuvrirModal={setEventsActif} />
            </section>
            <section>
                <h2>Revisionnez nos anciens évènements</h2>
                <div className="Network">
                    <YouTubeEmbed className="ytb" url="https://www.youtube.com/watch?v=ehmxVE1xVug" width={500} captioned/>
                    <YouTubeEmbed className="ytb" url="https://www.youtube.com/watch?v=siPg_PldJ0M" width={500} captioned/>
                </div>
            </section>
            <section>
                <h2>Revisitez nos anciens évènements</h2>
                <div className="filterPad">
                    <button onClick={() => setFiltreActif('paris')} className={filtreActif === 'paris' ? 'actif' : ''}>BBT Paris</button>
                    <button onClick={() => setFiltreActif('marseille')} className={filtreActif === 'marseille' ? 'actif' : ''}>BBT Marseille</button>
                    <button onClick={() => setFiltreActif('collab')} className={filtreActif === 'collab' ? 'actif' : ''}>Collaborations</button>
                </div>
                <div className="listEvents">
                    {listToShow.map((event, index) => (
                        <article key={index} className="event">
                            <h3>{event.nom}</h3>
                            <img src={event.affiche} alt={event.nom} width="200" />
                            <p><strong>Date :</strong> {event.date}</p>
                            <p><strong>Lieu :</strong> {event.lieu}</p>
                            <button id="ButtonEvent" onClick={() => setEventsActif(event)}>
                                <strong>Voir les détails de l'évènement →</strong>
                            </button>
                        </article>
                    ))}
                </div>
            </section>
            <PageEvents 
               infoEvents={eventsActif} 
               fermerModal={() => setEventsActif(null)}
            />
        </main>
    );
}

export default Evenements;