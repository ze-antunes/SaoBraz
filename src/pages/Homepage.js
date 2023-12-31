/* eslint-disable no-unused-vars */
import { Header } from "../components/Header";
import Footer from "../components/Footer";
import firstImage from '../assets/imgs/pictures/BR2_7660.jpg';
import MansoryGrid from "../components/MansoryGrid";
import SponsorsCarousel from "../components/SponsorsCarousel";
import SwiperCarousel from "../components/SwiperCarousel";
import { useState } from "react";

import logoImage1 from '../assets/imgs/logos/received_325445112274068.png';
import logoImage2 from '../assets/imgs/São Braz.png';


const Homepage = () => {
    const [logos, setLogos] = useState([
        logoImage1,
        logoImage2,
        logoImage1,
        logoImage2,
        logoImage1,
        logoImage2,
        logoImage1,
        logoImage2,
    ]);

    return (
        <div>
            <Header />
            <div className="carousel">
                <SwiperCarousel />
            </div>
            <MansoryGrid />
            <SponsorsCarousel sponsors={logos} animationTime={"slow"} sponsorType={"gold"} />
            <SponsorsCarousel sponsors={logos} animationTime={"medium"} sponsorType={"silver"} />
            <SponsorsCarousel sponsors={logos} animationTime={"fast"} sponsorType={"bronze"} />
            <Footer />
        </div>
    );
}

export default Homepage;