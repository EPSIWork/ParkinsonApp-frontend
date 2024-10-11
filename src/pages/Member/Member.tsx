import React, { useEffect, useState } from 'react';
import './Member.css';
import { api } from 'api';
import axios from 'axios';

const Member: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [email, setEmail] = useState<string>('');
    const [familyMembers, setFamilyMembers] = useState<string[]>([]);

    useEffect(() => {
        const fetchMemberStatus = async () => {
            try {
                const response = await api.get('/api/familyMember');
                const emails = response.data.data.map((member: any) => member.email);
                setFamilyMembers(emails);
            } catch (err) {
                setError('Failed to fetch member status');
                console.error('Error fetching member status:', err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchMemberStatus();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await api.post('/api/familyMember', { email });
            setFamilyMembers((prevMembers) => [...prevMembers, email]);
            setEmail('');
        } catch (error) {
            if (axios.isAxiosError(error)) {
                setError(error.response?.data?.message || 'Failed to add member');
            } else {
                setError('Failed to add member');
            }
        }
    };

    return (
        <div className="member-container">
            <h1>Membre des Proches</h1>
            <div>
                <h2>Ajouter un membre</h2>
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
            {isLoading ? (
                <p>Chargement...</p>
            ) : error ? (
                <p>Erreur: {error}</p>
            ) : (
                <div>
                    <h2>Membres de la famille</h2>
                    {familyMembers.length > 0 ? (
                        <table className="member-table">
                            <thead>
                                <tr>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {familyMembers.map((memberEmail, index) => (
                                    <tr key={index}>
                                        <td>{memberEmail}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>Aucun membre de la famille ajouté.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Member;