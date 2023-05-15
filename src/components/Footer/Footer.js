
import './footer.css';

export const Footer = () => {
    return(
        <footer className="footer">
            <section className="footer_list">
                <h3>Furni</h3>
                <p>Privacy Policy</p>
                <p>Terms Of Use</p>
                <p><i class="far fa-copyright"></i>2023 Furni</p>
            </section>
            <section className="footer_list">
                <ul>
                    <li>Connect</li>
                    <li><a href="https://github.com/VivekShirsath" target="_blank">Github</a></li>
                    <li><a href="https://www.linkedin.com/in/vivek-shirsath/" target="_blank">Linkedn</a></li>
                    <li><a href="https://twitter.com/VivekShirsath20" target="_blank">Twitter</a></li>
                </ul>
            </section>
        </footer>
    )
}