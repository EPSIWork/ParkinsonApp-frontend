import React from 'react';
import './ClinicSpecialization.css';
import doctorImage from '../../assets/doctor.png'; // Ensure you have this image in your assets

const ClinicSpecialization: React.FC = () => {
    return (
        <div className="clinic-specialization">
            <div className="image-container">
                <img src={doctorImage} alt="Doctor" />
            </div>
            <div className="content-container">
                <h4>A votre service</h4>
                <h2>Grace a notre plateforme, trouvez le professionnel idéal à proximité de chez vous.</h2>
                <p>
                    Nos professionnels de santé sont ici pour vous. Chacun de nos aides-soignants est dévoué à offrir des soins de qualité, adaptés à vos besoins spécifiques. Grâce à notre équipe compétente et bienveillante, vous pouvez compter sur un accompagnement personnalisé à chaque étape de votre parcours de santé. Sélectionnez dès maintenant un aide-soignant proche de chez vous pour un suivi quotidien ou une assistance ponctuelle.
                </p>
            </div>
        </div>
    );
};

export default ClinicSpecialization;