function PageEvents({ infoEvents, fermerModal }) {
  if (!infoEvents) {
    return null;
  }

  let mapUrl = "";
  if (infoEvents.lat && infoEvents.lon) {
    const lat = parseFloat(infoEvents.lat);
    const lon = parseFloat(infoEvents.lon);
    const offset = 0.0002; 

    const bbox = `${lon - offset}%2C${lat - offset}%2C${lon + offset}%2C${lat + offset}`;
    
    mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lon}`;
  }

  return (
    <div className="membre-overlay" onClick={fermerModal}>
      <div className="page-flottante" onClick={(e) => e.stopPropagation()}>
        <button className="bouton-fermer" onClick={fermerModal}>Fermer ❌</button>
        
        <h1>{infoEvents.nom}</h1>
        <img src={infoEvents.affiche} alt={infoEvents.nom} width="200" />
        
        <h3>Informations du tournoi</h3>
        <ul>
            <li><strong>Date :</strong> {infoEvents.date}</li>
            <li><strong>Nombre de joueurs :</strong> {infoEvents.nbjoueurs}</li>
            <li><strong>Statut :</strong> {infoEvents.estpasse ? "Terminé" : "À venir"}</li>
            <li><a id="Bracketlink" href={infoEvents.bracket} target="blank_">Accédez au bracket</a></li>
            <li><strong>Lieu :</strong> {infoEvents.lieu}</li>
        </ul>
        {/* 🗺️ L'IFRAME OPENSTREETMAP */}
        {infoEvents.lat && infoEvents.lon && (
            <div style={{ marginTop: "20px" }}>
                <iframe 
                    title={`Carte de ${infoEvents.nom}`}
                    width="100%" 
                    height="250" 
                    src={mapUrl} 
                ></iframe>
                <div id="big-map">
                    <small>
                        <a 
                            href={`https://www.openstreetmap.org/?mlat=${infoEvents.lat}&mlon=${infoEvents.lon}#map=16/${infoEvents.lat}/${infoEvents.lon}`} 
                            target="_blank" 
                            rel="noreferrer"
                        >
                            Voir la carte en plein écran
                        </a>
                    </small>
                </div>
            </div>
        )}
      </div>
    </div>
  );
}

export default PageEvents;