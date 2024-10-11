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
    let suggestion = 'Bon effort ! Continuez à pratiquer à votre rythme.';
    if (speed < 20) {
      suggestion = 'Prenez votre temps. Concentrez-vous sur une frappe régulière.';
    }
    if (accuracy < 70) {
      suggestion = 'La précision est essentielle. Essayez de taper chaque mot avec soin.';
    }
    if (speed < 20 && accuracy < 70) {
      suggestion = 'Rappelez-vous, il s’agit de progrès, pas de perfection. Continuez !';
    }
    setSuggestions(suggestion);
  }, []);
  
  const endTest = useCallback(() => {
    if (isRunning) {
      setIsRunning(false);
      const { speed, accuracy, time } = calculateResults();
      setResults((prevResults) => [...prevResults, { time, speed, accuracy }]);
      generateSuggestions(speed, accuracy);
      console.log(`Test terminé : ${keystrokes} frappes, Vitesse : ${speed.toFixed(2)} MPM, Précision : ${accuracy.toFixed(2)}%`);
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
      'Un voyage de mille lieues commence par un seul pas.',
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
      <h1>Test de dactylographie</h1>
      <p>Temps restant : {timeLeft}s</p>
      <p>Total des frappes : {keystrokes}</p>
      <p>Texte cible : {targetText}</p>
      <input
        type="text"
        value={userInput}
        onChange={handleInputChange}
        disabled={!isRunning}
        style={styles.input}
      />
      {!isRunning ? (
        <button onClick={startTest} style={styles.button}>
          Commencer le test
        </button>
      ) : (
        <button onClick={endTest} style={styles.endButton}>
          Terminer le test
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
        <XAxis dataKey="time" label={{ value: 'Temps (s)', position: 'insideBottomRight', offset: 0 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="speed" stroke="blue" name="Vitesse (MPM)" />
        <Line type="monotone" dataKey="accuracy" stroke="red" name="Précision (%)" />
      </LineChart>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    textAlign: 'center',
    padding: '50px',
    backgroundColor: 'white',
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
    backgroundColor: 'blue',
    fontSize: '16px',
    width: '80%',
    margin: '20px 0',
    color: 'white',
  },
  suggestions: {
    fontSize: '18px',
    color: 'purple',
    margin: '20px 0',
  },
};

export default TypingTest;