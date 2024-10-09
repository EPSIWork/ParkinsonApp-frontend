import React from 'react';
import './Home.css';
import healthycaremedical from '../../assets/HealthyCare&Medical.jpg';
import healthEpsi from '../../assets/project_health_epsi .jpeg'
const Home: React.FC = () => {
    return (
        <div className="home">
            <section className="hero-section">
                {/* Hero content goes here */}
            </section>

            <section className="stats-section">
                <div className="stat-item">
                    <h2>250+</h2>
                    <p>Specialist Doctor</p>
                </div>
                <div className="stat-item">
                    <h2>3.000+</h2>
                    <p>Client Cooperation</p>
                </div>
                <div className="stat-item">
                    <h2>10.000+</h2>
                    <p>Customers Are Satisfied With Us</p>
                </div>
            </section>

            <section className="greatest-section">
                <h2>We Are The Greatest</h2>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <div className="service-cards">
                    <div className="service-card">
                        <div className="service-card-image">
                            <img src={healthEpsi} alt="Healthy Life" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="adopt-healthy-section">
                <div className="content">
                    <h2>Adopt A Healthy Lifestyle To Help You Live In Old Age</h2>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
                <div className="image-placeholder">
                    <img src={healthycaremedical} alt="Health Epsi" />
                </div>
            </section>

            <section className="specialists-section">
                <h2>Professional Specialists Are Ready To Help</h2>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                    <li>Ut enim ad minim veniam, quis nostrud exercitation</li>
                    <li>Duis aute irure dolor in reprehenderit in voluptate</li>
                </ul>
            </section>

            <section className="doctors-section">
                <h2>Best Doctors In Their Field</h2>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                <div className="doctor-cards">
                    {/* Add doctor cards here */}
                </div>
            </section>

            <section className="consultation-section">
                <div className="content">
                    <h2>Consultation Now For A Safe And Healthy Life</h2>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    <button>Make The Schedule</button>
                </div>
                <div className="image-placeholder">
                    <img src={healthEpsi} alt="Health Epsi" />
                </div>

            </section>

            <section className="free-consultation-section">
                <h2>Free Consultation For New Users</h2>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                <form>
                    <input type="email" placeholder="Enter your email" />
                    <button type="submit">Send</button>
                </form>
            </section>
        </div>
    );
}

export default Home;