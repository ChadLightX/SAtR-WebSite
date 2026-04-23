function SAtREvents(){
    let events=[
        {nom: 'Beyblade Battle Tournament - All Star 2026 Edition', affiche: '/images/posters/All star 2026.png',date: '19 Avril 2026',lieu: '150 Rue de Rivoli, 75001 Paris'}
    ]
    return(
        <section>
            {events.map(({ nom, affiche, date, lieu }) => (
                <article key={nom} className="event">
                    <h3>{nom}</h3>
                    <img src={affiche} alt={nom} width="350" height="350"/>
                    <p>Date : {date}</p>
                    <p>Lieu : {lieu}</p>
                    <button id="ButtonEvent"><strong>Voir les détails de l'évènement →</strong></button>
                </article>
            ))}
        </section>
    );
}

export default SAtREvents