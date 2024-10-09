import React, { FormEvent, useState } from 'react';
import './MedicalRecall.css';


interface Reminder {
    id: number;
    hour: string;
    minute: string;
    dosage: string;
    medication: string
}


const MedicalRecall: React.FC = () => {
    const [reminders, setReminders] = React.useState<Reminder[]>([]);
    const [hour, setHour] = useState('');
    const [minute, setMinute] = useState('');
    const [medication, setMedication] = useState('');
    const [dosage, setDosage] = useState('');

    const addReminder = (e: FormEvent) => {
        e.preventDefault();
        const newReminder: Reminder = {
            id: Date.now(),
            hour, 
            minute,
            medication,
            dosage,
        };
        setReminders([...reminders, newReminder]);
        setHour('');
        setMinute('');
        setMedication('');
        setDosage('');
    }

    const removeReminder = (id: number) => {
        setReminders(reminders.filter((reminder) => reminder.id !== id));
    }

    

    return (
        <div className="medical-recall">
            <h1>Rappel Médical pour Parkinson</h1>
            <form onSubmit={addReminder} className="reminder-form">
                <div className="form-group">
                    <label htmlFor="hour">Heure:</label>
                    <input
                        type="number"
                        id="hour"
                        min="0"
                        max="23"
                        value={hour}
                        onChange={(e) => setHour(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="minute">Minute:</label>
                    <input
                        type="number"
                        id="minute"
                        min="0"
                        max="59"
                        value={minute}
                        onChange={(e) => setMinute(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="medication">Médicament:</label>
                    <input
                        type="text"
                        id="medication"
                        value={medication}
                        onChange={(e) => setMedication(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="add-button">Ajouter un rappel</button>
            </form>

            <div className="reminders-list">
                <h2>Rappels programmés</h2>
                {reminders.map(reminder => (
                    <div key={reminder.id} className="reminder-item">
                        <span>{reminder.hour}:{reminder.minute} - {reminder.medication}</span>
                        <button onClick={() => removeReminder(reminder.id)} className="remove-button">Supprimer</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MedicalRecall;