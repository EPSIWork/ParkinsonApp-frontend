import React from 'react'
import './Header.css';
import logo from '../../assets/logo.jpeg'; // Make sure this path is correct
import { useNavigate } from 'react-router-dom';


const Header: React.FC = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
    }

    const handleSignup = () => {
        navigate('/signup');
    }

    return (
      <header className="header">
        <div className="logo-container">
          <img src={logo} alt="Logo Mico" className="logo" />
          <span className="logo-text">Mico</span>
        </div>
        <nav className="main-nav">
          <ul>
            <li><a href="/">ACCUEIL</a></li>
            <li><a href="/a-propos">À PROPOS</a></li>
            <li><a href="/traitements">TRAITEMENTS</a></li>
            <li><a href="/medecins">MÉDECINS</a></li>
            <li><a href="/temoignages">TÉMOIGNAGES</a></li>
            <li><a href="/contact">CONTACTEZ-NOUS</a></li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <button className="login-btn" onClick={handleLogin}>CONNEXION</button>
          <button className="signup-btn" onClick={handleSignup}>S'INSCRIRE</button>
        </div>
        <button className="search-btn">🔍</button>
      </header>
    );
  };


export default Header;