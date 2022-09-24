import { useState } from 'react';
import styles from './question.module.css';

export default function Question({ question, answer }) {
  const [viewAnsMode, setViewAnsMode] = useState(false);

  const switchMode = () => {
    setViewAnsMode(!viewAnsMode);
  };

  return (
    <article className={styles.article}>
      <div className={styles.flexContainer}>
        <h3>{question}</h3>
        <button onClick={switchMode}>{viewAnsMode ? '-' : '+'}</button>
      </div>
      <p>{viewAnsMode && answer}</p>
    </article>
  );
}
