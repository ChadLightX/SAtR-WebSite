function CharteGraphique() {
    return (
        <main className="graphs">
            <section>
                <h1 className="TitleSection">Charte Graphique de Sun After the Reign</h1>
                
                <h2>1. Logo Principal</h2>
                <ul>
                    <li><strong>Taille :</strong> 150px de largeur (dans le Header)</li>
                    <li><strong>Ombrage :</strong> Aucun ombrage direct sur l'image, mais posé sur un fond ombragé.</li>
                </ul>
            </section>
            
            <section>
                <h2>2. Colorimétrie</h2>
                <ul>
                    <li><strong>Couleur primaire :</strong> Jaune/Orange SAtR (<span style={{ backgroundColor: '#F2B552', padding: '2px 8px', borderRadius: '5px' }}>#F2B552</span>)</li>
                    <li><strong>Couleur secondaire :</strong> Violet SAtR (<span style={{ backgroundColor: '#B262D4', padding: '2px 8px', borderRadius: '5px', color: 'white' }}>#B262D4</span>)</li>
                    <li><strong>Couleurs tertiaires :</strong> Jaune clair (<span style={{ backgroundColor: '#edc834', padding: '2px 8px', borderRadius: '5px' }}>#edc834</span>) et Magenta (<span style={{ backgroundColor: '#eb4be3', padding: '2px 8px', borderRadius: '5px', color: 'white' }}>#eb4be3</span>)</li>
                </ul>
                <br/>
                <h3>Application des couleurs :</h3>
                <ul>
                    <li><strong>Body (Fond) :</strong> Blanc / Transparent par défaut.</li>
                    <li><strong>Header :</strong> Dégradé linéaire vers la droite de `#F2B552` à `#edc834`.</li>
                    <li><strong>Footer :</strong> Dégradé linéaire vers la droite de `#B262D4` à `#eb4be3`.</li>
                    <li><strong>Boutons standards et Cartes :</strong> `#F2B552`.</li>
                    <li><strong>Bouton Discord :</strong> `#7289DA` (Bleu officiel Discord).</li>
                    <li><strong>Bouton Évènements :</strong> `#edc834`.</li>
                    <li><strong>Modale (Page flottante) :</strong> Dégradé diagonal de `#F2B552` vers `#B262D4`.</li>
                </ul>
            </section>
            
            <section>
                <h2>3. Typographie</h2>
                <ul>
                    <li><strong>Police générale :</strong> Héritée du système (`font-family: inherit`).</li>
                    <li><strong>Titre de section (.TitleSection) :</strong> Centré, avec un padding supérieur de 80px.</li>
                    <li><strong>Texte des boutons :</strong> Gras (`font-weight: bold`).</li>
                    <li><strong>Liens du menu :</strong> Noirs par défaut, deviennent blancs au survol.</li>
                </ul>
            </section>
            
            <section>
                <h2>4. Interface UI et Formes</h2>
                <ul>
                    <li><strong>Arrondi des angles (Bordures) :</strong> 
                        <ul>
                            <li>`2em` pour les boutons, les cartes d'évènements et le bouton de retour en haut.</li>
                            <li>`0.5em` pour les grands conteneurs de texte (`.core`).</li>
                            <li>`15px` pour la page flottante (modale).</li>
                            <li>`20px` pour les badges de rôles.</li>
                        </ul>
                    </li>
                    <li><strong>Ombrage principal (Box-Shadow) :</strong> `10px 2px 10px black` (Utilisé massivement sur le Header, les cartes et les boutons pour donner du relief).</li>
                    <li><strong>Ombrage Modale :</strong> `0px 10px 30px rgba(0, 0, 0, 0.5)` (Ombre plus douce et diffuse pour l'effet de superposition).</li>
                    <li><strong>Animations :</strong> Zoom de 10% (`scale(1.1)`) au survol sur les boutons, les photos de membres et les icônes réseaux. Transition douce de `0.3s`.</li>
                </ul>
            </section>
            
            <section>
                <h2>5. Iconographie et Images</h2>
                
                <h3>Toupies</h3>
                <ul>
                    <li><strong>Taille :</strong> 200px sur PC, 150px sur Mobile.</li>
                </ul>

                <h3>Icônes Réseaux Sociaux (.Neticon)</h3>
                <ul>
                    <li><strong>Taille :</strong> 50x50px sur PC, 40x40px sur Mobile.</li>
                    <li><strong>Filtre :</strong> `brightness(0)` pour les rendre totalement noires par défaut.</li>
                </ul>
                
                <h3>Icône Discord (Dans le bouton)</h3>
                <ul>
                    <li><strong>Taille :</strong> 25x25px.</li>
                    <li><strong>Filtre :</strong> Passe en blanc pur au survol (`brightness(255)`).</li>
                </ul>

                <h3>Affiches des Évènements (.event img)</h3>
                <ul>
                    <li><strong>Taille :</strong> 350x350px (carré) sur PC, 150x150px sur Mobile.</li>
                </ul>

                <h3>Photos des Membres</h3>
                <ul>
                    <li><strong>Taille CEO / Fonda :</strong> 400px de largeur.</li>
                    <li><strong>Taille Membres Paris / Marseille :</strong> 300px de largeur.</li>
                </ul>

                <h3>Images de Galerie</h3>
                <ul>
                    <li><strong>Taille :</strong> Prennent 50% de la largeur de l'écran.</li>
                    <li><strong>Format :</strong> Ratio portrait `3 / 4`, rognées proprement avec `object-fit: cover`.</li>
                </ul>
            </section>
        </main>
    );
}

export default CharteGraphique;