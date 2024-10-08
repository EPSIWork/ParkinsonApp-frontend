import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ForgotPassword.css'; // We'll create this file for styling

const ForgotPassword: React.FC = () => {

    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Password reset request for:', email);
        // Add logic to handle password reset request
        navigate('/login'); // Redirect to login after submission
    };

    return (
        <div className="forgot-password-container">
            <form className="forgot-password-form" onSubmit={handleSubmit}>
                <h2>Mot de passe oublié</h2>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="forgot-password-button">Envoyer une vérification</button>
            </form>
        </div>
    );
}

export default ForgotPassword;