import React from 'react';
import './styles/App.css';
import Header from './components/layout/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import './styles/globals.css';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import Chatbox from './components/ChatBox/ChatBox';
import Footer from './components/layout/Footer';
import Member from './pages/Member/Member';
import MedicalRecall from './pages/MedicalRecall/MedicalRecall';
import { AuthProvider } from 'context/AuthContext';
import TypingTest from './pages/Traitement/Traitement';
import About from 'pages/About/About';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="App">
          <Header />
          <div className="content">   
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/a-propos" element={<About />} />
              <Route path="/test-de-frappe" element={<TypingTest />} />
              <Route path="/member" element={<Member />} />
              <Route path="/medication-recall" element={<MedicalRecall />} />
            </Routes>
            <Chatbox />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;