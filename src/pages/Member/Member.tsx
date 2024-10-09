import React, { useEffect, useState } from 'react';
import './Member.css';
import axios from 'axios';


const Member : React.FC = () => {

    const [hasMember, setHasMember] = useState<boolean | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [email, setEmail] = useState<string>('');

    useEffect(() => {
        const checkMemberStatus = async () => {
            try {
                const response = await axios.get('/api/member');
                setHasMember(response.data.hasMember);
            } catch (err) {
                setError('Failed to fetch member status');
                console.error('Error fetching member status:', err);
            } finally {
                setIsLoading(false);
            }
        };

        checkMemberStatus();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post('/api/addMember', { email });
            setHasMember(true);
            setEmail('');
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError('Failed to add member');
            }
        }
    };

    const formAddMember = () => (
        <div>
        <p>Vous n'êtes pas membre des Proches</p>
        <form onSubmit={handleSubmit} className="member-form">
            <label htmlFor="email">Email du membre :</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <button type="submit">Ajouter un membre</button>
        </form>
    </div>
    );


    return (
        <div className="member-container">
            <h1>Membre des Proches</h1>
            {isLoading ? (
                <p>Chargement...</p>
            ) : error ? (
                <p>Erreur: {error}</p>
            ) : (
                <p>
                    {hasMember
                        ? "Vous êtes membre des Proches"
                        : formAddMember()}
                </p>
            )}
        </div>
    )

}

export default Member;