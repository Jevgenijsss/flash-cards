import { useState } from 'react';

import styles from './FlashCard.module.css';

export default function FlashCard({ cards, cardIndex, setCardIndex }) {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  if (!cards.length) {
    return null;
  }

  const currentCard = cards[cardIndex];

  if (!currentCard) {
    return null;
  }

  const answerClass = isAnswerVisible ? 'visible' : 'hidden';
  const questionClass = isAnswerVisible ? 'hidden' : 'visible';
  const answerBtnText = isAnswerVisible ? 'Hide Answer' : 'Show Answer';

  const changeCard = (direction) => {
    setIsAnswerVisible(false);

    setCardIndex((currentIndex) => {
      const nextIndex = currentIndex + direction;

      if (nextIndex < 0 || nextIndex >= cards.length) {
        return currentIndex;
      }

      return nextIndex;
    });
  };

  const showNextCard = () => changeCard(1);
  const showPreviousCard = () => changeCard(-1);
  const toggleVisible = () => setIsAnswerVisible((value) => !value);

  return (
    <>
      <div className={styles['flash-card']}>
        <div className={`${styles[questionClass]} ${styles.header}`}>
          {currentCard.question}
        </div>
        <div className={styles[answerClass]}>{currentCard.answer}</div>
      </div>

      <div className={styles.controls}>
        <button onClick={showPreviousCard}>Previous</button>
        <button onClick={toggleVisible}>{answerBtnText}</button>
        <button onClick={showNextCard}>Next</button>
      </div>
    </>
  );
}
