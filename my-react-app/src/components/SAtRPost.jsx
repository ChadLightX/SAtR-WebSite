import { Tweet } from 'react-tweet';
import { InstagramEmbed } from 'react-social-media-embed';
import { TikTokEmbed } from 'react-social-media-embed';

function SATweetR(){
    return(
        <section>
            <h4 className='TitleNetwork'>X</h4>
            <div className="Network" style={{ display: 'flex', justifyContent: 'center' }}>
                <Tweet id="2044436545898242151"/>
            </div>
        </section>
    );
}

function SAtRInsta(){
    return(
        <section>
            <h4 className='TitleNetwork'>Instagram</h4>
            <div className="Network" style={{ display: 'flex', justifyContent: 'center' }}>
                <InstagramEmbed url="https://www.instagram.com/p/DXE_ODlDK3a/" width={500} captioned />
            </div>
        </section>
    );
}

function SAtikTokR(){
    return(
        <section>
            <h4 className='TitleNetwork'>TikTok</h4>
            <div className="Network" style={{ display: 'flex', justifyContent: 'center' }}>
                <TikTokEmbed url="https://www.tiktok.com/@sunafterthereign/video/7630873571857861920?lang=fr" width={500} captioned/>
            </div>
        </section>
    );
}

function SAtRPost(){
    return(
        <div>
            <h1>Retrouvez nos derniers posts sur les réseaux</h1>
            <section id='postSection'>
                <SATweetR/>
                <SAtRInsta/>
                <SAtikTokR/>
            </section>
        </div>  
    );
}

export default SAtRPost