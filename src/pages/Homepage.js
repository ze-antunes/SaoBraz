/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { Header } from "../components/Header";
import firstImage from '../assets/imgs/pictures/BR2_7660.jpg';


const Homepage = () => {
    return (
        <div>
            <Header />
            <div className="carousel">
                <img src={firstImage} alt="firstImage" />
            </div>

            <main className="homepage">

            </main>
            <footer>
                <div className="rounded-social-buttons">
                    <a className="social-button facebook" href="https://www.facebook.com/saobraz2020?locale=pt_PT" target="_blank"><i className="fab fa-facebook-f"></i></a>
                    <a className="social-button youtube" href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube"></i></a>
                    <a className="social-button instagram" href="https://www.instagram.com/festasaobraz/" target="_blank"><i className="fab fa-instagram"></i></a>
                </div>
            </footer>
        </div>
    );
}

export default Homepage;