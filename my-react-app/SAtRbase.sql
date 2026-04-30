CREATE TABLE utilisateurs (
    id_event SERIAL PRIMARY KEY,
    nom_event VARCHAR(50),
    affiche_event VARCHAR(50),
    date_event TIMESTAMPTZ NOT NULL,
    ville_event VARCHAR(50),
    adresse_event VARCHAR(255),
    challonge_event VARCHAR(255),
    est_fini BOOLEAN,
);