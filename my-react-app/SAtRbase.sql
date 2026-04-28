CREATE TABLE utilisateurs (
    id_event SERIAL PRIMARY KEY,
    nom_event VARCHAR(50),
    affiche_event VARCHAR(50),
    date_event VARCHAR(255),
    lieu_event VARCHAR(255),
    challonge_event VARCHAR(255),
);