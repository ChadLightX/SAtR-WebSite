import { XEmbed } from 'react-social-media-embed';
import { InstagramEmbed } from 'react-social-media-embed';
import { TikTokEmbed } from 'react-social-media-embed';

function SATweetR(){
    return(
        <section>
            <h4 className='TitleNetwork'>X</h4>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <XEmbed url="https://x.com/SunAfterTheBey/status/2044436545898242151" width={325} />
            </div>
        </section>
    );
}

function SAtRInsta(){
    return(
        <section>
            <h4 className='TitleNetwork'>Instagram</h4>
            <div className="Network" style={{ display: 'flex', justifyContent: 'center' }}>
                <InstagramEmbed url="https://www.instagram.com/p/DXE_ODlDK3a/" width={325} captioned />
            </div>
        </section>
    );
}

function SAtikTokR(){
    return(
        <section>
            <h4 className='TitleNetwork'>TikTok</h4>
            <div className="Network" style={{ display: 'flex', justifyContent: 'center' }}>
                <TikTokEmbed url="https://www.tiktok.com/@sunafterthereign/video/7630873571857861920?lang=fr" width={325} captioned/>
            </div>
        </section>
    );
}

function SAtRPost(){
    return(        
        <article id='postDiv'>
            <SATweetR/>
            <SAtRInsta/>
            <SAtikTokR/>
        </article>  
    );
}

export default SAtRPost