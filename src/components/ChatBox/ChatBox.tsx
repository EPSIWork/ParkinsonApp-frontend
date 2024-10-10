import React, { useState , KeyboardEvent} from 'react';
import './ChatBox.css';
import { chatopen } from 'api';

const Chatbox: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState<string[]>([]);
    const [response, setResponse] = useState<string>('');


    const toggleChatbox = () => {
        console.log('Toggling chatbox'); // Add this line
        setIsOpen(!isOpen);
    };

    const handleSendMessage = async () => {
        if (message.trim()) {
            setChatHistory([...chatHistory, message]);
            setMessage('');
        }
        try {
            const responseApi = await chatopen(message);
            const content = responseApi.content;
            setResponse(content);
            setChatHistory([...chatHistory, content]);
        }
        catch (error) {
            console.error('Error fetching member status:', error);
        }
    };

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        console.log('Key pressed:', e.key); // Add this line
        if (e.key === 'Enter' ) {
            e.preventDefault();
            handleSendMessage();
        }
        else if (e.key === 'Escape') {
            console.log('Escape pressed'); // Add this line
            e.preventDefault();
            toggleChatbox();
        }
    }


    return (
        <div className="chatbox-container">
            <button className="chatbox-toggle" onClick={toggleChatbox}>
                {isOpen ? 'Close' : 'Chat'}
            </button>
            <div className={`chatbox ${isOpen ? 'open' : ''}`}>
                {isOpen && (
                    <div className="chatbox-content">
                        <div className="chatbox-messages">
                            {chatHistory.map((msg, index) => (
                                <div key={index} className="chatbox-message">
                                    {msg}
                                </div>
                            ))}
                        </div>
                        <div className="chatbox-input">
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Type a message..."
                                onKeyPress={handleKeyPress}
                            />
                            <button onClick={handleSendMessage}>Send</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Chatbox;