import React from 'react';
import './Experts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';


interface Doctor {
    name: string;
    title: string;
    specialty: string;
    image: string;
}

const doctors: Doctor[] = [
    { name: 'Dr. Jonathom Doe', title: 'Dentist', specialty: 'Aide soignant', image: 'doctor1.png' },
    { name: 'Prof. Sakaoat Amir', title: 'Neurologist', specialty: 'Aide soignant', image: 'doctor2.png' },
    { name: 'Dr. Andro Kuria', title: 'Dermatologists', specialty: 'Aide soignant', image: 'doctor3.png' },
    { name: 'Prof. Matori Pulas', title: 'Medicine Specialists', specialty: 'Aide soignant', image: 'doctor4.png' },
];

const Experts: React.FC = () => {
    return (
        <div className="experts">
            <h3>Aides Soignants</h3>
            <h2>Nos Experts</h2>
            <p>
            Explorez notre réseau d'aides-soignants qualifiés et trouvez le professionnel idéal à proximité de chez vous. Nos aides-soignants, soigneusement sélectionnés pour leur expertise et leur bienveillance, sont disponibles pour vous offrir des soins adaptés à vos besoins. Grâce à notre plateforme, vous pouvez facilement choisir un aide-soignant local pour un accompagnement personnalisé, que ce soit pour des soins réguliers ou temporaires.
            </p>
            <div className="doctor-cards">
                {doctors.map((doctor, index) => (
                    <div className="doctor-card" key={index}>
                        <img src={require(`../../assets/${doctor.image}`)} alt={doctor.name} />
                        <div className="doctor-info">
                            <h4>{doctor.name}</h4>
                            <p>{doctor.specialty}</p>
                            <div className="contact-icons">
                                <FontAwesomeIcon icon={faPhone} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experts;