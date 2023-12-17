/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Header } from "../components/Header";

const Contactos = () => {
    return (
        <div>
            <Header />
            <video preload="true" autoPlay muted loop id="videoSaoBraz" src={require("../assets/vids/video_contac_page.mp4")} type="video/mp4" />
            <div className="contactpage">
                <div className="contactpage__box">
                    {/* Form */}
                    <div className="contact form">
                        <form>
                            <div className="form__box">
                                <div className="form__row50">
                                    <div className="form__inputBox">
                                        <span>Primeiro Nome:</span>
                                        <input type="text" placeholder="Primeiro Nome" />
                                    </div>
                                    <div className="form__inputBox">
                                        <span>Último Nome:</span>
                                        <input type="text" placeholder="Último Nome" />
                                    </div>
                                </div>

                                <div className="form__row50">
                                    <div className="form__inputBox">
                                        <span>Email:</span>
                                        <input type="email" placeholder="email@email.com" />
                                    </div>
                                    <div className="form__inputBox">
                                        <span>Nº Telemovel:</span>
                                        <input type="text" placeholder="+351 111 222 333" />
                                    </div>
                                </div>

                                <div className="form__row100">
                                    <div className="form__inputBox">
                                        <span>Mensagem:</span>
                                        <textarea placeholder="Escreva aqui a sua mensagem..."></textarea>
                                    </div>
                                </div>

                                <div className="form__row100">
                                    <div className="form__inputBox">
                                        <input type="submit" value="Enviar" />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    {/* Info */}
                    <div className="contact info">
                        <div className="rounded-social-buttons">
                            <a className="social-button facebook" href="https://www.facebook.com/saobraz2020?locale=pt_PT" target="_blank"><i className="fab fa-facebook-f"></i></a>
                            <a className="social-button youtube" href="https://www.youtube.com/@saobraz8752" target="_blank"><i className="fab fa-youtube"></i></a>
                            <a className="social-button instagram" href="https://www.instagram.com/festasaobraz/" target="_blank"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    {/* Map */}
                    <div className="contact map">
                        <iframe title="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1800.5163097163088!2d-8.617734572871536!3d40.6277775714339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd23a287ede2480f%3A0xb3d6e7980ca86b49!2sCapela%20de%20S%C3%A3o%20Braz!5e0!3m2!1spt-PT!2spt!4v1702778936604!5m2!1spt-PT!2spt" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contactos;