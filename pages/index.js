import styles from '../styles/Home.module.css';

import QuestionList from '../components/questionList';

import Questions from '../questions';

export default function Home() {
  return (
    <article className={styles.section}>
      <h1 className={styles.h1}>Question and Answers - Accordion</h1>
      <QuestionList questions={Questions} />
    </article>
  );
}
