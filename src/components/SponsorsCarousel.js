/* eslint-disable no-unused-vars */

const SponsorsCarousel = (props) => {
    let sponsors = props.sponsors;
    let type = props.sponsorType;

    return (
        <div className="logos">
            <div className="logos-slide">
                {sponsors.map((logo, index) => (
                    <img className={type} key={index} src={logo} alt={`logo-${index}`} />
                ))}
            </div>
            <div className="logos-slide">
                {sponsors.map((logo, index) => (
                    <img className={type} key={index} src={logo} alt={`logo-${index}`} />
                ))}
            </div>
        </div>
    );
};

export default SponsorsCarousel;
