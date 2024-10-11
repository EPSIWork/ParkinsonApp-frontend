import React, { useState, useEffect, useCallback } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

interface Result {
  time: number;
  speed: number;
  accuracy: number;
}

const TypingTest: React.FC = () => {
  const [keystrokes, setKeystrokes] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(30);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [results, setResults] = useState<Result[]>([]);
  const [targetText, setTargetText] = useState<string>('');
  const [userInput, setUserInput] = useState<string>('');
  const [suggestions, setSuggestions] = useState<string>('');

  useEffect(() => {
    if (!isRunning) {
      setTargetText(generateRandomText());
    }
  }, [isRunning]);

  const calculateResults = useCallback(() => {
    const totalDuration = startTime ? (new Date().getTime() - startTime.getTime()) / 1000 : 0;
    const wordsTyped = userInput.split(' ').length;
    const speed = (wordsTyped / totalDuration) * 60;
    const correctChars = userInput.split('').filter((char, index) => char === targetText[index]).length;
    const accuracy = (correctChars / targetText.length) * 100;
    return { speed, accuracy, time: totalDuration };
  }, [startTime, userInput, targetText]);

  const generateSuggestions = useCallback((speed: number, accuracy: number) => {
    let suggestion = 'Great effort! Keep practicing at your own pace.';
    if (speed < 20) {
      suggestion = 'Take your time. Focus on steady typing.';
    }
    if (accuracy < 70) {
      suggestion = 'Accuracy is key. Try to type each word carefully.';
    }
    if (speed < 20 && accuracy < 70) {
      suggestion = 'Remember, it’s about progress, not perfection. Keep going!';
    }
    setSuggestions(suggestion);
  }, []);
  
  const endTest = useCallback(() => {
    if (isRunning) {
      setIsRunning(false);
      const { speed, accuracy, time } = calculateResults();
      setResults((prevResults) => [...prevResults, { time, speed, accuracy }]);
      generateSuggestions(speed, accuracy);
      console.log(`Test completed: ${keystrokes} keystrokes, Speed: ${speed.toFixed(2)} WPM, Accuracy: ${accuracy.toFixed(2)}%`);
    }
  }, [isRunning, keystrokes, calculateResults, generateSuggestions]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      endTest();
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft, endTest]);

  const generateRandomText = (): string => {
    const texts = [
      'A journey of a thousand miles begins with a single step.',
    ];
    return texts[Math.floor(Math.random() * texts.length)];
  };

  const startTest = () => {
    setIsRunning(true);
    setKeystrokes(0);
    setTimeLeft(30);
    setStartTime(new Date());
    setUserInput('');
    setSuggestions('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isRunning) {
      const input = e.target.value;
      setUserInput(input);
      setKeystrokes(input.length);
    }
  };



  return (
    <div style={styles.container}>
      <h1>Typing Test</h1>
      <p>Time Left: {timeLeft}s</p>
      <p>Total Keystrokes: {keystrokes}</p>
      <p>Target Text: {targetText}</p>
      <input
        type="text"
        value={userInput}
        onChange={handleInputChange}
        disabled={!isRunning}
        style={styles.input}
      />
      {!isRunning ? (
        <button onClick={startTest} style={styles.button}>
          Start Test
        </button>
      ) : (
        <button onClick={endTest} style={styles.endButton}>
          End Test
        </button>
      )}
      <p style={styles.suggestions}>{suggestions}</p>
      <LineChart
        width={500}
        height={300}
        data={results}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" label={{ value: 'Time (s)', position: 'insideBottomRight', offset: 0 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="speed" stroke="blue" name="Speed (WPM)" />
        <Line type="monotone" dataKey="accuracy" stroke="red" name="Accuracy (%)" />
      </LineChart>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    textAlign: 'center',
    padding: '50px',
  },
  button: {
    padding: '20px',
    fontSize: '18px',
    backgroundColor: 'blue',
    color: 'white',
    margin: '20px',
    cursor: 'pointer',
  },
  endButton: {
    padding: '20px',
    fontSize: '18px',
    backgroundColor: 'red',
    color: 'white',
    margin: '20px',
    cursor: 'pointer',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    width: '80%',
    margin: '20px 0',
  },
  suggestions: {
    fontSize: '18px',
    color: 'purple',
    margin: '20px 0',
  },
};

export default TypingTest;

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
// import './Traitement.css';

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const Traitements: React.FC = () => {
//     const navigate = useNavigate();
// // 
//     const chartData = {
//         labels: ['January', 'February', 'March', 'April', 'May', 'June'],
//         datasets: [
//             {
//                 label: 'Treatment Progress',
//                 data: [12, 19, 3, 5, 2, 3],
//                 backgroundColor: 'rgba(75, 192, 192, 0.6)',
//                 borderColor: 'rgba(75, 192, 192, 1)',
//                 borderWidth: 1,
//             },
//         ],
//     };

//     const chartOptions = {
//         responsive: true,
//         plugins: {
//             legend: {
//                 position: 'top' as const,
//             },
//             title: {
//                 display: true,
//                 text: 'Treatment Progress Over Time',
//             },
//         },
//     };

//     return (
//         <div className="traitements-container">
//             <h1>Traitements</h1>
//             <button className="redirect-button" onClick={() => navigate('/details-traitement')}>
//                 Voir les détails du traitement
//             </button>
//             <div className="chart-container">
//                 <Bar data={chartData} options={chartOptions} />
//             </div>
//         </div>
//     );
// }

// export default Traitements;