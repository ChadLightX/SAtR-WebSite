function PageMembre({ donneesDuMembre, fermerModal }) {
  if (!donneesDuMembre) {
    return null;
  }
    return (
    <div className="membre-overlay" onClick={fermerModal}>
      <div className="page-flottante" onClick={(e) => e.stopPropagation()}>
        <button className="bouton-fermer" onClick={fermerModal}>Fermer ❌</button>
        <h1>{donneesDuMembre.pseudo}</h1>
        <img src={donneesDuMembre.image} alt={donneesDuMembre.pseudo} width="150" />
        
        <h3>Rôle dans l'association SAtR</h3>
        <div className="liste-roles">
          {donneesDuMembre.role.map((unRole, index) => (
              <span key={index} className="badge-role">
                  {unRole}
              </span>
            ))}
        </div>

        <h3>Description</h3>
        <p>{donneesDuMembre.description}</p>

        <h3>Informations</h3>
        <ul>
            <li><strong>Toupie favorite :</strong>{donneesDuMembre.beyPref}</li>
            <li><strong>Age :</strong>{donneesDuMembre.age}</li>
            <li><strong>Lieu :</strong>{donneesDuMembre.lieu}</li>
        </ul>

      </div>
    </div>
  );
}

export default PageMembre;