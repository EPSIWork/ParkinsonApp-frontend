import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // We'll create this file for styling
import {login} from '../../api';
import { useAuth } from '../../context/AuthContext';


const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();
    const {loginToken} = useAuth();
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        try {
            const response = await login({ email, password });
            console.log('Login successful:', response);
            if (response && response.token) {
                loginToken(response.token); // Use 'token' consistently
                navigate('/'); // Redirect to home or another page after successful login
            } else {
                console.error('Login response does not contain token');
                setError('Login failed: Invalid response from server');
            }
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError('An unexpected error occurred');
            }
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Bienvenue</h2>
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
                <div className="form-group">
                    <label htmlFor="password">Mot de passe</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p className="error-message">{error}</p>}
                <button type="submit" className="login-button">Se connecter</button>
                <div className="form-footer">
                    <a href="#" onClick={() => navigate('/forgot-password')}>Mot de passe oublié ?</a>
                </div>
            </form>
        </div>
    );
}

export default Login;