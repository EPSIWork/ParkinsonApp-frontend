import React from 'react'
import './Header.css';
import logo from '../../assets/logo.jpeg'; // Make sure this path is correct
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';



const Header: React.FC = () => {
    const navigate = useNavigate();

    const { isAuthenticated, logoutToken } = useAuth();  // Destructure isAuthenticated and logoutToken

    const handleLogin = () => {
        navigate('/login');
    }

    const handleSignup = () => {
        navigate('/signup');
    }

    const handleLogOut = () => {
        logoutToken()
        navigate('/')
    }


    return (
      <header className="header">
        <div className="logo-container">
          <img src={logo} alt="Logo Mico" className="logo" />
          <span className="logo-text">Parkisonia</span>
        </div>
        <nav className="main-nav">
          <ul>
            <li><a href="/">ACCUEIL</a></li>
            <li><a href="/a-propos">À PROPOS</a></li>
            <li><a href="/test-de-frappe">TEST DE FRAPPE</a></li>
            <li><a href="/member">MEMBRE</a></li>
            <li><a href="/medication-recall">RAPPEL-MEDICAMENT</a></li>
          </ul>
        </nav>
        <div className="auth-buttons">
          {isAuthenticated ? (
            <button className="logout-btn" onClick={handleLogOut}>DÉCONNEXION</button>) :
          (
            <>
              <button className="login-btn" onClick={handleLogin}>CONNEXION</button>
              <button className="signup-btn" onClick={handleSignup}>S'INSCRIRE</button>
            </>
          )}
        </div>
        <button className="search-btn">🔍</button>
      </header>
    );
  };


export default Header;