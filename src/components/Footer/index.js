import './style.css'

function Footer() {
    return (
        <div className="footer-bg">
            <div className='footer-pos'>
                <div className="footer-container">
                    <div className="footer-group-l">
                        <ul>
                            <li>Help</li>
                            <li>About Rotten Potatoes</li>
                            <li>What's the Potatometer®?</li>
                        </ul>
                    </div>
                    <div className="footer-group-l">
                        <ul>
                            <li>Critic Submission</li>
                            <li>Licensing</li>
                            <li>Advertise</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div className="footer-group">
                        <ul>
                            <li><i class="cib-gmail"></i>
                            <strong>JOIN THE NEWSLETTER</strong>
                            </li>
                            <li>Get the freshest reviews, news, and more delivered right to your inbox!</li>
                            <li><button type = "button" class = "btn btn-primary">JOIN THE NEWSLETTER</button></li>
                        </ul>
                    </div>
                    <div className="footer-group-l">
                    <strong>FOLLOW US</strong>
                    <div className='icon-flex'>
                    <i class="cib-facebook"></i>
                    <i class="cib-twitter"></i>
                    <i class="cib-instagram"></i>
                    <i class="cib-snapchat"></i>
                    <i class="cib-youtube"></i>
                    </div>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <strong>©2022 by Rotten Potatoes</strong>
            </div>
        </div>
    )
}

export default Footer