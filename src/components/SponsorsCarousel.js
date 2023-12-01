/* eslint-disable no-unused-vars */

const SponsorsCarousel = (props) => {
    let sponsors = props.sponsors;
    let animationTime = props.animationTime;
    let type = props.sponsorType;

    return (
        <div>
            <div className="logos">
                <div className={`logos-slide ` + animationTime}>
                    {sponsors.map((logo, index) => (
                        <img className={type} key={index} src={logo} alt={`logo-${index}`} />
                    ))}
                </div>
                <div className={`logos-slide ` + animationTime}>
                    {sponsors.map((logo, index) => (
                        <img className={type} key={index} src={logo} alt={`logo-${index}`} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SponsorsCarousel;
