import React from 'react';
import './Banner.css';
import bannerImage from '../../assets/doctor.png'; // Ensure you have this image in your assets

const Banner: React.FC = () => {
    return (
        <div className="banner">
            <img src={bannerImage} alt="Doctors" className="banner-image" />
            <div className="banner-content">
                <h1>Les meilleurs <strong>Aides Soignant</strong> pour votre vie quotidienne</h1>
                <a href="#" className="button">
                    <i className="fa fa-play"></i> Decouvrir
                </a>
            </div>
        </div>
    );
};

export default Banner;