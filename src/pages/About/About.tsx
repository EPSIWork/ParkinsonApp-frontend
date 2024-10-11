import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-container">
      <h1>À propos de notre plateforme</h1>
      <p>
        Bienvenue sur <strong>Parkionsia</strong>, une plateforme dédiée à améliorer la vie des personnes atteintes de la maladie de Parkinson ainsi que celle de leurs proches. Notre mission est de proposer des solutions innovantes et accessibles pour accompagner les patients dans leur quotidien et leur offrir un suivi personnalisé, quel que soit le stade de progression de leur maladie.
      </p>
      <ul>
        <li>
          <strong>Suivi de la prise de médicaments :</strong> Recevez des alertes pour vous rappeler vos prises de médicaments et assurez-vous de respecter votre traitement de manière régulière.
        </li>
        <li>
          <strong>Suggestions personnalisées :</strong> Selon l’évolution de la maladie, notre système vous propose des conseils et des bonnes pratiques adaptées pour mieux gérer les symptômes et améliorer votre qualité de vie.
        </li>
        <li>
          <strong>Aide à la recherche d’aides-soignants :</strong> Lorsque vos proches ne peuvent pas être présents, nous vous facilitons la recherche d’aides-soignants qualifiés et disponibles près de chez vous, afin de garantir un accompagnement de qualité en toute tranquillité.
        </li>
        <li>
          <strong>Test de saisie des symptômes :</strong> Notre fonctionnalité de test vous permet de saisir vos symptômes régulièrement. Cela vous aide à suivre l'évolution de votre état de santé, et notre système utilise ces informations pour vous fournir des recommandations et des suivis adaptés.
        </li>
        <li>
          <strong>Chatbot intelligent :</strong> Besoin d'une assistance rapide ? Notre chatbot est là pour répondre à vos questions 24/7. Il peut vous guider dans l'utilisation de nos services, vous offrir des conseils personnalisés et vous aider à gérer votre quotidien en fonction de vos besoins.
        </li>
      </ul>
      <p>
        Notre objectif est de créer un espace de confiance et de soutien pour les patients et leur entourage, en utilisant des outils numériques intelligents et simples d’utilisation. Ensemble, nous voulons faire en sorte que chaque patient puisse continuer à vivre pleinement, en toute sérénité.
      </p>
    </div>
  );
};

export default About;