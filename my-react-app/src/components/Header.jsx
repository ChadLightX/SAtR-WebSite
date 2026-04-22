function Header(){
    return(
        <header className="Header" style={{ backgroundColor: '#F2B552' }}>
            <nav className="navHead" style={{display: 'flex', padding: '15px'}}>
                <a href="Index.html">
                    <img src="/images/icones/SAtR11.png" alt="icone SAtR" width="100" height="50"/>
                </a> |
                <strong className="LinkHead">Qui sommes-nous</strong> |
                <strong className="LinkHead">Prochainement</strong>
            </nav>  
        </header>
    );
}

export default Header