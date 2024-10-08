import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Mico</h3>
                    <p>Mico est une plateforme innovante de télémédecine, offrant des consultations en ligne avec des médecins qualifiés.</p>
                </div>
                <div className="footer-section">
                    <h3>Liens rapides</h3>
                    <Link to="/">Accueil</Link>
                    <Link to="/a-propos">À propos</Link>
                    <Link to="/traitements">Traitements</Link>
                    <Link to="/medecins">Médecins</Link>
                </div>
                <div className="footer-section">
                    <h3>Contact</h3>
                    <p>Email: contact@mico.com</p>
                    <p>Téléphone: +33 1 23 45 67 89</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;