import { useEffect, useState } from 'react';

import styles from './ProgressBar.module.css';

export default function ProgressBar({ cardIndex, totalCards }) {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    if (!totalCards) {
      setPercentage(0);
      return;
    }

    setPercentage(((cardIndex + 1) / totalCards) * 100);
  }, [cardIndex, totalCards]);

  if (!totalCards) {
    return null;
  }

  return (
    <div className={styles['progress-bar']}>
      <div className={styles['progress-track']}>
        <div
          className={styles['progress-indicator']}
          style={{ width: `${percentage}%` }}
        >
          <span className={styles['progress-percentage']}>
            {Math.round(percentage)}%
          </span>
        </div>
        <div className={styles['progress-meta']}>
          <span className={styles.total}>
            {cardIndex + 1} of {totalCards}
          </span>
        </div>
      </div>
    </div>
  );
}
