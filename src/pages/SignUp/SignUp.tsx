import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';
import { signup } from '../../api';

const SignUp: React.FC = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState<'patient' | 'aide-soignant'>('patient');
    const [address, setAddress] = useState('');
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Les mots de passe ne correspondent pas !");
            return;
        }
        try {
            const response = await signup({ firstName, lastName, email, phoneNo, password,confirmPassword, role, address });
            console.log('Signup successful:', response);
            navigate('/login');
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError('An unexpected error occurred');
            }
        }
    };

    return (
        <div className="signup-container">
            <form className="signup-form" onSubmit={handleSubmit}>
                <h2>Créer un compte</h2>
                <div className="form-group">
                    <label htmlFor="prenom">Prénom</label>
                    <input
                        type="text"
                        id="prenom"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="nom">Nom</label>
                    <input
                        type="text"
                        id="nom"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </div>
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
                    <label htmlFor="phoneNo">Numéro de téléphone</label>
                    <input
                        type="tel"
                        id="phoneNo"
                        value={phoneNo}
                        onChange={(e) => setPhoneNo(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="adresse">Adresse</label>
                    <input
                        type="text"
                        id="adresse"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Rôle</label>
                    <div>
                        <label>
                            <input
                                type="radio"
                                value="patient"
                                checked={role === 'patient'}
                                onChange={() => setRole('patient')}
                            />
                            Patient
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="aide-soignant"
                                checked={role === 'aide-soignant'}
                                onChange={() => setRole('aide-soignant')}
                            />
                            Aide-soignant
                        </label>
                    </div>
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
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p className="error-message">{error}</p>}
                <button type="submit" className="signup-button">S'inscrire</button>
                <div className="form-footer">
                    Vous avez déjà un compte ? <a href="#" onClick={() => navigate('/login')}>Connectez-vous</a>
                </div>
            </form>
        </div>
    );
}

export default SignUp;