import React, { useState } from "react";

const QuestionCounter = () => {
  const [paragraph, setParagraph] = useState("");
  const [questionCount, setQuestionCount] = useState(0);

  // Fonction pour compter le nombre de questions dans le paragraphe
  const countQuestions = () => {
    // Utiliser une expression régulière pour détecter les points d'interrogation
    const questionRegex = /[?]/g;
    const questions = paragraph.match(questionRegex);

    // Utiliser une expression régulière pour détecter les pronoms qui démarrent une question
    const pronounRegex = /\b(qui|quoi|où|comment|pourquoi|quel|quelle|quand)\b/gi;
    const pronounQuestions = paragraph.match(pronounRegex);

    // Calculer le nombre total de questions
    let totalQuestions = 0;
    if (questions) {
      totalQuestions += questions.length;
    }
    if (pronounQuestions) {
      totalQuestions += pronounQuestions.length;
    }

    setQuestionCount(totalQuestions);
  };

  // Gérer le changement du texte du paragraphe
  const handleParagraphChange = (e) => {
    setParagraph(e.target.value);
  };

  // Gérer la soumission du formulaire pour compter les questions
  const handleSubmit = (e) => {
    e.preventDefault();
    countQuestions();
  };

  return (
    <div>
      <h2>Compteur de questions</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Entrez votre paragraphe :
          <textarea
            rows={5}
            value={paragraph}
            onChange={handleParagraphChange}
          />
        </label>
        <button type="submit">Compter les questions</button>
      </form>
      <div>
        <h3>Résultat :</h3>
        <p>Nombre de questions : {questionCount}</p>
      </div>
    </div>
  );
};

export default QuestionCounter;
